'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "800245f965a510eebb43fe60669e54ad",
"assets/AssetManifest.json": "69aa2ea02406b4ca225f7e5987407bda",
"assets/assets/images/main/%25D8%25A7%25D8%25AA%25D8%25B5%25D9%2584_%25D8%25A8%25D9%2586%25D8%25A7.jpg": "1c940b70bbf957dc056e51211717dc38",
"assets/assets/images/main/%25D8%25AA%25D8%25B4%25D8%25A7%25D8%25B1%25D9%2583.png": "d5d82aede5cef2e5fb7e264e9f8f224a",
"assets/assets/images/main/%25D8%25AA%25D8%25B4%25D8%25A7%25D8%25B1%25D9%25832.png": "9ec55f8283fce931edf061173c824b96",
"assets/assets/images/main/%25D8%25AE%25D8%25B1%25D9%258A%25D8%25B7%25D8%25A9.png": "b0bf05677c899a421a2918225c10f829",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-03.jpg": "686b734130f6d252adce276675ca01fe",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-04.jpg": "449a036b1eba26701fda02688dad61f3",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-05.jpg": "f01dad1f12b45c5f81ede7110b7d938f",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-06.jpg": "23f3f9f83b9604d74c36ca70278f6f66",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-07.jpg": "46e1b77217bf9021c9eabd9856a43e1e",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-08.jpg": "bc0f9a0800da3b7c32ce669a49d37edb",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-09.jpg": "8e74f72711354f01982972c9345b982a",
"assets/assets/images/main/%25D8%25AF%25D9%2584%25D9%258A%25D9%2584%2520%25D9%2584%25D8%25A7%25D9%258A%25D9%2585%25D9%2584%25D8%25A7%25D8%25AA-10.jpg": "00ab0b78c4d10fe86061acbd9b268cab",
"assets/assets/images/main/%25D8%25B1%25D9%2581%25D9%258A%25D9%2581.jpg": "45f89e9b251cc37b7095e100211c350e",
"assets/assets/images/main/%25D8%25B2%25D8%25B1_%25D8%25A5%25D8%25B1%25D8%25B3%25D8%25A7%25D9%2584.jpg": "e912e3fa74afdccd04eca5f1bd392bab",
"assets/assets/images/main/%25D8%25B4%25D8%25B1%25D8%25AD_%25D9%2585%25D9%2586_%25D9%2586%25D8%25AD%25D9%2586.jpg": "802df0d5606df422cd2f37f02646028d",
"assets/assets/images/main/%25D9%2583%25D9%2586%2520%25D9%2588%25D9%2583%25D9%258A%25D9%2584%25D8%25A7%2520%25D9%2584%25D9%2586%25D8%25A7.png": "f094aff1c4b720b130349f80f5680e13",
"assets/assets/images/main/%25D9%2583%25D9%2586_%25D9%2588%25D9%2583%25D9%258A%25D9%2584%25D8%25A7_%25D9%2584%25D9%2586%25D8%25A7%25D8%25A7.jpg": "1bfd658846080fd81c2a1af199b4c069",
"assets/assets/images/main/%25D9%2583%25D9%2588%25D8%25A8%25D8%25B1%25D8%25A7.jpg": "1beb98dcdaacf239b341943dedf73332",
"assets/assets/images/main/%25D9%2583%25D9%2588%25D8%25A8%25D8%25B1%25D8%25A7_%25D8%25A3%25D8%25A8%25D9%258A%25D8%25B6.jpg": "db4876826317bed1447f74a78a36d1ea",
"assets/assets/images/main/%25D9%2585%25D8%25B9_%25D9%2584%25D9%2585%25D9%258A%25D8%25B3.jpg": "245b9b4968b146a0d050bdd7d2de89ae",
"assets/assets/images/main/%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25A7%25D8%25AA_%25D8%25B1%25D9%2581%25D9%258A%25D9%2581.jpg": "5fb3fdfab0adbf6d50b4267f7d023876",
"assets/assets/images/main/%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25A7%25D8%25AA_%25D9%2583%25D9%2588%25D8%25A8%25D8%25B1%25D8%25A7.jpg": "55b6d9c4aaa9d10df4f8e5930c4699ea",
"assets/assets/images/main/%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25A7%25D8%25AA_%25D9%2583%25D9%2588%25D8%25A8%25D8%25B1%25D8%25A7_%25D8%25A3%25D8%25A8%25D9%258A%25D8%25B6.jpg": "50c847a6b5e22b32d0dbaca247f480ff",
"assets/assets/images/main/%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25A7%25D8%25AA_%25D9%2587%25D8%25A7%25D9%258A_%25D9%2584%25D9%2583%25D8%25B3.jpg": "b39b570024b4e617d3c8fbef3b590c4a",
"assets/assets/images/main/%25D9%2585%25D9%2586_%25D9%2586%25D8%25AD%25D9%2586.jpg": "ba31f00839cdf88d214f2a067e3e7ae4",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-02.png": "b4015de7eb77541b092309c38e72c35c",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-03.png": "20f8acbaeef387db0a73363b04e00481",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-04.png": "e2fd3485ab374b105c82b0b23d03ae8c",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-05.png": "19751b7f0e93db240bbc50bb2a511f8d",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-06.png": "10650d8c7ff5bd66a83a8803ee74b1e0",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-07.png": "af8c512e05287e81dcca8cd945924fe3",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-08.png": "7c404626a09d1ea7f876e88822e7ef99",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-09.png": "216510165d735d70c193f19c894cf25b",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-10.png": "678080ff1ac4630c948268fb2e85e969",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D8%25A7%25D8%25B1%25D8%25AF%2520%25D8%25A7%25D8%25B5%25D8%25BA%25D8%25B1%2520%25D9%2584%25D9%2585%25D9%258A%25D8%25B3%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2587%25D8%25A9%2520&-11.png": "42526bf447b7964d0c6dbf7de617c868",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-02.png": "5e1c8172bb7f37775ef2f9f6f7fd1b8b",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-03.png": "20f8acbaeef387db0a73363b04e00481",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-05.png": "be4668415ea178dec11835fb783eba52",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-06.png": "f9f8daa8ae6422839f239554cd9eecd0",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-07.png": "65736785fd9072acf8ec8944ee846142",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-08.png": "884e13e456f643882b8e5a1569186399",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-09.png": "3b8579c9838b8697c4abb67dc1da0e83",
"assets/assets/images/main/%25D9%2585%25D9%2588%25D9%2582%25D8%25B9%2520%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8-10.png": "03c94265b2715a447e79393475d66d7e",
"assets/assets/images/main/%25D9%2587%25D8%25A7%25D9%258A_%25D9%2584%25D9%2583%25D8%25B3.jpg": "f1d588f6e72c348cbe8b67b6e7813ff7",
"assets/assets/images/main/3-02.png": "572f5b73190750a6d4d44a3410987ad4",
"assets/assets/images/main/4-02.png": "2773088f3af8065fa590e7a8bb61d4f6",
"assets/assets/images/main/call.png": "5ed3efbad83b26e7e10e7d5848ffe5bb",
"assets/assets/images/main/design_disk.jpg": "fc3c5ae6cfae1c3b9addf26ea31fcea7",
"assets/assets/images/main/down_%25D9%2583%25D9%2586_%25D9%2588%25D9%2583%25D9%258A%25D9%2584%25D8%25A7.jpg": "2031b58056a7574d7c4d27f3b6c7d52f",
"assets/assets/images/main/Down_said_menu.png": "69c530c48659c528c8e97f6006c4754c",
"assets/assets/images/main/dr.png": "b797d53e8858a07454758cd5491c6c2f",
"assets/assets/images/main/face.png": "82fe6d1ae8f3a21a04e8b84a955ac67c",
"assets/assets/images/main/header.jpg": "c7cee0fb587c57fb90edda28f36252c0",
"assets/assets/images/main/home.png": "64959427d0785af3b25147578d9de65e",
"assets/assets/images/main/image_tv/p_vid.jpg": "af8da4782f3fb5085fc6e2c2bbc2f4d4",
"assets/assets/images/main/image_tv/p_vid4.jpg": "d8e64d5be542c7317e934fece05abfbc",
"assets/assets/images/main/image_tv/p_vid5.jpg": "8d05a29b2617fb04ee3f1415167cf061",
"assets/assets/images/main/image_tv/p_vid6.jpg": "d49b4ca43afc25683331f66b14574c53",
"assets/assets/images/main/insta.png": "cd1bd93511b04d687921286f430f02a1",
"assets/assets/images/main/ko.png": "ee770754e7476b64f18cf3eb5148c99b",
"assets/assets/images/main/photo_1_2023-10-10_14-36-03.jpg": "3066e0f7a0b148d4f30e76ccecd1dd06",
"assets/assets/images/main/photo_2_2023-10-10_14-36-03.jpg": "fb35d284ffa29ab7e3f6ccca0c383ef0",
"assets/assets/images/main/photo_3_2023-10-10_14-36-03.jpg": "378bf373befb076eee1b7e00582a695d",
"assets/assets/images/main/photo_4_2023-10-10_14-36-03.jpg": "1b897e3f1186dbed32388a02b86d2367",
"assets/assets/images/main/photo_5_2023-10-10_14-36-03.jpg": "046fcc6d5223dc978563544f27d92a3b",
"assets/assets/images/main/photo_6_2023-10-10_14-36-03.jpg": "39ec3f182546df328e6ee2b99311be0f",
"assets/assets/images/main/photo_7_2023-10-10_14-36-03.jpg": "61c430abbd9a931ca9cad709bfbab988",
"assets/assets/images/main/pps.jpg": "08fe5e56a1f537675c28131f13e4c75b",
"assets/assets/images/main/tv/vid.mp4": "ebd716235c8593d2eee27725b4823143",
"assets/assets/images/main/tv/vid4.mp4": "9eee4475dc4fd4917d15accf86e1f0be",
"assets/assets/images/main/tv/vid5.mp4": "648177f188a2fd9904a7e610faf10185",
"assets/assets/images/main/tv/vid6.mp4": "82698e9f5f1bbcd22445eddab18c886b",
"assets/assets/images/main/whats.png": "e9ff64236584556a99639e5b50b0fd88",
"assets/assets/images/main/youtoub.png": "7a357f99785edc1bb22c30ab4f3c8eac",
"assets/FontManifest.json": "3470b6362ff6ccfcadc98de518ac21ea",
"assets/fonts/DGA/DGAgnadeen-Bold.ttf": "0de19f038c4a0308aa1212c681119892",
"assets/fonts/MaterialIcons-Regular.otf": "2330913751023dfd326b776cde6b8995",
"assets/fonts/Reem_Kufi/ReemKufi-Regular.ttf": "9e5bdb5203f955a84e337f6a2fdfd133",
"assets/fonts/Tegoal/%25D8%25AA%25D8%25AC%25D9%2588%25D8%25A7%25D9%2584%2520%25D9%2588%25D8%25B3%25D8%25B7.ttf": "1472d65abf09fa765956fd3d32dadf48",
"assets/NOTICES": "ff03465bfde2a4fef9b0e6e5c42a7dc7",
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
"index.html": "beba9ce569d70b6d1b23e20c4e0cf431",
"/": "beba9ce569d70b6d1b23e20c4e0cf431",
"main.dart.js": "b5bfef2183cfe5c5db934cd012678d62",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
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
