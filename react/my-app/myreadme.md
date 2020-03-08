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
  讲jsx转换着对象键值对的形式
  是react的一个亮点，底层做批处理，diff算法处理，尽可能的减少dom操作
  dom的操作成本高

  return 的内容，
  function App() {
  return (
    <>
    <Component1/>
   </>
  );
}

非dom属性以及如何使用
dangerousSetInnerHTML ===innerHTML的替代方案
引用方式
<div dangerouslySetInnerHTML={{__html:'<p>我是插入的html</p>'}}></div>
ref
不能在函数组件上使用，但是可以在函数内部使用，也可以转意为class组件
const inputRef=React.createRef();
  <input type='text' ref={inputRef} />

  console.log("点击触发了",inputRef);
    inputRef.current.focus();
    这个就是创建一个input的ref，点击触发，到input输入框上
key
提高渲染性能，唯一标志，渲染数组


*****************三******
props(属性)介绍与作用
什么是props
组件 props state
如何使用
props:对外的接口，以及传入的数据，只读属性（无论函数组件还是类组件，因为react数据单向的，因为组件是需要复用的）
可以借助state的方法间接修改，但是本质上props没有修改的
定义方式划分
函数组件 无状态组件，性能高于函数组件
类组件 有state 有生命周期  有状态组件
1在class组件中使用props
 render(){
    const {name,age}=this.props;
  return (
    <div>
     <h2>这是一个子组件</h2>
     <p>{name}----{age}</p>
    </div>
  )
}
1.1 在render函数中，通过定义常量，接收this传来的props
2在父组件中通过对象传入
const user = { name: "guopeng", age: "25" }
 <Footer {...user} ref={useRef} />
3.定义完组件，设置组件props默认值
User.dafultProto={
  age:"18"
}

4.通过修改 state间接修改props（类组件）
  // constructor(props) 相当于构造器函数，如果没有声明，会默认添加
  constructor(props){
    //super(props) ES6实现继承，改编this的固定写法
    super(props);
    this.state ={
      name1:props.name +"www", 
    }
  }
5.react es6的类组件中是不默认绑定this的，需要在constructor中绑定
  constructor(props){
    //super(props) ES6实现继承，改编this的固定写法
    super(props);
    // 组件内部的状态为 setState
    this.state ={
      name1:props.name +"www", 
      count:0
    }
    this.handleAdd=this.handleAdd.bind(this);
  }
6.直接写回调表达式（）里的内容
     handleAdd(){
    console.log("this绑定",this)
    this.setState(state=>({
      count:++state.count
    }))
  }

  事件监听，this的绑定
  this
    与执行上下文有关系
    函数调用     严格模式 指向undefined 非严格模式 指向window对象
    作为方法调用  谁到用就指向谁
    call,apply方法调用，指向第一个参数
  react 中创建class组件，不会自动绑定this，需要手动绑定
  this.handleAdd=this.handleAdd.bind(this);
  主要是因为es6中创建class组件的方法问题
  this的4种绑定方式
  1.在constructor种通过bind方法绑定
   constructor(props){
     ..///....
    this.handleAdd=this.handleAdd.bind(this);
    ..///....
  2.定义方法时，通过箭头函数定义，（因为箭头函数定义时，就是绑定在创建它的对象上）
  handleAdd(){
    ..///....
  }
  handleAdd=() =>{
    ..///....
  }
  3.直接绑定在jsx的元素上，通过bind方法
  4.直接绑定在jsx的元素上，通过箭头函数
  不能直接绑定在jsx上（3，4），这样会触发rander函数重新生成，影响 

7.子组件到父组件的传值
props 接收任意值 参数，在父组件中定义方法，传入到子组件的props，返回到父组件
定义方法
  function getChildData(data){
      console.log("child data",data)
  }
  传入子组件 getChildData={getChildData}  
<Footer getChildData={getChildData} {...user} ref={useRef} />
子组件中在countructor中赋值，或者在方法中定义调用，方法需要绑定this
this.props.getChildData(this.state.count);

#6 state(状态)介绍与应用
什么是state?
props 对外的接口  只读行
state 组件内部的状态（state改变就会呈现不同的UI显示）可以修改
通过调用setState的方式去改变，不能直接state.状态 去改变
特点：
setState异步更新，不会立马更新，批量延时更新，
react控制处理程序（onClick,onChange,onBu） 生命周期钩子函数 不会同步更新state
setState同步更新，原生js绑定事件 seTimeout

如何使用？
1.在this.state中添加isShou的键值
      this.state ={
        name1:props.name +"www", 
        count:0,
        isShow:true,
      }

2.定义方法，注意定义是赋值要通过键值对
 handleClick= ()=>{
        this.setState({isShow:!this.state.isShow})
    }
3.render中修改dom
 {this.state.isShow?<h1>这是一个子组件 {name}</h1>:""}
  <button onClick={this.handleClick} >点击切换显示子组件</button>
1.修改state的两种方式，
1，键值对赋值
 {this.state.isShow?<h1>这是一个子组件 {name}</h1>:""}
2，通过函数赋值
 this.setState(state=>({
        count:++state.count
      })) 
//基于当前state进行计算，保证拿到的state一定是最新的，用函数的方法绑定
组件的state如何去划分?
state props 影响UI显示
原则
 1.组件尽量减少状态的使用
  UI渲染，数据展示，没有复杂交互 使用prpos，function 函数组件
  无状态组件 UI组件 函数式组件 纯函数 无交互 无数据逻辑的展示
 2.随着时间产生变化的数据 有交互 是要用到state class组件
 props 与state的区别
 相同点：
 组件内部数据，js对象，保存信息，控制组件形态 ui上
 不同点：
 props:父组件传入的 只读的（不能直接修改，修改需要使用state，但应该也是没有修改）
用于组件之间数据交互 this.props props访问
 state:可读可写 用于组件内部 私有变量 使用state来跟踪状态（控制元素的显示隐藏） 修改调用setState方法修改
