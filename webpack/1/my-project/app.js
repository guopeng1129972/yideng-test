var http = require('http');


http.createServer((require, response) => {

/*const*/
var a = "🍊";
if (true) {
    console.log(a);
}

/*
const
1.提醒大家不能改变
2.符合函数式编程
3.本质区别，编译器内部处理机制不同

*/

/*const 应用*/
/*old*/
var arr = ['a', 'b', 'c'];
console.log(arr[1]);
/*now*/
function test() {
    return {
        a: 'hello',
        b: '2'
    }
}

const result = test();
const {b,a} = result;
console.log(a);





}).listen(3000, () => {
    // console.log("server is ok!")
});
