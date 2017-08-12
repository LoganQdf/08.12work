/**
 * Created by root on 2017/8/11.
 */
var http = require('http');
var URI = process.argv[2];


http.get(URI,function(res) {
    res.setEncoding('utf8');
    res.headers['content-type'];
    res.on('data',function (data) {
		console.log(data);
    });
    
});
