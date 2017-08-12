/**
 * Created by root on 2017/8/11.
 */
var fs = require('fs');
var module = require('module');
var arr=process.argv;
var name=arr[2];
var hou=arr[3];
console.log(arr[2]);
console.log(arr[3]);
module.exports = function (name,hou,callback){
    function bar(callback) {
        foo(function (err,data) {
            if (err)
                return callback(err);
            callback(null,data);
        });
    }
}

function callback(err,list) {
    for(var i=0;i<list.length;i++){
        if(path.extname(list[i])==('.'+arr[3])){
            console.log(list[i]);
        }
    }
}
