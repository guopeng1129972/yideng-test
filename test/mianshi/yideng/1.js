// 1、写出以下打印结果
var str = '123hello'
console.log(typeof (str++));
console.log(str);
//2.写出一下打印结果
['1', '3', '10'].map(parseInt);

var a = {
  n: 1
};
var b = a;
a.x = a = {
  n: 2
};

alert(a.x);





// --> undefined alert(b.x);// --> {n:2}