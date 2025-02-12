importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});
const messaging = firebase.messaging();

// 클릭 이벤트 처리 - 알림을 클릭 시 사이트로 이동
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  if (event.notification.data.click_action) {
    clients.openWindow(event.notification.data.click_action);
  }
});

// 백그라운드 메시지 처리
messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);

  const data = payload.notification || {};
  const notificationTitle = data.title || '알림';
  const notificationOptions = {
    body: data.body || '메시지 내용 없음',
    image: data.image || '',
    data: { click_action: data.click_action },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
