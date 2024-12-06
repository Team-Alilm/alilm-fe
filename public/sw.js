if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + '.js', i).href),
    s[c] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[n]) return;
    let t = {};
    const o = e => c(e, n),
      r = { module: { uri: n }, exports: t, require: o };
    s[n] = Promise.all(i.map(e => r[e] || o(e))).then(e => (a(...e), t));
  };
}
define(['./workbox-e9849328'], function (workbox) {
  'use strict';
  importScripts(
    'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js'
  );

  // Firebase 초기화
  firebase.initializeApp({
    apiKey: 'AIzaSyA8kZXi2ox6qhgUKpk1gBEd48o3Q7rZkjU',
    projectId: 'alilm-6ed94',
    messagingSenderId: '815885197726',
    appId: '1:815885197726:web:d3170a092c2ad613a0f68f',
  });

  const messaging = firebase.messaging();

  // FCM 푸시 알림 처리
  self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json().data;
      const options = {
        body: data.body,
        icon: data.icon || '/default-icon.png',
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

  // 알림 클릭 처리
  self.addEventListener('notificationclick', function (event) {
    const clickActionUrl = event.notification.data.click_action;
    event.notification.close();
    event.waitUntil(clients.openWindow(clickActionUrl));
  });

  // Workbox 초기화
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
  workbox.clientsClaim();
  self.skipWaiting();

  // 추가적인 Workbox 캐싱 전략
  workbox.routing.registerRoute(
    new RegExp('/_next/static/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'next-static',
    })
  );

  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1주일
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1년
        }),
      ],
    })
  );
});
