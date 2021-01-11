var CACHE_NAME = 'staticV2';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                './',

                //
               // '../css/materialize.css',
                '../css/style.css',
             //   '../css/materialdesignicons.css',
             //   '../css/materialdesignicons.css.map',
                 //
                 '../js/jquery-3.2.1.min.js',
              //   '../js/materialize.js',
                 '../js/init.js',
             //    '../js/camera.js',
                 //
                '../assets/img/img0.jpg',
                '../assets/img/img1.jpg',
                '../assets/img/img2.jpg',
                '../assets/img/img3.jpg',
                '../assets/img/img4.jpg',
                '../assets/img/img5.jpg',
                '../assets/img/img6.jpg',
                '../assets/img/img7.jpg',
                '../assets/img/img8.jpg',
                '../assets/img/img9.jpg',
                '../assets/img/img10.jpg',
                '../assets/img/icon.ico',
                '../assets/img/logo.png',
                //
                '../fonts/materialdesignicons-webfont.woff2?v=5.8.55',
                //
                '../manifest.json',
             ]);
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});