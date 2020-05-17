/**
 * 创建一个对象就是要：
 * 1.定义属性，定义this
 * 2.定义prototype,绑定constructor到父级
 */
// es5
function Person(name, age, family) {
  this.name = name;
  this.age = age;
  this.family = family;
}

Person.prototype = {
  constructor: Person,  //每个函数都有prototype属性，指向该函数原型对象，原型对象都有constructor属性，这是一个指向prototype属性所在函数的指针
  say: function () {
    alert(this.name);
  }
}

var person1 = new Person("lisi", 21, ["lida", "lier", "wangwu"]);
console.log(person1);
var person2 = new Person("wangwu", 21, ["lida", "lier", "lisi"]);
console.log(person2);
/**
 * es6中，就是要在constructor中定义属性，和方法
 */
// es6
class Person2 {
  constructor(age, name) {
    this.age = age;
    this.name = name;
    this.cry = function () {
      console.log(name + 'is crying!!! T^T');
    }
  }
  sayName() {
    console.log(this.name);
  }
}
var person1 = new Person(11, '小白');
var person2 = new Person(12, '小黑');

/**
 *
1）class的构造函数必须使用new进行调用，普通构造函数不用new也可执行。
class中的constructor会直接转化为function构造函数，
然后在function中通过 _classCallCheck的检查该function是否是一个Constructor。
因为有_classCallCheck检查必须是instanceof Constructor，所以class必须使用new进行调用。

2）class不存在变量提升，es5中的function存在变量提升。
class转变成了函数表达式进行声明，因为是函数表达式声明的，所以class不存在变量提升。

3）class内部定义的方法不可枚举，es5在prototype上定义的方法可以枚举。
class中定义的方法会传入 _createClass中，
然后 Object.defineProperty将其定义在Constructor.prototype上。
所以class中的方法都是定义在Constructor.prototype上的。
由于defineProperties中的 descriptor.enumerable = descriptor.enumerable || false;
将属性的 enumerable默认为false，所以class中定义的方法不可枚举。
 */