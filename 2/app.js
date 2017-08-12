/**
 * Created by root on 2017/8/11.
 */
var arr = process.argv;
var num = 0;
for(var i=2;i<arr.length;i++){
    num+=Number(arr[i]);
}
console.log(num);
