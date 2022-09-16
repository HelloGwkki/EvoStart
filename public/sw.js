'use strict';


importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

workbox.setConfig();

if (workbox) {
  console.log(`✨Yay! Workbox is loaded✨`);
} else {
  console.warn(`🤔 | Boo! Workbox didn't load`);
}


workbox.routing.registerRoute(
  /index\.html/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'html-cache',
  })
);

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


workbox.routing.registerRoute(
    /.*\.(png|jpg|jpeg|svg|ico)/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'img-cache',
    })
);
