//从es5-es6创建一个对象.js

// 工厂模式
function createPerson(age, name) {
  var o = new Object();
  o.age = age;
  o.name = name;
  o.code = function () {
    console.log('hello world!');
  };

  return o;
}

var person1 = createPerson(11, '小白');
var person2 = createPerson(12, '小黑');

//构造函数模式
function Person(age, name) {
  this.age = age;
  this.name = name;
  this.code = function () {
    console.log('hello world!');
  };
}

var person1 = new Person(11, '小白');
var person2 = new Person(12, '小黑');


// 构造函数模式解决了工厂模式中的对象识别问题，通过：
console.log(person1 instanceof Person); // true
// 可以看出person1能成功被识别为一个Person对象。
// 但是，构造函数模式也同样存在一个缺点，
// 就是构造函数里的属性和方法在每个对象上都要实例化一遍，
// 包括对象共用的属性和方法，这样就造成了代码的复用性差的问题。
// 所以大多数人会考虑将构造函数模式和原型模式组合起来使用。在这里先介绍一下原型模式。

// 原型模式
function Person(age, name) { 
  Person.prototype.age = age;
  Person.prototype.name = name;
  Person.prototype.code = function() {
       console.log('hello world！');
  };
}

var person1 = new Person();
var person2 = new Person();

// 原型+构造

function  Person(age, name) { 
  this.age = age;
  this.name = name;
  this.cry = function() {
       console.log(name + 'is crying!!! T^T');
  }
}
Person.prototype = {
  constructor: Person,
  sayName: function() {
      console.log(this.name);
  }
}
var person1 = new Person(11, '小白');
var person2 = new Person(12, '小黑');

// class 类定义

class Person{ 
  constructor(age, name) {
      this.age = age;
      this.name = name;
      this.cry = function() {
       console.log(name + 'is crying!!! T^T');
      }
  }
  sayName() {
      console.log(this.name);
  }
}
var person1 = new Person(11, '小白');
var person2 = new Person(12, '小黑');

// 2.es5与es6定义对象的区别#
// 1）class的构造函数必须使用new进行调用，普通构造函数不用new也可执行。
// 2）class不存在变量提升，es5中的function存在变量提升。
// 3）class内部定义的方法不可枚举，es5在prototype上定义的方法可以枚举。