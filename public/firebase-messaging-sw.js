importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// ✅ notification 대신 data만 사용하는 경우에만 알림 표시
messaging.onBackgroundMessage(payload => {
  // payload.notification 이 있으면 브라우저가 자동으로 표시함 → 중복 방지
  if (!payload.notification && payload.data) {
    const { title, body, image, click_action } = payload.data;

    const options = {
      body: body || '알림 내용 없음',
      icon: image || '/default-icon.png',
      data: {
        click_action: click_action || '/',
      },
    };

    self.registration.showNotification(title || '알림', options);
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const clickAction = event.notification.data?.click_action || '/';

  event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
        for (const client of clientList) {
          if (client.url === clickAction && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(clickAction);
        }
      })
  );
});