cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-buildinfo.BuildInfo",
      "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
      "pluginId": "cordova-plugin-buildinfo",
      "clobbers": [
        "BuildInfo"
      ]
    },
    {
      "id": "cordova-universal-links-plugin.universalLinks",
      "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
      "pluginId": "cordova-universal-links-plugin",
      "clobbers": [
        "universalLinks"
      ]
    },
    {
      "id": "cordova-plugin-browsertab.BrowserTab",
      "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
      "pluginId": "cordova-plugin-browsertab",
      "clobbers": [
        "cordova.plugins.browsertab"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-buildinfo": "2.0.2",
    "cordova-universal-links-plugin": "1.2.1",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-inappbrowser": "3.0.0"
  };
});