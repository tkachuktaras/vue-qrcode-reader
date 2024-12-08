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
    "revision": "419294367dd6477bbc4612328b76bcb5"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "45840d2e3338c0f6e445ebe5f54b88a9"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "a1c1df765c846f34caa6f8702dffde5a"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "64aa9c68d303e977998bf5d172fb464e"
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
    "url": "assets/app.tQm3BHOj.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.XY3Vkfj7.js",
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
    "url": "assets/chunks/theme.MVW-Xmku.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.wT1E2QiR.js",
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
    "url": "assets/demos_SwitchCamera.md.kp8-EnEi.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.kp8-EnEi.lean.js",
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
    "url": "assets/style.ehRLNwci.css",
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
    "revision": "644766c13718c729f96c8c7b29d97ba9"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "16757820babde3febad3d667ceaed8b6"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "74105f8ce10c88ac8ff87e8703df1af8"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "c68e99ecaa509cf39e81be2bf0b75ae3"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "408f8c87d73db2b5bc9ab32e97ed8eeb"
  }, {
    "url": "demos/Simple.html",
    "revision": "de6ffc2dda301078cb56d860d9cf7de3"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "dd95189b525157fb0cda331a2be4ce99"
  }, {
    "url": "demos/Torch.html",
    "revision": "4742eeac5dbc71664f20e54ab22bb92a"
  }, {
    "url": "demos/Upload.html",
    "revision": "ff9935abbfcc070b29d6f3256c6e0fef"
  }, {
    "url": "demos/Validate.html",
    "revision": "ff93bea9ebdb8905e54ab048e2e23a32"
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
    "revision": "8101e2f606b0b7d3f1d53cda7b6fe6a3"
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
