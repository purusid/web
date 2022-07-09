var config = {};
var cache_name = 'purusidv1';
self.addEventListener('install', async (e) => {
    await fetch('/sw-conf.json').then((response) => {
        response.text().then(async (text) => {
            config = JSON.parse(text);
            var cache = await caches.open(config.cache_name);
            await cache.addAll(config.assets_cache);
        });
    });
});
self.addEventListener('fetch', async function (e) {
    var rfc = await caches.match(e.request);
    if (rfc) {
        console.log('serving cached request: ' + e.request.url);
        return rfc;
    }
    console.log('fetching from network: ' + e.request.url);
    return fetch(request);
});
