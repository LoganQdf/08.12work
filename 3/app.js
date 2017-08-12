/**
 * Created by root on 2017/8/11.
 */
var fs = require('fs');
var string = fs.readFileSync('new.txt');
var arr=string.toString().split('\n');
console.log(arr.length);