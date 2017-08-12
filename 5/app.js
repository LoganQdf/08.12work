/**
 * Created by root on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');
var arr = process.argv;
function callback(err,list) {
    if(!err){
        for(var i=0;i<list.length;i++){
            if(path.extname(list[i])==('.'+arr[3])){
                console.log(list[i]);
            }
        }
    }
}
fs.readdir(arr[2],callback);