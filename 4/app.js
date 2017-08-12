/**
 * Created by root on 2017/8/11.
 */
var fs = require('fs');
var arr = process.argv;
function callback(err,data){
    if (!err) {
        console.log(data.split('\n').length);
    }
}
fs.readFile(arr[2].toString(),'utf8',callback);
