importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
  projectId: 'alilm-6ed94',
  messagingSenderId: '815885197726',
  appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
});

const messaging = firebase.messaging();

// self.addEventListener('push', function (event) {
//     if (event.data) {
//         const data = event.data.json().data;
//         const options = {
//             body: data.body,
//             icon: data.image,
//             image: data.image,
//             data: {
//                 click_action: data.click_action,
//             },
//         };
//         event.waitUntil(self.registration.showNotification(data.title, options));
//     } else {
//         console.info('This push event has no data.');
//     }
// });

messaging.onBackgroundMessage(payload => {
  self.registration
    .showNotification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.image,
      image: payload.notification.image,
      data: {
        click_action: payload.data.click_action,
      },
    })
    .then(r => console.log(r));
});
//
// self.onmessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//
//     const data = payload.data;
//     const options = {
//         body: data.body,
//         icon: data.image,
//         image: data.image,
//         data: {
//             click_action: data.click_action,
//         },
//     };
//
//     self.registration.showNotification(data.title, options).then(r => console.log(r));
// })
