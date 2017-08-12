/**
 * Created by root on 2017/8/12.
 */
var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');
var server = net.createServer(function (socket) {
});
server.listen(port,function () {
    var date = new Date();
    var time=strftime('%Y.%m.%d %H:%M',date);
    console.log(time);
});


