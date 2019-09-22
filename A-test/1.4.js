/*
题目
 
*/

var num = 1;

function yideng() {
    "use strict";
    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}
(function () {
    "use strict";
    yideng2();
})();
yideng();
/*
我的见解
var num = 1;    

function yideng() {    
    "use strict";
    console.log(this.num++);    
}

function yideng2() {
    console.log(++this.num);
}
(function () {
    "use strict";
    yideng2();
})();
yideng();   

我觉得是2 2 
*/
/*
实际输出结果
2 Uncaught TypeError: Cannot read property 'num' of undefined
    at yideng (<anonymous>:5:13)
    at <anonymous>:15:1

 标准结论
*/