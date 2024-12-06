/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-ab7aa862'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "cb3a28afa7f882b1c2c91c328e21640b"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "16ebddced65ea158b6b13a3a7f2c2675"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "c3148437251c4812c00e0bf8e9e24e9d"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "9f678e00dfb970d2e4af0e81aa44879d"
  }, {
    "url": "assets/api_QrcodeCapture.md.D3YGeqLy.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.D3YGeqLy.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.JZly1J3p.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.JZly1J3p.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.pLvr-gIm.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.pLvr-gIm.lean.js",
    "revision": null
  }, {
    "url": "assets/app.hI6Luvk5.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.BVefHgn4.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.R9InlPKq.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.FZ7lyoUf.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.UwFZUroH.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.U54EkApU.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.0ge29sAo.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.QcZhCQko.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.QcZhCQko.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.1YLZ48UK.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.1YLZ48UK.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.LNoNjDn8.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.LNoNjDn8.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.uiwuQ4XZ.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.uiwuQ4XZ.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.8KuYzsX_.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.8KuYzsX_.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.34EbnLaF.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.34EbnLaF.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.xzkajl3U.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.xzkajl3U.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.DUhfd_PY.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.DUhfd_PY.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ttt1QdNr.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.ttt1QdNr.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.EuaJZTrP.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.EuaJZTrP.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md._f1cq6Bl.js",
    "revision": null
  }, {
    "url": "assets/index.md._f1cq6Bl.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.-nLMcIwj.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.hznxWNZO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.PSfer2Kc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.RnFly65-.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.27E69YJn.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.xzQHe1q1.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.jIZ9REo5.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.9JiNzaSO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.Cb5wWeGA.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.GZWE-KO4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.bvIUbFQP.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.paY3CzEB.woff2",
    "revision": null
  }, {
    "url": "assets/style.nAb4HGqv.css",
    "revision": null
  }, {
    "url": "camera-switch.svg",
    "revision": "c966900237eef848d4aeb18b0ad64371"
  }, {
    "url": "checkmark.svg",
    "revision": "2466ed96efd1b98dd0b4fef9a0895194"
  }, {
    "url": "debug-memory-leak.html",
    "revision": "41d3e7f3f5512f9d6bd4e71fe1879a56"
  }, {
    "url": "demos/DragDrop.html",
    "revision": "d9e7f92630a7dee774c6aee226e6b81d"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "4e051d55568cc437ccdd44088c5e8782"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "fc05374971ab33637903da9107774f3e"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "16514fdcb6297c3d76451421e22ee16e"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "ed2b5a565108ced04ed8d066680b4056"
  }, {
    "url": "demos/Simple.html",
    "revision": "d20ce8ceab96a0a2d6401182da2d204b"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "0c6e87df7c81f0b336a19101d00a9f70"
  }, {
    "url": "demos/Torch.html",
    "revision": "17f77c854d43168de97bf5dd7693c10c"
  }, {
    "url": "demos/Upload.html",
    "revision": "bee98a4a5c54fcc41c6618d19309cc01"
  }, {
    "url": "demos/Validate.html",
    "revision": "b38d1541a65f5bf366a88b26d42bd73c"
  }, {
    "url": "flash-off.svg",
    "revision": "8b05f5dcd6712992a544b34520ec7262"
  }, {
    "url": "flash-on.svg",
    "revision": "23580871877110ec5e7dcd41efdbd07b"
  }, {
    "url": "fullscreen-exit.svg",
    "revision": "77f8bddd41a7894d1a00324ed9dcb8f9"
  }, {
    "url": "fullscreen.svg",
    "revision": "432c44f09de0b4e0f9e236fad9b8c7f9"
  }, {
    "url": "index.html",
    "revision": "cf8b374c97607c0ead947ceb3a0dc9bd"
  }, {
    "url": "logo.png",
    "revision": "5f0c1d6358641bc48207acb9fa0b6182"
  }, {
    "url": "pwa-192x192.png",
    "revision": "05431c417219f6c247a23488366a2b41"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5e0a4893ebdd02af95cf73c7b7759ddd"
  }, {
    "url": "registerSW.js",
    "revision": "2acda7f8afc7fc2d992b71c201491acd"
  }, {
    "url": "select-camera-demo.html",
    "revision": "87059e1457f503ce13cd1b6cab3507e9"
  }, {
    "url": "simple-demo.html",
    "revision": "94818a49180c00dea2256d84e0654504"
  }, {
    "url": "pwa-192x192.png",
    "revision": "05431c417219f6c247a23488366a2b41"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5e0a4893ebdd02af95cf73c7b7759ddd"
  }, {
    "url": "manifest.webmanifest",
    "revision": "102717d43422a64c9903adda0fdce9f5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
