const CACHE_VERSION = "1.0.1";
console.log("self", self);
self.addEventListener("install", function (event) {
  console.log("installing...");
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      cache.addAll([
        "http://localhost:8085/static/header/index.json",
        "http://localhost:8085/static/header/svgs/header1.svg",
      ]);
    })
  );
});
self.addEventListener("fetch", function (event) {
  console.log("fetch", e.request.url);
  console.log(event.request);
  const request = event.request.clone();
  return fetch(request);
});
