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
    "revision": "0fe903a026c11592da54ec3ca2785f0f"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "8c262dae9030f65aa39313bfecff0139"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "7afd3faee9c06abfd674b78e9da69cec"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "ed23b7d6acd1f2fa4aac111cda10c95b"
  }, {
    "url": "assets/api_QrcodeCapture.md.PsTfZWQV.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeCapture.md.PsTfZWQV.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.dyQ8viWZ.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeDropZone.md.dyQ8viWZ.lean.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.e6YkpBu9.js",
    "revision": null
  }, {
    "url": "assets/api_QrcodeStream.md.e6YkpBu9.lean.js",
    "revision": null
  }, {
    "url": "assets/app.TixO0wQU.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.sQLPRqzO.js",
    "revision": null
  }, {
    "url": "assets/chunks/camera.Bn9F7jfT.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.mHXEP_CY.js",
    "revision": null
  }, {
    "url": "assets/chunks/QrcodeStream.vue_vue_type_script_setup_true_lang.N8RaWypI.js",
    "revision": null
  }, {
    "url": "assets/chunks/safari_32x32.yJUh4Fxj.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.ULK2R3Xx.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.GiGAx0UF.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.Zpp84C0s.js",
    "revision": null
  }, {
    "url": "assets/demos_DragDrop.md.Zpp84C0s.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.gA9eRIhB.js",
    "revision": null
  }, {
    "url": "assets/demos_FullDemo.md.gA9eRIhB.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.55gwXbcs.js",
    "revision": null
  }, {
    "url": "assets/demos_Fullscreen.md.55gwXbcs.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.bmvXoJPM.js",
    "revision": null
  }, {
    "url": "assets/demos_LoadingIndicator.md.bmvXoJPM.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.eZx2-5rn.js",
    "revision": null
  }, {
    "url": "assets/demos_ScanSameQrcodeMoreThanOnce.md.eZx2-5rn.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.js",
    "revision": null
  }, {
    "url": "assets/demos_Simple.md.th0oC-oC.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.TfGaVpgu.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.TfGaVpgu.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.7d2Jqvea.js",
    "revision": null
  }, {
    "url": "assets/demos_Torch.md.7d2Jqvea.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.BFZcodYm.js",
    "revision": null
  }, {
    "url": "assets/demos_Upload.md.BFZcodYm.lean.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.RGAAbt3u.js",
    "revision": null
  }, {
    "url": "assets/demos_Validate.md.RGAAbt3u.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.IyM1TcnC.js",
    "revision": null
  }, {
    "url": "assets/index.md.IyM1TcnC.lean.js",
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
    "url": "assets/style.JiDLQkQv.css",
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
    "revision": "5e0f3defc32ed2fd1fffacc7f310fa9f"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "c14cf35979b32a630ed8564e77a4ec4e"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "abe5bb4fed91a125c7d0ef029fc4888b"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "bb98506b70833c6e69c6a4a2df66856d"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "605b4368873567624f1c50432d07e3db"
  }, {
    "url": "demos/Simple.html",
    "revision": "2e722b2869da9424beaedf182d79a143"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "a59d744fe6a02cc572ddef105253cdc2"
  }, {
    "url": "demos/Torch.html",
    "revision": "c2b97d316692716e97d4015c82dba7ea"
  }, {
    "url": "demos/Upload.html",
    "revision": "e10f0eaf6b39d0bda0de08f2a5bc20d9"
  }, {
    "url": "demos/Validate.html",
    "revision": "ccbdb3814831c887b2c6e5b259b6e186"
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
    "revision": "bf04d45e0cdca2278cd55ab55d7ae893"
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
