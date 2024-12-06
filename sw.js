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
    "revision": "d821323c5fa3cdeeeecd3f6335555600"
  }, {
    "url": "api/QrcodeCapture.html",
    "revision": "50f18dc678fb613917f57525f41ea722"
  }, {
    "url": "api/QrcodeDropZone.html",
    "revision": "90988860144b587f57738853da568b24"
  }, {
    "url": "api/QrcodeStream.html",
    "revision": "36c4dbbe1bdfb3b804c82c2216684f69"
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
    "url": "assets/app.4WkRwM7i.js",
    "revision": null
  }, {
    "url": "assets/chunks/@localSearchIndexroot.4v0u29qI.js",
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
    "url": "assets/chunks/theme.L_uerqXu.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPLocalSearchBox.qDiNSyRH.js",
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
    "url": "assets/demos_SwitchCamera.md.ClsGGam3.js",
    "revision": null
  }, {
    "url": "assets/demos_SwitchCamera.md.ClsGGam3.lean.js",
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
    "url": "assets/style.03ESK1vb.css",
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
    "revision": "b6a22bcf340a56b3da9d23994ea82a8e"
  }, {
    "url": "demos/FullDemo.html",
    "revision": "521c31cbc7160e21f7e02ea088b55dc4"
  }, {
    "url": "demos/Fullscreen.html",
    "revision": "b4909399e2c8230e21218ce93b86b89e"
  }, {
    "url": "demos/LoadingIndicator.html",
    "revision": "e24eb367e04d6bdf322cee3f06d3df02"
  }, {
    "url": "demos/ScanSameQrcodeMoreThanOnce.html",
    "revision": "e900e21ae6f253cf17da3c484e062ec7"
  }, {
    "url": "demos/Simple.html",
    "revision": "92607dc35e3326c4d54ca67b79d9f534"
  }, {
    "url": "demos/SwitchCamera.html",
    "revision": "c98c85a905e9334c22882772823189a4"
  }, {
    "url": "demos/Torch.html",
    "revision": "58c6dfbee054f1cadd126b318e0ea56a"
  }, {
    "url": "demos/Upload.html",
    "revision": "5bf08976d3b0e9e0112786674f4b103e"
  }, {
    "url": "demos/Validate.html",
    "revision": "ab3ea61f2fc9285d83d35323040f16b5"
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
    "revision": "7923ea6893ff02a3d759b282c1754c21"
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
