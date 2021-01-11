var CACHE_NAME = 'staticV2';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                './',

                //
                // '../css/materialize.css',
                '../css/style.css',
                //  '../css/materialdesignicons.css',
                //   '../css/materialdesignicons.css.map',
                //
                '../js/jquery-3.2.1.min.js',
                //   '../js/materialize.js',
                '../js/init.js',
                //    '../js/camera.js',
                //
                '../assets/img/profile.jpg',
                '../assets/img/favicon.ico',

                //
                //   '../fonts/materialdesignicons-webfont.woff2?v=5.8.55',
                //
                '../manifest.json',
            ]);
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});