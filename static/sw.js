export const registerServiceWorker = () => {
    const CACHE_VERSION = 1;
    const hackerNewsCache = `cache-v${CACHE_VERSION}`;

    self.addEventListener('fetch', (event) => {
        console.log('Handling fetch event for', event.request.url);

        event.respondWith(
            caches.open(hackerNewsCache).then((cache) => cache.match(event.request).then((response) => {
                if (response) {
                    console.log('Found response in cache:', response);

                    return response;
                }

                console.log('Fetching request from the network');

                return fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());

                    return networkResponse;
                });
            })
            .catch((error) => {
                // Handles exceptions that arise from match() or fetch().
                console.error('Error in fetch handler:', error);

                throw error;
            })),
        );
    });
};
