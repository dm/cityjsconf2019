importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01e7e42b21cc52c37ab0.js",
    "revision": "960fb14f80e26878e16fba2aa35dcb03"
  },
  {
    "url": "/_nuxt/5afe51b481f925267f56.js",
    "revision": "4b7170de465aebb453974eba3c26e12c"
  },
  {
    "url": "/_nuxt/5f912f357dae0f6ef8e9.js",
    "revision": "9d0d3981ec85d5ff1bbe9f6f4b955eb2"
  },
  {
    "url": "/_nuxt/6d6dcea3d078c470f379.js",
    "revision": "0067e5926025050e6d6bfb6c3b6b9b21"
  },
  {
    "url": "/_nuxt/93cd44d7b9f5b0de36e1.js",
    "revision": "654572edf4c1b8729629a8302787936d"
  },
  {
    "url": "/_nuxt/b39f9ef856533888f2b3.js",
    "revision": "b4c97ff36b6d361ca0b6d722dd925058"
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
