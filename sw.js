var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
  '/index2.html'
];


self.addEventListener('install', function(event) {
    // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );


  });


  self.addEventListener('fetch', function(event) {
    console.log("Fetch event is called");
    event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Cache hit - return response
            if (response) {
              return response;
            }
            return fetch(event.request);
          }
        )
      );
  });

  self.addEventListener('activate', function(event) {
    console.log("activate event is called");
  });