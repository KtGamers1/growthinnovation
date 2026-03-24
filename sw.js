const CACHE_NAME = 'growth-hub-v1';
const urlsToCache = [
    './',
    './index.html',
    './logo.png',
    './manifest.json'
];

// Install hone par files cache karega
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event (Ye Chrome ke liye zaruri hai install icon dikhane ke liye)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
