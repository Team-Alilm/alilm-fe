importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// 🛠 푸시 알림 처리
self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json().data;
    const options = {
      body: data.body,
      icon: data.image || '/default-icon.png',
      data: { click_action: data.click_action },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// 🛠 알림 클릭 이벤트 처리
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  const action = event.notification.data?.click_action;
  if (action) {
    event.waitUntil(clients.openWindow(action));
  }
});

// 🛠 백그라운드 메시지 처리
messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Background Message', payload);
  const data = payload.notification || {};
  const notificationTitle = data.title || '알림';
  const notificationOptions = {
    body: data.body || '메시지 내용 없음',
    icon: data.image || '/default-icon.png',
    data: { click_action: data.click_action },
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// ✨ 불필요한 fetch 이벤트 제거 (서비스 워커 유지에는 영향 없음)

// ✨ 서비스 워커 업데이트 반영
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
