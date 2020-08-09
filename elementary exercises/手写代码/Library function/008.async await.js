/*jshint esversion: 6 */
// 手写代码，模拟原理
// async await 在异步处理上，async 函数就是 Generator 函数的语法糖。


// async 与promise？
/*
async是一种语法 一个字面量 一个简写（类似于{} 与Object.create()），async返回一个Promise
promise是一个对象 Promise对象，
*/

// 使用generator

var fetch = require('node-fetch');
var co = require('co');

function* gen() {
  var r1 = yield fetch('https://api.github.com/users/github')
  var json1 = yield r1.json();
  console.log(json1.bio)
}

co(gen)

// 使用async await

var fetch = require('node-fetch');

var fetchData = async function () {
  var r1 = await fetch('https://api.github.com/users/github');
  var json1 = await r1.json()
  console.log(json1.bio)
}

fetchData()
/*
async function fn(args) {
  //...
}

function fn(args) {
  return spawn(function* () {
    //...
  })
}


 */