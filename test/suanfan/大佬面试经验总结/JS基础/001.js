// 前端桃园 里面的 莫问的,记录几个不知道，或者不太清晰的
/*
#1.for循环和forEach循环，哪种性能会好一些?
搜了一下这个java上文的比较多，在js上要想搞清楚这个，我觉得还是看V8上怎么描述for与for each
#2.let，const和var的区别【给一道题，分析报出什么错误】
相同点，都是定义变量
var 存在变量提升，并且类型相当于any
let const 是块级作用域定义变量的方法，有以下特点
1.不存在变量提升，
2.不能重复声明
3.不绑定在全局作用域
其中let 与const的区别
const 是常量，定义之后不会被改变，属性能被重写，但是本身的值不能被改变
const a={c:2,b:3};const b={}
a.e=4;
a=b;//Assignment to constant variable.
let   是变量，定义之后可以被改变，属性能被重写，本身的值能被改变
let a={c:2,b:3};const b={}
a=b;//ok
#3JS的基础数据类型有哪些
Symbol 是es6定义的
#什么是Symbol，它的使用场景是什么？
1.Symbol 是一个基本类型，没有属性，方法
使用场景
let a = Symbol.for('abc')
let b = Symbol.for('abc')
console.log(a === b)// 结果 true
let a = Symbol('abc')
let b = Symbol('abc')
console.log(a === b)// 结果 false
//Symbol() 每次都会返回不同的类型值
在我模拟实现apply，call的时候，可以用到，
context.fn=this;//问题，就是当这个传入的context存在fn方法时，就会重写
let a = Symbol.for('abc')
总结为当你想需要一个值但是这个值可能被定义过，那么就需要用Symbol声明下，保证唯一性
#4.数组原型上面的方法有哪些，哪些是可以改变数组的，哪些是不可以的？
ES5:
a.splice()/ a.sort() / a.pop()/ a.shift()/ a.push()/ a.unshift()/ a.reverse()
ES6:
a.copyWithin() / a.fill
push()
pop()
shift()
unshift()
splice()
slice()
join()
toLocaleString()
cancat()
indexOf()
lastIndexOf()
sort()
reveres()
es7
includes() return bool
遍历方法(12个):
js中遍历数组并不会改变原始数组的方法总共有12个:
ES5：
forEach、every 、some、 filter、map、reduce、reduceRight、
ES6：
find、findIndex、keys、values、entries
every
some
filter
map
reduce/reduceRight
es6
find()findIndex()
es6
keys()values()entries()
#5.如何转换一个类数组对象，大致原理是怎么样的
利用数组方法，然后call
let newarg=[].prototype.call(args)
#Map 和 Weakmap的区别
Set
成员唯一、无序且不重复；[value, value]，键值与键名是一致的（或者说只有键值，没有键名）；可以遍历，方法有：add、delete、has。
WeakSet
成员都是对象；成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏；不能遍历，方法有 add、delete、has。
Map
WeakMap

#6.了解JS的作用域么，函数作用域是在什么时候形成的
作用域是指程序源代码中定义变量的区域。
JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar();// 输出 1
但是闭包不会
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();//local scope
#7.什么是闭包，它有什么作用，它的原理
闭包是那些可以访问自由变量的函数，
自由变量就是在函数中使用，但不是函数参数也不是函数的局部变量的变量（我的理解就是全局变量）
理论上讲：JS的方法都是闭包
从实践上讲，有两个特点
1.在代码中引用了自由变量
2.即使创建它的上下文已经销毁，它仍然存在
#8.通过例子的形式，说一下JS的原型链
显示原型：prototype
隐式原型：__proto__
prototype指向构造此函数的
#如何实现一个new

说一下JS的继承方式

什么是箭头函数，它和普通函数的区别

this的指向【通过题目考察，表述结果，解释理由】

如何迭代一个对象，for..in这种方式，如何取出对象自己的属性

Object.assign它是一个浅拷贝还是深拷贝

如何实现一个深拷贝

什么是Promise，如何实现它，Promise.then，Promise.race如何实现

什么是防抖，什么是节流，如何实现防抖

描述一下Event Loop，这个循环会一直下去么，宏任务和微任务的区别【通过笔试题的方式，表述结果，解释理由】

如果在Event Loop中，不断push微任务是否一直会执行

浏览器的事件机制有哪几个阶段？addEventListener的第三个参数起到什么作用

如何实现一个请求超时 */