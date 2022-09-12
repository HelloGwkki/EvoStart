'use strict';


importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});

if (workbox) {
  console.log(`✨Yay! Workbox is loaded✨`);
} else {
  console.warn(`🤔 | Boo! Workbox didn't load`);
}

//css
workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css-cache',
  })
);
//js
workbox.routing.registerRoute(
  /.*\.js/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'js-cache',
  })
);
//image
workbox.routing.registerRoute(
    /.*\.(png|jpg|jpeg|svg|ico)/,
    workbox.strategies.cacheFirst({
      cacheName: 'img-cache',
    })
);
//index.html
workbox.routing.registerRoute(
  /index\.html/,
  workbox.strategies.networkFirst({
    cacheName: 'html-cache',
  })
);