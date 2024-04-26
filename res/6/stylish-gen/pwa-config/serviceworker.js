CACHE_NAME="cache-versão1";
urlsToCache=[
	"iconesclaros/0.svg","iconesclaros/1.svg","iconesclaros/10.svg","iconesclaros/11.svg","iconesclaros/12.svg","iconesclaros/13.svg","iconesclaros/14.svg","iconesclaros/15.svg","iconesclaros/16.svg","iconesclaros/17.svg","iconesclaros/18.svg","iconesclaros/19.svg","iconesclaros/2.svg","iconesclaros/20.svg","iconesclaros/21.svg","iconesclaros/22.svg","iconesclaros/23.svg","iconesclaros/24.svg","iconesclaros/25.svg","iconesclaros/26.svg","iconesclaros/27.svg","iconesclaros/28.svg","iconesclaros/29.svg","iconesclaros/3.svg","iconesclaros/30.svg","iconesclaros/31.svg","iconesclaros/32.svg","iconesclaros/33.svg","iconesclaros/34.svg","iconesclaros/35.svg","iconesclaros/36.svg","iconesclaros/37.svg","iconesclaros/4.svg","iconesclaros/5.svg","iconesclaros/6.svg","iconesclaros/7.svg","iconesclaros/8.svg","iconesclaros/9.svg",
	"iconesescuros/0.svg","iconesescuros/1.svg","iconesescuros/10.svg","iconesescuros/11.svg","iconesescuros/12.svg","iconesescuros/13.svg","iconesescuros/14.svg","iconesescuros/15.svg","iconesescuros/16.svg","iconesescuros/17.svg","iconesescuros/18.svg","iconesescuros/19.svg","iconesescuros/2.svg","iconesescuros/20.svg","iconesescuros/21.svg","iconesescuros/22.svg","iconesescuros/23.svg","iconesescuros/24.svg","iconesescuros/25.svg","iconesescuros/26.svg","iconesescuros/27.svg","iconesescuros/28.svg","iconesescuros/29.svg","iconesescuros/3.svg","iconesescuros/30.svg","iconesescuros/31.svg","iconesescuros/32.svg","iconesescuros/33.svg","iconesescuros/34.svg","iconesescuros/35.svg","iconesescuros/36.svg","iconesescuros/37.svg","iconesescuros/4.svg","iconesescuros/5.svg","iconesescuros/6.svg","iconesescuros/7.svg","iconesescuros/8.svg","iconesescuros/9.svg",
	"texturas/0.png","texturas/1.png","texturas/10.png","texturas/11.png","texturas/12.png","texturas/13.png","texturas/14.png","texturas/15.png","texturas/16.png","texturas/17.png","texturas/18.png","texturas/19.png","texturas/3.png","texturas/4.png","texturas/5.png","texturas/6.png","texturas/7.png","texturas/8.png","texturas/9.png",
	"fonts/architects.ttf","fonts/montserrat.ttf","fonts/poppins.ttf","fonts/roboto.ttf","fonts/rubik.ttf","fonts/secular.ttf"
]; //array of filenames: list of files to be cached

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
