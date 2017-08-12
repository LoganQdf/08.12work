/**
 * Created by root on 2017/8/12.
 */
var http = require('http');
var fs = require('fs');
var server=http.createServer(function (req,res) {
    var stream=fs.createReadStream(process.argv[3],{encoding:'utf8'});
    stream.pipe(res);
});
server.listen(process.argv[2]);
