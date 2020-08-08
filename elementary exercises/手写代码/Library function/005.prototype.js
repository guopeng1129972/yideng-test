/*jshint esversion: 6 */
// 手写代码，模拟原理
// 实现一个继承 es5
function F(name, age) {
  this.name = name;
  this.age = age;
}

function myObj(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

function prototype(f, c) {
  let prototype = myObj(f.prototype);
  prototype.constructor = c;
  c.prototype = prototype;
}

// use it
prototype(father, child);

//实现一个继承es6
class Fes6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.names = [1, 2, 3, 4]
  }
  static say() {
    console.log('this.name ' + this.name);
  }
}
class Ces6 extends Fes6 {
  constructor(name, age) {
    super(name, age);
  }
  static run() {
    console.log('this is run');
  }
}

// 创建一个对象 组合模式
function F_obj(name) {
  this.name = name;
}
F_obj.prototype = {
  constructor: F_obj,
  getName: function () {
    console.log(this.name)
  }
}
//调用 
var newF_obj = new F_obj();