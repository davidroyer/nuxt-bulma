importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-bulma",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d474aba7fcd46cb4b517.js",
    "revision": "8ec3ccc22144798bc8b95e94ece991f6"
  },
  {
    "url": "/_nuxt/layouts/default.985a2e8793cf388165fc.js",
    "revision": "4c01b802580e94c31982b5fa62e0bd54"
  },
  {
    "url": "/_nuxt/manifest.f7d48b7c0b52fd603914.js",
    "revision": "a88a840dfa08cff30d2d5913df4f42fc"
  },
  {
    "url": "/_nuxt/pages/index.9dda7ab1d160fad0def1.js",
    "revision": "41acc7fdc441e30a27d129c123f9d94d"
  },
  {
    "url": "/_nuxt/pages/posts.620e5906d9699eae2aa4.js",
    "revision": "4fc27f60a83ff819019a662c7052f5d2"
  },
  {
    "url": "/_nuxt/vendor.b2d3dfd070adac293422.js",
    "revision": "2be0d0504c9a7ee89f437a26c86cd0a8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

