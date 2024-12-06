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
    "revision": "12e2ff193fd3fe432028bb125b151556"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "1e62529ec9fdb31a11b667b9ac56af52"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "b55833e6d3686ebe2a559ce2f1ac397f"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "7d01e3e5ff8b12a37154c15c14da671a"
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
    "url": "assets/app.1k-0yCrK.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot._LIA1C9b.js",
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
    "url": "assets/chunks/theme.lGc0LNcC.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.N85Bpxx4.js",
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
    "url": "assets/demos_SwitchCamera.md.h_jxPA_f.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.h_jxPA_f.lean.js",
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
    "url": "assets/style.zO48ZKu8.css",
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
    "revision": "7fde7ba814cbeb019b9dd929ddb04549"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "e4b8cf903da4d95fbd1c2ad5114f82ca"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "677ee2d9ca05c1f40995f23894602395"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "0f0b70e4c92f0893b16672897af4c0f0"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "7bb01fabd4e3af7fc5efcb4550405a62"
  }, {
    "url": "demos/Simple.html",
    "revision": "cb5dbbd18c6c957ebe3c1622c216f1e1"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "f2225625cdcb6da7555eb47515aa4ebe"
  }, {
    "url": "demos/Torch.html",
    "revision": "b5777b4d7569e4d0c1aa1ef643f4b8f7"
  }, {
    "url": "demos/Upload.html",
    "revision": "6130297461c2fabc412eb06a56ad95b5"
  }, {
    "url": "demos/Validate.html",
    "revision": "0ff20e04768ce2570c27f4d0ad56f13e"
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
    "revision": "ee16d95bcb9c2943a4bdfd32c1c3f81f"
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
