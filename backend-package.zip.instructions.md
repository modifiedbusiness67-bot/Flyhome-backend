# FlyHome Backend Package - Everything You Need

Since you can't download folders directly, here are ALL the files you need to create:

## Folder Structure to Create

```
flyhome-backend/
├── package.json
├── server.js
├── .env.example
├── .env (copy from .env.example and fill in)
├── .gitignore
├── README.md
└── public/
    └── service-worker.js
```

---

## File 1: package.json

Copy this exactly:

```json
{
  "name": "flyhome-backend",
  "version": "1.0.0",
  "description": "FlyHome backend: Daily.co calls, Firebase messaging, push notifications",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "firebase-admin": "^11.10.0",
    "axios": "^1.4.0",
    "stripe": "^12.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

---

## File 2: server.js

[FULL BACKEND CODE - see server.js in outputs folder]

Or download `server.js` from `/mnt/user-data/outputs/`

---

## File 3: .env.example

```
# Backend Config
PORT=3000
NODE_ENV=production

# Firebase
FIREBASE_PROJECT_ID=flyhome-6ed03
FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"flyhome-6ed03",...}

# Daily.co
DAILY_API_KEY=f1e8fa6c6616deed144f12221b078e3b496a0ffe9e49d2c6166ac90abc52824b

# Stripe (optional for now)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## File 4: .env (Production Config)

Copy `.env.example` to `.env` and fill in:

**FIREBASE_SERVICE_ACCOUNT** (the big one):
1. Go to: https://console.firebase.google.com/project/flyhome-6ed03/settings/serviceaccounts/adminsdk
2. Click **Generate New Private Key**
3. You'll get a JSON file
4. Copy the entire content and paste it as the value (remove all newlines)

**DAILY_API_KEY** - Already provided:
```
f1e8fa6c6616deed144f12221b078e3b496a0ffe9e49d2c6166ac90abc52824b
```

**STRIPE_** - Leave blank for now (optional)

---

## File 5: .gitignore

```
node_modules/
.env
.env.local
.DS_Store
*.log
dist/
```

---

## File 6: public/service-worker.js

[Download from outputs folder or create the file shown in DEPLOYMENT.md]

---

## File 7: README.md

[Download from outputs folder]

---

## Then: Deploy to Render

1. Push this folder to GitHub: https://github.com/new
   ```bash
   git init
   git add .
   git commit -m "FlyHome backend"
   git remote add origin https://github.com/YOUR_USERNAME/flyhome-backend.git
   git push -u origin main
   ```

2. Go to Render: https://render.com
3. Sign up (no card needed)
4. Create **New Web Service**
5. Connect your GitHub repo
6. Add environment variables from your `.env` file
7. Click **Deploy**
8. Wait 5 mins, copy your URL: `https://flyhome-backend-xxxxx.onrender.com`

9. Update FlyHome's `window.BACKEND_URL` with this URL
10. Deploy FlyHome to Netlify
11. Test on two devices

---

## All Downloads Available

Check `/mnt/user-data/outputs/`:
- `server.js` ✓
- `package.json` ✓ (recreate above)
- `.env.example` ✓
- `public/service-worker.js` ✓
- `README.md` ✓

Plus:
- `flyhome-index.html` — updated FlyHome
- `QUICK_START.md` — quick guide
- `DEPLOYMENT.md` — full guide

---

Done! You have everything to go live. 🚀
