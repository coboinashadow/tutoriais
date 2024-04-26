CACHE_NAME="v2.0";
urlsToCache=["./index.html","./background.png"]; //array of filenames: list of files to be cached

self.addEventListener("install",(event)=>{
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache)=>{
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch",(event)=>{
	event.respondWith(
		caches.match(event.request).then((response)=>{
			if(response){
				console.log(`Service Worker usando recurso do cache: ${response.url}`);
				return response;
			}
			console.log("ServiceWorker: Carregando recurso do servidor: ",event.request.url);
			return fetch(event.request);
		})
	);
});
