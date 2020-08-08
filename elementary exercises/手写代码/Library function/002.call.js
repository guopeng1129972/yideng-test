/*jshint esversion: 6 */
// 手写代码，模拟原理

//call
Function.prototype.mycall = function (context1) {
  const context = context1 || window;
  context.fn = this;
  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push('args[' + i + ']');
  }

  let result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
};

var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.mycall(null); // 2

console.log(bar.mycall(obj, 'kevin', 18));