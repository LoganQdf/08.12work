/**
 * Created by root on 2017/8/12.
 */
var http = require('http');
var URI = process.argv[2];
var article=[];
http.get(URI,function (res) {
    res.setEncoding('utf8');
    res.on('data',function (data) {
        article[0] +=data;
        console.log(article[0]);
    });

});
http.get(URI,function (res) {
    res.setEncoding('utf8');
    res.on('data',function (data) {
        article[1] +=data;
        console.log(article[0]+article[1]);
    });
});
http.get(URI,function (res) {
    res.setEncoding('utf8');
    res.on('data',function (data) {
        article[2] +=data;
        console.log(article[0]+article[1]+article[2]);
    });
});
