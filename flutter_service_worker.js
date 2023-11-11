'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ad1c10e6fbdd9d193dfba11dc8bec65d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a51af9ec82132c79286389cf0409083",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14473ba8f8b0d0620e43ce9730832928",
".git/logs/refs/heads/main": "4d78606d0e2fa846de5d810cbb876676",
".git/objects/00/1fcb449a18345fcaf2aefa5ad188200ef14bd5": "3fabdbcd8544330663e6c40f9e206b31",
".git/objects/00/8eae6f3266bd5743e0f381a86b601311bee627": "77325874413409a975c4f5bf7a0f58ca",
".git/objects/01/e200a8f743a4c231aa58e06f0407797b46b81d": "72bf42b3f045cb40b62cda564d714f9a",
".git/objects/05/19901443f08d39bfcaf97c3aa4356492e0a34c": "21238e7f984ad6faf7afedf26c7719db",
".git/objects/0b/dc735887cadf3eb1d4e38da70f0c97442387a0": "bacf2b02265054b59f2b97db64bdaa49",
".git/objects/0d/4afc8d52c0a50c5acc6d0367ce57ead94aa12b": "bba0f613ece4d41d8943ef4c79c701bc",
".git/objects/10/e8aa2566124a3fb8b4ff38c2dc4c585b72c8ef": "d23981206440c749b7ff178ca0875ebe",
".git/objects/11/f370a0c3061bd204c7cb59103bad2c5b533025": "c35a38c8e4c56482bd7c03bc48869c9f",
".git/objects/13/2a9c72a5f7509e54bfc58a0459349876a2607d": "683099483027e4e58a4666892ccf8de5",
".git/objects/16/0eb69e5ab288d21c19274bedf5bfc57b9d9b98": "d73cda2f9c50a945f0873fdcb7a54d8f",
".git/objects/18/4ace6cb9f88012fb251c7fa8b43b4a50dca0db": "359ed4a07300b85ac9106c93a11a7a72",
".git/objects/19/54b494e024ab03e327d2463dd733a9d03744b3": "c4c98bc63e5d0a8b9d13bf237d279dee",
".git/objects/1b/d17b9cb377b49792c7c80ebb1ae6d1afb30cb8": "52803a38e06a88cf186a610e56ab75f4",
".git/objects/26/eaf14dda009b9ffe45e16b26025541cc0ad553": "51dce52b1607dddbf8cf575186ed78c8",
".git/objects/29/9ee58e8053e5376625fb56249281cc193080d5": "9a204d8c90e2efc3a8e9438e8b7f2aea",
".git/objects/2e/d027634841dcdd54ad026e5e1bf9c98c2c84eb": "bf06e0fe399246b59803b381d92a5d0c",
".git/objects/31/c79c2df7c506e3d6a25c9669816684a6a1441e": "00eca67dca8e1f774ac322f333e942d6",
".git/objects/32/b0b55fdc18fced1c526adc7cd5a74abc208e95": "dacb86884d2f0b6d1dd4c9807f39b8e7",
".git/objects/34/d04a2707b26f0bb10cf6e34c36d685b8beb3fa": "35a214d2c2e234be4d2cef31c8246d64",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/46f9824310eb9395b17e864b3657123e947151": "b826c55b6c3a8f8ad45f035bc36116cb",
".git/objects/3b/a7621af2f563f3f52871a1a02a2f0300ab66c4": "1192063537153e6fbaa8c182d5206d8c",
".git/objects/3f/41abe14729bdcd92eff8daed64573767d4bfd5": "63a38f8ceaebbf5cde8206f12830ad2c",
".git/objects/40/1254c110e92daf0382c3f5cceb298f2afd6db7": "0340d4abba76c37c55778c34fd204a99",
".git/objects/42/a239f635f276f564f2c70de874500ae4412dc0": "a034a6400f51bea949b7ade2ba26a03b",
".git/objects/45/8da3a1f6c73c8aab7cc9c9ae1ee516996197e1": "15b229b74569fca8ea1a7f3cca2e0785",
".git/objects/46/85fc8c8577543c5658d872a380ee13588346ec": "d04f50dd941c47c976b206c2b60c3c21",
".git/objects/46/94835f60d0ef655ec497b69233c895bc50215c": "7f7da2e56fbf3320e3d16ad68b266db7",
".git/objects/47/3d054a69b4750f3662594c42b0df6784b57e1d": "0b22d12c8bbb6c054256c95a71dd3fea",
".git/objects/4f/94e4b512314e292a3b4e3643062c485219c5e1": "2f770e220e732a1f3d0f14439a3c6d2f",
".git/objects/50/843e1f01412260fb607b0a735d258181e6f078": "c01f3f625e6a96354ae7ff9d1afd01a2",
".git/objects/50/a31663c7c101a7fc51646b4fd81496549f97e0": "7574a209768ded0c58d77d5813f5834f",
".git/objects/52/96ad8d4953de79669adf3fb22833e50e54a514": "850c5f90eeaf3134265d6815d0d7bc39",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/7182a34e0f351e0453779d2e07b1f28057cd0f": "fd0bb38cf3b38b122d3153625b4ef28c",
".git/objects/57/766e3c3ec7fca0b70eaa625f10e6b798192bf3": "1102dda4d90313c729046ee752ca549e",
".git/objects/5f/3b78022239b74cb520d581e28528b564de74e8": "b666b44e0cabf4b4da0713b4092cebe2",
".git/objects/60/37c042501514428853748120483160ace9570d": "9eaca246b2688de8a710c890e00b59bf",
".git/objects/62/f32d3c26134ac93134aeb5922db8be56a0f84d": "00418c1b83356c6232cb544634177bed",
".git/objects/64/8484d825bdc9bf3909cf372b99de7a74afe4e6": "ce484ff6230fe5cf0b0ec5b66881d799",
".git/objects/65/8bfcf701c12eac39f7f0f8ac2912e94520d5ae": "61a34e1e9518e7dd749adc4f5e2ec7a5",
".git/objects/68/c6e77065fff2a5eb0c93a3c3de5aa3a6960335": "7ae81a29def5d4ed2859b734e17bc90e",
".git/objects/69/f06c1615e197ce7b1ce1c3301b37dc10c209fc": "f79840f5df49b06a77ac2cc1468f9acb",
".git/objects/6d/095e9865eb8ffcd7789bc5c9b4525b822e2f09": "9bd9a2f4c4600fffd5ddff5aa491af02",
".git/objects/6d/f6243fa888dfe14331b2ba40452b1e7996470e": "eefd93ee2be11ceacf052f18bb505955",
".git/objects/6e/dc6866e24714c963d3f976d09ccc2d3b6f8af8": "8a83aedfb64133ecada6547e50c94af9",
".git/objects/6f/33b08c6278cd9e82e75805764a80c27bd40e3a": "3dc53066ecf19aead29c31bc1282da65",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/71/254d54f7a225857bf21bdb7208b33d30a5d5ca": "d05fb0f3408d5819fd7c017626ae0042",
".git/objects/74/61bdeb812786a311692f104a93c20b255fa5cc": "feb854ed5c71e4f733aa3c2617aeeb76",
".git/objects/78/436d584c7c6f257852a4e92c1ca60663decf6e": "fc0f2aedeb97faa6227a37c473c57b8c",
".git/objects/78/e38d3c42b9e28d97fdbf0316e54fa1ec62d99a": "f1449302458e920f759affa8d86faf38",
".git/objects/7d/019ec4289b34f48dac3830cdc4b1c72884be12": "1a82c60c1721e69534e7b4ca72475ac3",
".git/objects/7d/75b2b935727c837f520bf5fea4232fd9e07a10": "b77c978e688c25785af2ba5ba08986c5",
".git/objects/81/abe4fca9c56f2cf5a57963c6b483c4c8e4fd83": "a84477c63232d829cb2e692957f782c3",
".git/objects/82/b1ae499e92b9b5bb1e5cf8495f7c5efd90f436": "edbb92da0957fc0ec5354723e1f68aca",
".git/objects/85/0da9b144c3e8e5f4613f98836b3ca846d9e2aa": "98b73c92b23fb36705018d92c87e0e49",
".git/objects/87/1e569b68d2ca996f1d1b0b98b044f73f8db3da": "3187574512f237cfe56f9f8adb58c8c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/89/ebe6e789429fd67284115631993e6dc79cec2d": "cff997cd6620dd2dd3f5315369369a39",
".git/objects/89/ec81638e1b388dc380dccb2b4eb5e5bfeea3c9": "05bbba3358e3554375b3dcec00d4730a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f2b7674f7783d964a363e6b9e0218af55b2ee7": "6ec6c9183cca6b60798fc527b085f581",
".git/objects/8e/2a51fae029bd0776b54b18cdab1a84b0dc3f5b": "947755106fe7dee77516f49ca99e811e",
".git/objects/90/3e48467a38c20156fb19ef3bca3e3196cc2f9c": "39a57c30d9b0622ed7802ea73ac0c210",
".git/objects/94/9ccb22f17a038dba4fa932aebb7b43e3eff153": "ad82187f1806315d62701f842f4a8fe5",
".git/objects/99/cef5a85754e80f97eb18d2b8d42460861a6afc": "b52c22daa0d22d9a5ad349b41c70c937",
".git/objects/9b/ab78d8dc6b4f4b63b7b69d1e2662cf794b1463": "5d37f168db3044dcc22380f7d3e8d050",
".git/objects/9c/c794f04dd9f7908a0b651102c585850a367407": "a7a554ae621cc2587cea5d1496d01f4e",
".git/objects/9c/d02e943914edd271c684be73b2db7fe6c2205a": "6e45629b47b7775a13cb309376efeea0",
".git/objects/9d/402d022cafd78c3975ff2e98bd7086ce95fbe1": "9dcfe5e47f2e3cf06c66c849a797b6ca",
".git/objects/9d/4be800c3c203e07ae67dff79278b8735db1df2": "f9c7a51844098de50da1d9cd0279788a",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a0/ac4cac6dc81f01ba981b74bd9b685635c62b87": "2e67b8d03258ffe0b687c7c5af762f77",
".git/objects/a1/2143d0d9d652ca66e8209ad60e62b4eecfcc24": "9ed8cbec7a1b87c06fcf3d6db1c90527",
".git/objects/a4/e4f54b48d184a15be5f84bcd9572dd96206546": "d83957d40594337176bd0849c0350ca5",
".git/objects/aa/118c2dec19b2510fb5268571bbeb7e87bb6d32": "fc1c27c87220d5f68394f5d072274bed",
".git/objects/b5/83c135e667de480464c56763bf260fbbb12cf8": "728beefb01cecbd77f39bd24e122bb15",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/15cedf870b36f941856f18bc61023e2c2c1176": "4a4bc028765d770f67a07d96aeb482d4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/94f9aa54a907991cbea1412826051297a35270": "f763d71d127421a3d0c7515492f53973",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/2519f9d562d01d4657e7a13d2872404708db51": "737b6b87df2223560f14fe6b58b84172",
".git/objects/c8/25365759c5738deec2c7525c39ec4cb86264df": "b1f343063f34060646addc72c52d1ccc",
".git/objects/cb/f28ded60e7104da94b4c1cba2d394afb71dd34": "bb3288ec24af29e1474109f0be158f3e",
".git/objects/cc/9e84d37bf47a9e50962dca34541df0e776d5ce": "1d9d8c4c213a689b28e82321b8ea8176",
".git/objects/cd/91f778408662956adc16440c1ae41dbcf46b8b": "e9857b4cd152d5577625c638eb75ad37",
".git/objects/ce/7f0db75729c67d9b8e101cb101d54cf001464a": "89be3c593db9ff9f3d5910f9393a0978",
".git/objects/d1/063bc6d988f759f5f4be419659326572e93efe": "14d409d1197b10611224fb9066b71d2c",
".git/objects/d1/8bbe635f4b94a9fb3ac6c8f6a0108d121640e9": "d6d3a107f20b0bd86c1e7fac162e04bc",
".git/objects/d1/e7fc860b60fac6e27a35d811b6c8e362514ef9": "91494f08a1d44637ef85e63cc8d77597",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/0be8c13a0067ec6d9a08acb974dbd55a203144": "3cc60e1d52e1ac66584f4a58e7653444",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/753c0edabc7a2d92a88f7d59ad4ba38c322921": "091ad7ea23e78caa67af10d7f1b8b119",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/a194ee70d0c7963cfce4e0c1b73eacc10e14fb": "d74d68c568e1466a3a2a27f697034265",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5f6b9bc1d701b1da1159fd0f1ed4e4b10b485c": "00efdb50dab97c8fa697ac69164a6f98",
".git/objects/ec/8a896319c3e7223c038d9c70c20ea34cc661cb": "ddddd3fd3493daff697f12df247725af",
".git/objects/ed/c425e5f99fd45c32e3aedf3fe75c23f1222633": "6fb4586a55271b312a3047c41bd9f1d3",
".git/objects/f0/62199816b028bcdd7b98be3b62607b4d655357": "45d2e484428ab26ed9fb59d13f79ab52",
".git/objects/f1/302ec94275d71943ca9b0558895c937eb25830": "8958f1fa0dee0382e815abe0ce516ec1",
".git/objects/f3/3790c97adddbb98cc1508b56742114bb27ffcc": "010850696efcfb1a5eaab0a1a557efac",
".git/objects/f3/a2e81297faf30e60bf694e931762a3fec6b128": "c797155e4d5c56022c1fc84578315594",
".git/objects/f6/6893a0ee18fc13e57681e427d45964873a742b": "15cd2ffaec8161e86ea22794838bfb23",
".git/objects/fc/1951ec48c4f7f126857a04ed0ba7184a02dae7": "dc9eadccd96763d2dbdf5da4a302b901",
".git/objects/fc/8878f1c7768667213761fb71814f38809608b3": "93a41282a96793a95cd6d698190fb96e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "2b6353234589febf21254fabb5080761",
"assets/AssetManifest.bin": "800245f965a510eebb43fe60669e54ad",
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
"index.html": "eb85ef1503a132fc52e48c54b97888b9",
"/": "eb85ef1503a132fc52e48c54b97888b9",
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
