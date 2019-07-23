importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5442ee39fe6c9e403b5b.js",
    "revision": "4573eef1706294b8a43ffdacf9a285e2"
  },
  {
    "url": "/_nuxt/7ab3ba4556e0c30ac8d5.js",
    "revision": "3b57bcafadb002245430b44b378fe27a"
  },
  {
    "url": "/_nuxt/a390728b82b2a31a27c8.js",
    "revision": "4cd46db4f5ab40c2ea6bf5823af210b5"
  },
  {
    "url": "/_nuxt/bc5bfaf387497e25ecce.js",
    "revision": "68579cedc1bb209c5fb5dc3b99807211"
  },
  {
    "url": "/_nuxt/f4145b9e2502e63e1d2e.js",
    "revision": "e85e26cccdbd5bbfe1ab8ed2aa600a02"
  },
  {
    "url": "/_nuxt/f7a1e8b8a7bbc5ecfbc5.js",
    "revision": "1c9051bb51510842c5f5a64a7adf3b73"
  }
], {
  "cacheId": "cityjsconf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
