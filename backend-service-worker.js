// Service Worker for FlyHome push notifications

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const { title, body, icon, badge } = data.notification || {};
  
  const options = {
    body,
    icon: icon || '/favicon.ico',
    badge: badge || '/favicon.ico',
    data: data.data || {},
    tag: data.data?.type || 'notification',
    requireInteraction: data.data?.type === 'call'
  };
  
  event.waitUntil(
    self.registration.showNotification(title || 'FlyHome', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  const { data } = event.notification;
  event.notification.close();
  
  let url = '/';
  if(data?.type === 'call') {
    url = `/?call=${data.callId}`;
  } else if(data?.type === 'message') {
    url = `/?chat=${data.fromUserId}`;
  }
  
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Check if window already open
      for(let client of clientList) {
        if(client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window
      if(clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
