importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// `isBackground` 플래그를 사용하여 중복 알림 방지
let isBackgroundMessageReceived = false;

self.addEventListener('push', function (event) {
  if (event.data) {
    const notificationTitle = event.notification?.title || '알림 제목 없음';
    const notificationOptions = {
      body: event.notification?.body || '알림 내용 없음',
      icon: event.notification?.icon || '/default-icon.png',
      image: event.notification?.image || '/default-image.png',
      data: {
        click_action: event.data?.click_action || '/',
      },
    };

    // 이미 백그라운드에서 알림을 처리했는지 확인
    if (!isBackgroundMessageReceived) {
      event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
    }
  } else {
    console.info('This push event has no data.');
  }
});

// 🔹 알림 클릭 시 특정 URL로 이동하도록 처리
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

messaging.onBackgroundMessage(payload => {
  if (!isBackgroundMessageReceived) {
    self.registration
      .showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.image,
        data: {
          click_action: payload.data.click_action,
        },
      })
      .then(r => console.log(r));

    // 백그라운드 메시지를 처리했음을 표시
    isBackgroundMessageReceived = true;
  }
});
