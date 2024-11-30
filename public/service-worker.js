/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'HMTI-OFFLINE';
const urlsToCache = [
    '/', '/index.html', '/static/js/main.js', '/favicon.ico', '/manifest.json', '/favicon-32x32.png',
];

self.addEventListener( 'install', ( event ) =>
{
    event.waitUntil(
        caches.open( CACHE_NAME ).then( ( cache ) => cache.addAll( urlsToCache ) )
    );
} );

self.addEventListener( 'activate', ( event ) =>
{
    const cacheWhitelist = [ CACHE_NAME ]; // Cache baru
    event.waitUntil(
        caches.keys().then( ( cacheNames ) =>
        {
            return Promise.all(
                cacheNames.map( ( cacheName ) =>
                {
                    if ( !cacheWhitelist.includes( cacheName ) )
                    {
                        return caches.delete( cacheName ); // Hapus cache lama
                    }
                } )
            );
        } )
    );
} );