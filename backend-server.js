const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const axios = require('axios');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ── FIREBASE INIT ──
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
if(Object.keys(serviceAccount).length > 0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}
const db = admin.firestore();
const messaging = admin.messaging();

// ── DAILY.CO CONFIG ──
const DAILY_API_KEY = process.env.DAILY_API_KEY || 'f1e8fa6c6616deed144f12221b078e3b496a0ffe9e49d2c6166ac90abc52824b';
const DAILY_API_URL = 'https://api.daily.co/v1';
const DAILY_DOMAIN = 'flyhome.daily.co';

// ── HEALTH CHECK ──
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ── CREATE DAILY.CO ROOM ──
app.post('/api/call/create-room', async (req, res) => {
  try {
    const { roomName, participants } = req.body;
    if(!roomName) return res.status(400).json({ error: 'Room name required' });
    
    const response = await axios.post(`${DAILY_API_URL}/rooms`, {
      name: roomName,
      privacy: 'private',
      max_participants: 2,
      config: {
        enable_chat: true,
        enable_recording: false
      }
    }, {
      headers: { Authorization: `Bearer ${DAILY_API_KEY}` }
    });
    
    const room = response.data.data;
    
    // Log room creation to Firestore
    await db.collection('rooms').doc(roomName).set({
      roomName,
      url: room.url,
      createdAt: new Date(),
      participants: participants || []
    });
    
    res.json({ success: true, url: room.url, roomName });
  } catch(err) {
    console.error('Daily.co error:', err.response?.data || err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── GET DAILY.CO ROOM ──
app.get('/api/call/room/:roomName', async (req, res) => {
  try {
    const { roomName } = req.params;
    const response = await axios.get(`${DAILY_API_URL}/rooms/${roomName}`, {
      headers: { Authorization: `Bearer ${DAILY_API_KEY}` }
    });
    res.json(response.data.data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// ── SEND PUSH NOTIFICATION ──
app.post('/api/notifications/send', async (req, res) => {
  try {
    const { userId, title, body, data } = req.body;
    if(!userId) return res.status(400).json({ error: 'User ID required' });
    
    // Get user's FCM token from Firestore
    const userDoc = await db.collection('users').doc(userId).get();
    if(!userDoc.exists) return res.status(404).json({ error: 'User not found' });
    
    const fcmToken = userDoc.data().fcmToken;
    if(!fcmToken) return res.status(400).json({ error: 'No FCM token for user' });
    
    const message = {
      token: fcmToken,
      notification: { title, body },
      data: data || {},
      webpush: {
        fcmOptions: { link: '/app' },
        notification: {
          title,
          body,
          icon: '/favicon.ico'
        }
      }
    };
    
    const result = await messaging.send(message);
    res.json({ success: true, messageId: result });
  } catch(err) {
    console.error('Notification error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── BROADCAST MESSAGE NOTIFICATION ──
app.post('/api/notifications/message', async (req, res) => {
  try {
    const { fromUserId, toUserId, message } = req.body;
    if(!toUserId || !message) return res.status(400).json({ error: 'Missing required fields' });
    
    // Get sender name
    const senderDoc = await db.collection('users').doc(fromUserId).get();
    const senderName = senderDoc.data()?.name || 'Someone';
    
    // Send notification to recipient
    const toUserDoc = await db.collection('users').doc(toUserId).get();
    if(!toUserDoc.exists) return res.status(404).json({ error: 'Recipient not found' });
    
    const fcmToken = toUserDoc.data().fcmToken;
    if(fcmToken) {
      await messaging.send({
        token: fcmToken,
        notification: {
          title: `💬 New message from ${senderName}`,
          body: message.substring(0, 100)
        },
        data: {
          type: 'message',
          fromUserId,
          senderName
        },
        webpush: {
          fcmOptions: { link: '/app?page=connection' }
        }
      });
    }
    
    res.json({ success: true });
  } catch(err) {
    console.error('Message notification error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── REGISTER FCM TOKEN ──
app.post('/api/users/register-token', async (req, res) => {
  try {
    const { userId, fcmToken } = req.body;
    if(!userId || !fcmToken) return res.status(400).json({ error: 'User ID and token required' });
    
    await db.collection('users').doc(userId).update({
      fcmToken,
      tokenUpdatedAt: new Date()
    });
    
    res.json({ success: true });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// ── CALL INVITATION ──
app.post('/api/calls/invite', async (req, res) => {
  try {
    const { fromUserId, toUserId, roomName } = req.body;
    if(!fromUserId || !toUserId || !roomName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Get caller info
    const callerDoc = await db.collection('users').doc(fromUserId).get();
    const callerName = callerDoc.data()?.name || 'Someone';
    
    // Save call invite to Firestore
    const callId = `${fromUserId}_${toUserId}_${Date.now()}`;
    await db.collection('calls').doc(callId).set({
      fromUserId,
      toUserId,
      callerName,
      roomName,
      status: 'pending',
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 60000) // 1 minute expiry
    });
    
    // Send push notification
    const toUserDoc = await db.collection('users').doc(toUserId).get();
    const fcmToken = toUserDoc.data().fcmToken;
    if(fcmToken) {
      await messaging.send({
        token: fcmToken,
        notification: {
          title: `📞 ${callerName} is calling...`,
          body: 'Tap to join the call'
        },
        data: {
          type: 'call',
          callId,
          fromUserId,
          roomName,
          callerName
        },
        webpush: {
          fcmOptions: { link: `/app?call=${callId}` }
        }
      });
    }
    
    res.json({ success: true, callId });
  } catch(err) {
    console.error('Call invite error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ── ANSWER CALL ──
app.post('/api/calls/answer', async (req, res) => {
  try {
    const { callId } = req.body;
    if(!callId) return res.status(400).json({ error: 'Call ID required' });
    
    await db.collection('calls').doc(callId).update({
      status: 'answered',
      answeredAt: new Date()
    });
    
    res.json({ success: true });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// ── STRIPE WEBHOOK ──
app.post('/webhook/stripe', express.raw({type: 'application/json'}), async (req, res) => {
  try {
    const sig = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
    
    if(event.type === 'charge.succeeded') {
      const { metadata } = event.data.object;
      if(metadata?.userId && metadata?.plan) {
        await db.collection('users').doc(metadata.userId).update({
          plan: metadata.plan,
          planUpdatedAt: new Date()
        });
      }
    }
    
    res.json({ received: true });
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

// ── USER PRESENCE ──
app.post('/api/users/presence', async (req, res) => {
  try {
    const { userId, online } = req.body;
    if(!userId) return res.status(400).json({ error: 'User ID required' });
    
    await db.collection('users').doc(userId).update({
      online: online || true,
      lastSeen: new Date()
    });
    
    res.json({ success: true });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// ── START SERVER ──
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 FlyHome backend running on port ${PORT}`);
  console.log(`📱 Daily.co domain: ${DAILY_DOMAIN}`);
});
