const CACHE_NAME = 'farpg-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/TemplateData/style.css',
  '/Build/Build.data',
  '/Build/Build.framework.js',
  '/Build/Build.loader.js',
  '/Build/Build.wasm',
  '/TemplateData/favicon.ico',
  '/TemplateData/apple-touch-icon.png',
  '/TemplateData/favicon-32x32.png',
  '/TemplateData/favicon-16x16.png'
];
/*
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
*/
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('farpg-cache-v1').then((cache) => {
        return cache.addAll([
            '/',
            '/index.html',
            '/TemplateData/style.css',
            '/Build/Build.data',
            '/Build/Build.framework.js',
            '/Build/Build.loader.js',
            '/Build/Build.wasm',
            '/TemplateData/favicon.ico',
            '/TemplateData/apple-touch-icon.png',
            '/TemplateData/favicon-32x32.png',
            '/TemplateData/favicon-16x16.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });