importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});
const messaging = firebase.messaging();

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json().data;
    const options = {
      body: data.body,
      icon:
        data.icon ||
        'https://file.notion.so/f/f/c345e317-1a77-4e86-8b67-b491a5db92b8/732799dc-6ad9-46f8-8864-22308c10cdb8/free-icon-bells-7124213.png?table=block&id=1037b278-57a0-8022-8a73-ea04c03ae27e&spaceId=c345e317-1a77-4e86-8b67-b491a5db92b8&expirationTimestamp=1730354400000&signature=hBdHPuerhscY6rXIkAe40sWyyvEq22eyqZ7AqA2Gt5o&downloadName=free-icon-bells-7124213.png',
      image: data.image,
      data: {
        click_action: data.click_action,
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  } else {
    console.info('This push event has no data.');
  }
});

// 클릭 이벤트 처리 - 알림을 클릭 시 사이트로 이동
self.addEventListener('notificationclick', function (event) {
  const clickActionUrl = event.notification.data.click_action;
  event.notification.close();
  event.waitUntil(clients.openWindow(clickActionUrl));
});

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'Default Title';
  const notificationOptions = {
    body: payload.notification?.body,
    icon:
      data.icon ||
      'https://file.notion.so/f/f/c345e317-1a77-4e86-8b67-b491a5db92b8/732799dc-6ad9-46f8-8864-22308c10cdb8/free-icon-bells-7124213.png?table=block&id=1037b278-57a0-8022-8a73-ea04c03ae27e&spaceId=c345e317-1a77-4e86-8b67-b491a5db92b8&expirationTimestamp=1730354400000&signature=hBdHPuerhscY6rXIkAe40sWyyvEq22eyqZ7AqA2Gt5o&downloadName=free-icon-bells-7124213.png',
    image: data.image,
    data: payload.data || {},
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
