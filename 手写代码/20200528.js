/*jshint esversion: 6 */
// 手写代码，模拟原理
// 深拷贝
function clone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    newObj[i] = obj[i] && typeof obj[i] == 'object' || typeof obj[i] == Object ? myclone(obj[i]) : obj[i];
  }
  return newObj;
}
//call
Function.prototype.mycall = function (context1) {
  const context = context1 || window;
  context.fn = this;
  let args = [];
  for (let i in arguments) {
    args.push('args[' + i + ']');
  }
  let result = eavl('context.fn(' + args + ')');
  delete context.fn;
  return result;
};
// myaplly
Function.prototype.myapply = function (context1, arr) {
  let context = Object.create(context1) || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    let args = [];
    for (let i = 1, len = arguments.length; i < len; i++) {
      args.push('args[' + i + ']');
    }
    result = eavl('context.fn(' + args + ')');
  }
  delete context.fn;
  return result;
};
// new
function myNew(obj) {
  return function () {
    let newObj = {
      __proto__: obj.prototype
    };
    obj.call(newObj, ...arguments);
    return newObj;
  };
}
//简版
Function.prototype.mynew2 = function () {
  let obj = {};
  let _constructor = [].shift.call(arguments);
  obj.__proto__ = _constructor.prototype;
  let res = _constructor.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}
//简2
Function.prototype.myNew3 = function () {
  var obj = {},
    Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}

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
// debounce
function debounce(func, wait) {
  let timer;
  return function () {
    //clearTimeOut(timer) 在return 的函数里
    clearTimeout(timer);
    let context = this;
    let args = arguments;
    timer = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
//throttle
function throttle(func, wait) {
  let context, args, start = 0;
  return function () {
    //let now 在return 的函数里
    let now = +new Date()
    context = this;
    args = arguments;
    if (now - start > wait) {
      func.apply(context, args)
      //重新获取当前时间
      start = +new Date()
    }
  }
}

function throttle1(func, wait) {
  let timer, context, args;
  return function () {
    context = this;
    args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        //先清空定时器
        timer = null;
        func.apply(context, args)
      }, wait);
    }

  }
}