cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "phonegap-plugin-push": "1.6.0"
};
// BOTTOM OF METADATA
});