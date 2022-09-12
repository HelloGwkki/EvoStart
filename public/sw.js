'use strict';
//使用阿里的CDN
importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});

if (workbox) {
  console.log(`✨Yay! Workbox is loaded✨`);
} else {
  console.warn(`🤔 | Boo! Workbox didn't load`);
}
workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'css-cache',
  })
);
workbox.routing.registerRoute(
  // 缓存JS文件
  /.*\.js/,
  // 使用缓存，但尽快在后台更新
  workbox.strategies.staleWhileRevalidate({
    // 使用自定义缓存名称
    cacheName: 'js-cache',
  })
);
workbox.routing.registerRoute(
    // 缓存 background.png.
    new RegExp("background.png"),
    // 使用缓存，但尽快在后台更新
    workbox.strategies.staleWhileRevalidate({
      // 使用自定义缓存名称
      cacheName: 'js-cache',
    })
);

// 模型缓存
workbox.routing.registerRoute(
  new RegExp('http://tile.railplus.com/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'model-cache',
  })
);

// 模型缓存
workbox.routing.registerRoute(
  new RegExp('.+\.b3dm$'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'model-cache',
  })
);

// 模型缓存
workbox.routing.registerRoute(
  new RegExp('.+\.gltf$'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'model-cache',
  })
);
// 模型缓存
workbox.routing.registerRoute(
  new RegExp('.+\.glb$'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'model-cache',
  })
);