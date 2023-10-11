'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4a47b1fa9df36b7c3b831ed6d0ff36ab",
"index.html": "46632b44511487f185d0a71c4872b270",
"/": "46632b44511487f185d0a71c4872b270",
"main.dart.js": "4a3341c2a4617b39cc509a3ff81ce8ae",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "10ae6152af73cb25213b1fd003f390ed",
"assets/AssetManifest.json": "d8607563090d7b220d780b056d6f0f65",
"assets/NOTICES": "8e36e311a40a7496c5244ab27d131b2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c988e80044cc471e0567e0722e600904",
"assets/fonts/MaterialIcons-Regular.otf": "bd65fe691f5f785c0e6a254b9ab86be4",
"assets/assets/images/footer_waves.svg": "d709fe233c5053514ef8f8bce62392ff",
"assets/assets/images/logo-und-schriftzug.svg": "bf0a067d330d4059938ac834483b3204",
"assets/assets/images/twitter-icon.png": "7e5a47cfd0f086ef945a779e8e4f8215",
"assets/assets/images/header_waves.svg": "a30527b3789626954b12b274825f73e1",
"assets/assets/images/instagram-icon.png": "e453acdd93b350cadab1feb194f326c6",
"assets/assets/images/bacteria.png": "ae3d91d3e5de0259f21520f8ce371fee",
"assets/assets/images/linkedin-icon.png": "f08c524d147f46398cb54013ee7013ee",
"assets/assets/svgs/Spielkarten_Dispersin_B.svg": "ac69b3cd308aa87d2ca4e09ddc3bd5a5",
"assets/assets/svgs/Spielkarten_Trimethoprim.svg": "8b1666c758caf1424a920f3f75eb584f",
"assets/assets/svgs/Spielkarten_Rifampicin.svg": "a443523e89a08c9aa82f71aab3a1b980",
"assets/assets/svgs/Modifikation_von_Membranproteinen_Verkleiden.svg": "0f50a6aa0706510c1521b78964bf3def",
"assets/assets/svgs/Mismatch-Reparatur.svg": "7bd3ed0d2945e8c72d52c978519b40dd",
"assets/assets/svgs/Plasmide.svg": "347e5720e638e79d0edf84b1f1191990",
"assets/assets/svgs/Enzymatische_Entgiftung.svg": "91c00ef5df0e64a3564e347181cbddf1",
"assets/assets/svgs/Spielkarten_Tetracylin.svg": "4063dc5cc7e8670d2cfe8c00818b9f14",
"assets/assets/svgs/Efflux_Pumpen.svg": "01fa32a5b9f281d68e32dd9875b06a31",
"assets/assets/svgs/Spielkarten_Antikoerper.svg": "eabef60f7e6ea0f91203e8d26b5702a9",
"assets/assets/svgs/Spielkarten_Cis-Platin.svg": "b496f06f3b7f2d57ab229e6ee900a29a",
"assets/assets/svgs/Spielkarten_Antioxidatien.svg": "1996a5ea3b0d2aa52262ff8f725b250c",
"assets/assets/svgs/Ueberleben_im_Makrophagen.svg": "da37101de694abc8cff77622b92afb9d",
"assets/assets/svgs/Spielkarten_Ferritin.svg": "c7fdb9b91dcdc7ffb757a243387d5379",
"assets/assets/svgs/Spielkarten_Polysaccharide.svg": "00060a65fa8e6dc349d09e51b78d5955",
"assets/assets/svgs/Spielkarten_Penicilin.svg": "a9f5e0e7d3fedc76c2c20c7084a2fb85",
"assets/assets/svgs/Biofilmproduktion.svg": "e31cbe046896d09b33144b9fc1592fbe",
"assets/assets/svgs/Mutation_der_betroffenen_Enzyme.svg": "b26ff379167bfc6b562380422fb938cc",
"assets/assets/svgs/Spielkarten_Strahlung.svg": "c66d9c3162c57f60a43c76e23ef6fa72",
"assets/assets/svgs/Spielkarten_Immunsystem.svg": "228b06563423b0c76f80248202b54a17",
"assets/assets/svgs/Literraturrecherche.svg": "c718ef10174ff13712cfbc9499a443e9",
"assets/assets/icons/german.png": "0003352237e762ae1b17668eb3ace5d9",
"assets/assets/icons/united-kingdom.png": "625e83cfa91bafc8ca4b5cdcf9a9ff10",
"assets/assets/translations/de.json": "65de5f64c574168e1f08440f7356ce56",
"assets/assets/translations/en.json": "f33fc16e346ebf5ae68cc2057e2b0db8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
