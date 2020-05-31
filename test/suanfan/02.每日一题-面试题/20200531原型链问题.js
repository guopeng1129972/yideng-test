/*jshint esversion: 6 */
function yideng() { }
const a = {}, b = Object.prototype;
/* 
1.__proto__:隐式原型
1.js中任意对象都有一个内置属性[[prototype]],es5之前没法访问，
但是可以通过__proto__访问，之后加入这个属性的get方法，
Object.getPrototypeOf(),(Object.prototype这个对象的返回值是null,(
这个我在谷歌上试了下，返回getPrototypeof() is not a function,
Object.prototype.getPrototypeOf()的返回值))
2.prototype：显式原型
2.每个函数在创建之后，都会有一个prototype属性，指向函数的原型对象
（使用Function.prototype.bind构造出来的函数没有prototype属性）
3.之间的关系
隐式原型指向创建这个对象的函数(constructor)的prototype
4.作用是什么？
显示：继承和共享
隐式：构成原型链
__proto__的指向？
指向创建这个对象函数的显式原型
创建对象的方法？
1{} 2 new  3 Object.create()
本质上都是用new Object()创建
*/
console.log(a.prototype === b);
/* 1.prototype是函数才有的属性，当创建时，会加上prototype属性，
而实例对象没有prototype属性，所以a.prototype为undefind */
console.log(Object.getPrototypeOf(a) === b);
/* 对象（a）在创建的时候，__proto__会指向其构造函数(Object)的prototype属性
  typeof Object //'function' 
  所以a.__proto__为Object.prototype
  所以Object.getPrototypeOf(a)与a.__proto__是一致的
  */
console.log(yideng.prototype === Object.getPrototypeOf(yideng));
/* f.prototype和Object.getPrototypeOf(f)不是一回事
  f.prototype是通过new 创建的实例 f 的原型
  f.prototype === Object.getPrototypeOf(new f())//true
  Object.getPrototypeOf(f)是f函数的隐式原型
   Object.getPrototypeOf(f)===f.__proto__===Function.prototype//true

 */