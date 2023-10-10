'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c988e80044cc471e0567e0722e600904",
"assets/AssetManifest.json": "d8607563090d7b220d780b056d6f0f65",
"assets/assets/icons/german.png": "0003352237e762ae1b17668eb3ace5d9",
"assets/assets/icons/united-kingdom.png": "625e83cfa91bafc8ca4b5cdcf9a9ff10",
"assets/assets/images/bacteria.png": "ae3d91d3e5de0259f21520f8ce371fee",
"assets/assets/images/footer_waves.svg": "eb528568af1ae0599146083fc52a88aa",
"assets/assets/images/header_waves.svg": "f37ba0e21ce7cce421df0b31e3c08a6c",
"assets/assets/images/instagram-icon.png": "e453acdd93b350cadab1feb194f326c6",
"assets/assets/images/linkedin-icon.png": "f08c524d147f46398cb54013ee7013ee",
"assets/assets/images/logo-und-schriftzug.svg": "5ce8952c8872a62058ed40b6f032b2cc",
"assets/assets/images/twitter-icon.png": "7e5a47cfd0f086ef945a779e8e4f8215",
"assets/assets/svgs/Biofilmproduktion.svg": "cd859b298da9cd54553751a794d1f99e",
"assets/assets/svgs/Efflux_Pumpen.svg": "7ea164a61045a5339e128d42ca1da4ec",
"assets/assets/svgs/Enzymatische_Entgiftung.svg": "40fa4b2ed7c02bc438812af7efe083f3",
"assets/assets/svgs/Literraturrecherche.svg": "991826cea0f8b598bd32da60261d7913",
"assets/assets/svgs/Mismatch-Reparatur.svg": "f2cb4eb24819a8323d08cbe1a7e1e46a",
"assets/assets/svgs/Modifikation_von_Membranproteinen_Verkleiden.svg": "10a059fed15fbc21e4373dc9d37b47e9",
"assets/assets/svgs/Mutation_der_betroffenen_Enzyme.svg": "b4afe16864dc640a133cfc8d8cbe3d81",
"assets/assets/svgs/Plasmide.svg": "a69f5a4f2943888646d940da89877147",
"assets/assets/svgs/Spielkarten_Antikoerper.svg": "e2b3feaa300aeed4a33671a1c6abfd7b",
"assets/assets/svgs/Spielkarten_Antioxidatien.svg": "70b3c31950825c978c186b3b00112a8a",
"assets/assets/svgs/Spielkarten_Cis-Platin.svg": "ad0d239d2f454600a80efcf360fb885a",
"assets/assets/svgs/Spielkarten_Dispersin_B.svg": "26ceaf7aa4517ddb4230bacfb3d1032b",
"assets/assets/svgs/Spielkarten_Ferritin.svg": "0b53bb188e774b2c3df843e974be1788",
"assets/assets/svgs/Spielkarten_Immunsystem.svg": "4e62d57e000e57bc5b6023053b203ee5",
"assets/assets/svgs/Spielkarten_Penicilin.svg": "2471fcbb2e81063417a15bdecf675a16",
"assets/assets/svgs/Spielkarten_Polysaccharide.svg": "6bd1a09639078ee5f142cbeb770a5357",
"assets/assets/svgs/Spielkarten_Rifampicin.svg": "a1a63472a3bfb8df1dbdd3d82bdc9029",
"assets/assets/svgs/Spielkarten_Strahlung.svg": "7388e35759389a2fa34cc6bb1f9ba81a",
"assets/assets/svgs/Spielkarten_Tetracylin.svg": "52003f9263e89db44b640fceb053f093",
"assets/assets/svgs/Spielkarten_Trimethoprim.svg": "323e06a6bca0b20a6a4eb2569347eee0",
"assets/assets/svgs/Ueberleben_im_Makrophagen.svg": "54ad05cd5cc03c797b828bad32f11f02",
"assets/assets/translations/de.json": "adb7d00fc0bea2c8824cac9fbfc719d6",
"assets/assets/translations/en.json": "8caad77778fa15c1677b1d19d2eb2165",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bd65fe691f5f785c0e6a254b9ab86be4",
"assets/NOTICES": "a49b137049792eed5555ff182b9a5117",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6bf3bd6078a4f680481dfcb30bf545df",
"/": "6bf3bd6078a4f680481dfcb30bf545df",
"main.dart.js": "974bf016a72350450286822e16bb0364",
"manifest.json": "08c4653111071ef74dd30a39f3937106",
"version.json": "4a47b1fa9df36b7c3b831ed6d0ff36ab"};
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
