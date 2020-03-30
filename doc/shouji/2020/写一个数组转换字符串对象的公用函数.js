/* jshint esversion: 6 */ 
/*

拿到一个字符串，有规律的转换成为对象，或者数组
1 obj->arr
2 arr->obj
3 obj->str
*/  

var str='123';
let newArr=Array.prototype.slice.call(str);
var el=true;
Array.prototype.toString.call(el); //"[object Boolean]"