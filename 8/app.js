/**
 * Created by root on 2017/8/11.
 */
var http = require('http');
var bl = require('bl');
var URI = process.argv[2];


http.get(URI,function(res) {
    res.setEncoding('utf8');
    res.headers['content-type'];
	
    res.pipe(bl(function (err,data) {
        console.log('长度'+data.toString().length);
        console.log(data.toString());
    }));
});
