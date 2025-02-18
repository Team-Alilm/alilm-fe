importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
    projectId: 'alilm-6ed94',
    messagingSenderId: '815885197726',
    appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// 🛠 알림 클릭 이벤트 처리
self.addEventListener("notificationclick", function (event, clients) {
    event.notification.close();
    const action = event.notification.data?.click_action;
    if (action) {
        event.waitUntil(clients.openWindow(action));
    }
});