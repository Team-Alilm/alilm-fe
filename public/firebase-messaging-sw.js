importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// 푸시 내용 처리해서 알림 표시
// self.addEventListener('push', function (event) {});

self.addEventListener('push', function (event) {
  if (event.data) {
    // 알림 메세지일 경우엔 event.data.json().notification;
    const data = event.data.json().data;
    console.log('Parsed data:', data);
    const options = {
      body: data.body,
      icon: data.icon,
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
