// service-worker.js
const CACHE_NAME = 'my-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/static/js/bundle.js',
    '/static/css/main.css',
];

// Menangani event install
self.addEventListener( 'install', ( event ) =>
{
    console.log( 'Service Worker installing.' );
    event.waitUntil(
        caches.open( CACHE_NAME ).then( ( cache ) =>
        {
            console.log( 'Caching assets' );
            return cache.addAll( ASSETS_TO_CACHE );
        } )
    );
} );

// Menangani event activate
self.addEventListener( 'activate', ( event ) =>
{
    console.log( 'Service Worker activated.' );
    const cacheWhitelist = [ CACHE_NAME ];
    event.waitUntil(
        caches.keys().then( ( cacheNames ) =>
        {
            return Promise.all(
                cacheNames.map( ( cacheName ) =>
                {
                    if ( !cacheWhitelist.includes( cacheName ) )
                    {
                        console.log( 'Deleting old cache:', cacheName );
                        return caches.delete( cacheName );
                    }
                } )
            );
        } )
    );
} );

// Menangani event fetch
self.addEventListener( 'fetch', ( event ) =>
{
    console.log( 'Fetching:', event.request.url );
    event.respondWith(
        caches.match( event.request ).then( ( cachedResponse ) =>
        {
            if ( cachedResponse )
            {
                return cachedResponse;
            }
            return fetch( event.request );
        } )
    );
} );
