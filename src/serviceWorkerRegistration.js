const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
        /^127(\.[0-9]{1,3}){3}$/
    )
);

export function register ()
{
    if ( process.env.NODE_ENV === "production" && "serviceWorker" in navigator )
    {
        const publicUrl = new URL(
            process.env.PUBLIC_URL,
            window.location.href
        );
        if ( publicUrl.origin !== window.location.origin )
        {
            return;
        }

        window.addEventListener( "load", () =>
        {
            const swUrl = `${ process.env.PUBLIC_URL }/service-worker.js`;

            if ( isLocalhost )
            {
                checkValidServiceWorker( swUrl );
            } else
            {
                registerValidSW( swUrl );
            }
        } );
    }
}

function registerValidSW ( swUrl )
{
    navigator.serviceWorker
        .register( swUrl )
        .then( ( registration ) =>
        {
            console.log( "Service Worker terdaftar dengan scope:", registration.scope );
        } )
        .catch( ( error ) =>
        {
            console.error( "Service Worker tidak dapat didaftarkan:", error );
        } );
}

function checkValidServiceWorker ( swUrl )
{
    fetch( swUrl )
        .then( ( response ) =>
        {
            if ( response.status === 404 || response.type === "no-store" )
            {
                navigator.serviceWorker.ready.then( ( registration ) =>
                {
                    registration.unregister();
                } );
            } else
            {
                registerValidSW( swUrl );
            }
        } )
        .catch( () =>
        {
            console.log(
                "Tidak dapat menghubungi server untuk memeriksa service worker"
            );
        } );
}
