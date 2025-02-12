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
  if (!event.data) {
    console.info('This push event has no data.');
    return;
  }

  const data = event.data.json().data;

  // Firebase가 이미 처리한 메시지라면 다시 띄우지 않도록 체크
  if (data && data.firebaseMessaging) {
    console.log('Skipping duplicate Firebase message.');
    return;
  }

  const options = {
    body: data.body,
    icon: data.icon || 'https://example.com/default-icon.png',
    image: data.image,
    data: {
      click_action: data.click_action,
    },
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});
