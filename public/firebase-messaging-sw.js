importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Firebase 초기화
firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// 📌 FCM 백그라운드 메시지 처리
messaging.onBackgroundMessage(payload => {
  const { title, body, image } = payload.notification;
  const clickAction = payload.data?.click_action || '/';

  const options = {
    body: body || '알림 내용 없음',
    icon: image || '/default-icon.png',
    data: {
      click_action: clickAction,
    },
  };

  self.registration.showNotification(title || '알림', options);
});

// 🔹 알림 클릭 시 이동 처리
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
