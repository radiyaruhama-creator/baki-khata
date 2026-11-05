self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  var r=e.request;
  if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(function(res){
    var c=res.clone();caches.open("bk1").then(function(k){k.put(r,c)});return res;
  }).catch(function(){return caches.match(r)}));
});
