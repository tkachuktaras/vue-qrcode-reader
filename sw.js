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
    "revision": "69b960fbeb7fc5bd3fb59ad28d1ce5f4"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "8c9a684621b098bf9fa463585b272c4c"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "776b1f52841e7da5f2f57db3f96efaed"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "1ac001f0f51fd9520886e9fb8a0539c1"
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
    "url": "assets/demos_SwitchCamera.md.ZeQeQo-x.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.ZeQeQo-x.lean.js",
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
    "url": "assets/style.3aGICQdT.css",
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
    "revision": "a59a40dc62fdb1cff158e5a2636dae32"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "ab9b240a3143842c90fb70cef5fe2bc5"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "f45ed937e3efb30bb780712bb065f667"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "297a0aabf121a7c9a66cc7ae7a4496dc"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "fff04b8ef649b6f608dec70462e3d649"
  }, {
    "url": "demos/Simple.html",
    "revision": "95b955939a21d76aef98ce411151999e"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "e0ed918d18000473ba6b35381f89fec9"
  }, {
    "url": "demos/Torch.html",
    "revision": "ea28d9824be0bea74619a39fbb396eeb"
  }, {
    "url": "demos/Upload.html",
    "revision": "7d35b9c20c9e332fa74c317b46632eee"
  }, {
    "url": "demos/Validate.html",
    "revision": "231adcba3553b099005abfbf8dda7469"
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
    "revision": "dce7bc214cb8f5cd267c41d6c0605daf"
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
