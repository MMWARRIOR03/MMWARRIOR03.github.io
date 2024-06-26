'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "110bf7739f7057427d87b9b5df21267a",
"version.json": "637994fc4ffaa6c5d0d80e625f9dace4",
"index.html": "b15ce59d13684b4a2ab4b3316ef2cb5d",
"/": "b15ce59d13684b4a2ab4b3316ef2cb5d",
"main.dart.js": "157e402cdd017845d15115b45002361b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "364c259f60caf5ead2f86b8ba9ddae81",
"icons/Icon-192.png": "1b991fcc022b8cd5a13236ed4c6907ae",
"icons/Icon-maskable-192.png": "1b991fcc022b8cd5a13236ed4c6907ae",
"icons/Icon-maskable-512.png": "7a3b14ac43ab7647c56fe0d1bc677343",
"icons/Icon-512.png": "7a3b14ac43ab7647c56fe0d1bc677343",
"manifest.json": "cb2a30824fce1c551ae008d19aa61998",
".git/config": "65ab232e3316c3cfa96655f520968b37",
".git/objects/6f/ff734a2ee598926ad17951bf6c636219865438": "d30cd69d0859a85258bda2dc337c0290",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/eac0418c410b8e422bf38d520fe4a9db14afb2": "b624f0a06bfcee2b20c9717114c9ecb0",
".git/objects/9c/291f94184b1c8eae77bbcacc1548934ba31cf7": "dc6e372ee5f11813ef19fae1c5e7248c",
".git/objects/d9/c110fbabf853728b2a7b8ad1d823aa8a0ff102": "a0222fedc00be7c862e0f6f49f7a4db9",
".git/objects/d0/f397d8a84198dc00f327345660370dd3b790b6": "ed88267f6bc32137c717304bb222a48e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/bc/b2dacf8e87efff1bbe740de4e402b83f4b9ec0": "21679ce569f5ebbf427a373475441ded",
".git/objects/ae/e59a7d91efa79b21737bb5f45576eece703c2f": "077d0f87b0fdc6d858e10289d5f9350f",
".git/objects/ee/fab671025c4cbf50fae70e3edb8ff377e6ca66": "02b00e760918a62ec7374d03c0cf5b8f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/9e2b34ff149fed4f3437b419cb9987cf155f98": "8e5bad2e50902fca0f3126880d6d8ae5",
".git/objects/cf/10b628538d660f8b8bdca51c822dbac931b4f1": "846b546918d107057663b0fa6fccc4ec",
".git/objects/ca/982770d8cbeec638cf4deaafd759d7f2e74ffb": "614423ac9d736c958ec50305efbd02fd",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/9868d083c82f89e403dcd1d764d9969c4c99a3": "aebecf89153c5e422bb5df5ebb23d52c",
".git/objects/89/3915de38b59e8e1e19ca04df429027a6434e86": "f2a67f5aa0d68d7e2fe47d4665e36b59",
".git/objects/8f/105a50eb5344b2da2c14cea0e7e73fc4e58919": "81070b0b8caa98a213b2862dbe9210f2",
".git/objects/19/822e93760ff074482e6a4dba2a3dc9b1a64061": "18e4bf59f795a8b4c090f6dc8263a7fc",
".git/objects/26/397fcd998181f0b6a7dd85d895feb1f123fbb3": "8ba82279a9bebfc88503f5621327e28d",
".git/objects/88/f812eeb130a1f0a2fae41552db66631006fb29": "134d24a622f1600fc393f6835455a6f5",
".git/objects/88/b95e585fe17acf093b1e5f9da28d7a87bf9db3": "da07f3105f907bd67c7df156d765c4e1",
".git/objects/38/5fef0e5015cbe3eda21a518dc567b4da5e6557": "d17fbb93d7b5dc607a4e8ac2dd1a85fd",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/6eb321271797f56d59cdb2dd31061dab49223f": "cb6255df86f206a71a7b426e050ce7b1",
".git/objects/91/4ab67fdfcd92a17694995d072c202c5d2d5f7b": "028cca9c9e9501aace187c48c96509bf",
".git/objects/3a/91e7ba7cc49436658f5842a08986382dbecbfa": "e660af40b38bb87ffcdfa54a80536552",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/37/52f502be4efaae3f6d90daab6987f4c67f45c2": "c36f3ac4552d77cc3745fdf914bf22c8",
".git/objects/6d/606e02286b845564af80ce7e4fa63a0462ff4c": "f09b6aa9ce9b490a1dfccb0c47f3d275",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/4d527dcb4122024a83d9486450e6ac09ce3c4d": "446ef6cb6f2be92544982e7ff9101585",
".git/objects/db/05f95f80d19eecd71697513a9cf6fcc06e7860": "fb6548d40676f81ba4823e28dad1b570",
".git/objects/2c/43f104c52b369b814bf22966dd2febc5657183": "2279adca5e250300fd09525a89af0fa4",
".git/objects/23/8275dfcd4e102a7cd906cf9274063df4ab4f71": "c54665415bfe4d76a7e454b6f4e84ec6",
".git/objects/8d/0b23e0a8f9a379e38ecd1ba668e1066b882d83": "8711294c2272ed35b65cf71a1431f5de",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/ef5902b5f949b663d739890105869550df6137": "02cbd5efa64e4b3534b66ea903ac42bb",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8c557625490b1985b3e6f2aa2f47a19",
".git/logs/refs/heads/main": "859d181279ecf0d1ac6cd75cf63308fc",
".git/logs/refs/remotes/origin/HEAD": "49ad9a49f05628915007c4ebe1098857",
".git/logs/refs/remotes/origin/main": "00e890beb7e88f1f928b60c5f0826d2a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3db5fca515291fe3dab98988ae2d1c1a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3db5fca515291fe3dab98988ae2d1c1a",
".git/index": "0dbafdb816cd098b7a365dcce3b3d35c",
".git/COMMIT_EDITMSG": "daaa412e45c1e5fce48a177208400a7a",
".git/FETCH_HEAD": "d622aea8cf386362477a8a126206e3a8",
"assets/AssetManifest.json": "b65df48f9662c6df07c369729320693c",
"assets/NOTICES": "d01698ec567161d13b8191d90c272dc2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "dc0eae1be29f3dd20676c65ec3d5804d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc0d1a8b41d495c511982667d1bd7d51",
"assets/fonts/MaterialIcons-Regular.otf": "d0e36ca114838489397b9b9690aeb727",
"assets/assets/images/jointrip.jpeg": "3e42720fa283a1029203f7ad506dc5cb",
"assets/assets/images/newtrip.png": "f5ac395f44bf16f586cad7294beb3a56",
"assets/assets/images/instagram.png": "dbb75410211e7fe312e025c23843d114",
"assets/assets/images/github.png": "444d1be507dfae93d00cfca34cf9ced7",
"assets/assets/images/homescreen.jpeg": "173b395504d116728d056743e74a7806",
"assets/assets/images/linkedin.png": "9adb1ad6687e87c9a2b5a3f66ef605c6",
"assets/assets/images/profile.png": "2fe92a99aa9899e1c5d446837d193e6b",
"assets/assets/images/Firefly%2520-travit-%2520travel%2520app%2520logo%252087171.png": "16ba8f20fd001af1987db3c3c001ce94",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
