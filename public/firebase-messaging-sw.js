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
    console.log('[firebase-messaging-sw.js] Received a push message', event);

    if (event.data) {
        event.waitUntil(
            self.registration.showNotification('알림', {
                body: event.data.text(),
                icon: '/default-icon.png',
            })
        );
    }
})

// 🛠 알림 클릭 이벤트 처리
self.addEventListener("notificationclick", function (event, clients) {
    event.notification.close();
    const action = event.notification.data?.click_action;
    if (action) {
        event.waitUntil(clients.openWindow(action));
    }
});

messaging.onMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received foreground message ', payload);

    const notification = payload.notification || {};
    const notificationTitle = notification.title || '알림';
    const notificationOptions = {
        body: notification.body || '메시지 내용 없음',
        icon: notification.image || '/default-icon.png',
        data: {click_action: payload.data.click_action},
    };
    self.registration.showNotification(notificationTitle, notificationOptions).then(r => console.log(r));
});

// 🛠 백그라운드 메시지 처리
messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Background Message', payload);

    const notification = payload.notification || {};
    const notificationTitle = notification.title || '알림';
    const notificationOptions = {
        body: notification.body || '메시지 내용 없음',
        icon: notification.image || '/default-icon.png',
        data: {click_action: payload.data.click_action},
    };
    self.registration.showNotification(notificationTitle, notificationOptions).then(r => console.log(r));
});