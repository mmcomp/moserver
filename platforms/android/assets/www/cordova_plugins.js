cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.tlantic.plugins.socket/www/socket.js",
        "id": "com.tlantic.plugins.socket.Socket",
        "clobbers": [
            "window.tlantic.plugins.socket"
        ]
    },
    {
        "file": "plugins/org.systronik.tcpserver/www/tcpserver.js",
        "id": "org.systronik.tcpserver.TCPServer",
        "clobbers": [
            "window.tcpserver"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.tlantic.plugins.socket": "0.3.1",
    "org.systronik.tcpserver": "0.1.1",
    "com.rjfun.cordova.httpd": "0.9.0"
}
// BOTTOM OF METADATA
});