在src中建立
assets  静态资源文件 html js css img
components 组件合集
tests   测试文件
serviceWorker.js 为离线服务文件
setupTests.js 不知道但是可以删除

index.js  项目入口文件
App.js  项目根文件
修改他们中的目录
index.js  项目入口文件
#import './index.css';
import './assets/css/index.css';
App.js  项目根文件
#import './App.css';
import './assets/css/App.css';

函数组件：通过函数来创建的组件（函数组件是无状态的组件）
通过类创建 class 为类组件


2什么是jsx?
jsc :javascript and XML
原则
all in js
jsx 是react中的一种技术，不是全新的技术，也不是语言，js的扩展
特点
当遇到输入的为<>识别为html;
当输入的js元素，通过{}识别
function App() {
  const mydiv= "我是div";
  return (
    <div title={mydiv} className="App" tabIndex='1' dataid='1'>
     <h2>hello world!</h2>
       <label htmlFor></label>
    </div>
  );
}
注意点
jsx 中
 命名为小驼峰，因为单字可能为保留字class为className ，但是dataid是例外
 还有<label htmlFor></label>用的htmlFor


jsx原理

一切jie对象
function App() {
  const mydiv= "我是div";
  return (
    <div title={mydiv} className="App" tabIndex='1' dataid='1'>
     <h2>hello world!</h2>
       <label htmlFor></label>
    </div>
  );
}
用的是React.createElement()方法，类比的写法为
function App(){
  const mydiv ='我是div';
  const elent=React.createElement(
    "div",
    {title:"mydiv"},
    React.createElement(
      "h2",
      {className:"h22"},
      "hello worlddd"
    )
  )
  return elent;
}
没有的话，写null
即 通过 React.createElement()创建
注意点：
只能有一个根节点
当需要不显示根节点的时候，可以用Fragment代替根节点，
需要引入，方法
import React,{Fragment} from 'react';
使用
function App() {
  const mydiv= "我是div";
  return (
    <Fragment>
    <div title={mydiv} className="App" tabIndex='1' dataid='1'>
     <h2>hello world!</h2>
    </div>
    </Fragment>
  );
}
注意点：使用return里面的需要换行的时候，需要小括号包起来，react16的Fragment
还可以用<></>代替



jsx具体用法

基本语法
标签类型
dom标签 首字母必须小写 div p
自定义标签 -组件 首字母必须大写
比如引用 Component1
内联样式
定义对象，如果是多单词，或者那种连字符方式的，需要用驼峰写法表示，（伪类元素不能）
  const mystyle={
    color:'green',
    fontSize:'13px'
  }
使用的话，
<div style={mystyle} title={mydiv} 去使用
也可以
<div style={mystyle} title={mydiv}

表达式
jsx中
前面说了用{}的话，就当做js处理，但是只支持表达式的形式，比如三目表达式，
逻辑语句是不能支持的，同样的，也不能写对象
 <h2>hello world!{1>2?mystyle:mudiv}</h2> 可以
 <h2>hello world!{A:1}</h2> 不能
 但是在style中，写对象是可以的
 <div style={{color:'green',fontSize:'13px'}} title={mydiv}
 原因是因为jsx解析第一层{},当做解析对象处理，

标签属性
需要用驼峰写法表示
dataid可以全小写
定义事件的时候,也是需要用驼峰写法表示，
在renturn之前定义函数
  function clickHander(){
    console.log("点击触发了");
  }
用大括号引用，
<button onClick={clickHander}>{mydiv}</button>


注释
{//zhushi}
{/*zhushi*/}

拓展运算符
...
引用变量
function User(user) {
  return(
    <div >
     <p>{user.name}----{user.age}</p>
    </div>
  );
  父组件中定义对象
  const user={name:"guopeng",age:"25"}
  引用子组件
  <User {...user} />



  虚拟DOM与非dom对象

  什么是虚拟dom?
  是react的一个亮点，底层做批处理，diff算法处理，
  dom的操作成本高

  return 的内容，
  function App() {
  return (
    <>
    <Component1/>
   </>
  );
}

