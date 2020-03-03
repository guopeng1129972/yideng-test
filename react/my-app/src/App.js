import React,{Fragment} from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import { render } from 'react-dom';
// 根组件  App()是个函数组件：通过函数来创建的组件
function User(user) {
  return(
    <div >
     <p>{user.name}----{user.age}</p>
    </div>
  );
}function Component1() {
  const mydiv= "我是div";
  const mystyle={
    color:'green',
    fontSize:'13px'
  }
  function clickHander(){
    console.log("点击触发了");
  }
  const user={name:"guopeng",age:"25"}
  return (
    <>
    <div style={{color:'green',fontSize:'13px'}} title={mydiv} className="App" tabIndex='1' dataid='1'>
    <h2>hello world!{1>2?mystyle:mydiv}</h2>
      <p>123</p>
  <button onClick={clickHander}>{mydiv}</button>
    <User {...user} />
    </div>
    </>
  );
}
function App() {
  return (
    <>
    <Component1/>
    </>
  );
}
// 通过类创建 class 
// class App extends React.Component{
//   render(){
//   return (
//     <div className="App">
//      <h2>hello world!</h2>
//     </div>
//   )
// }
// }
// 导出组件到index.js
// 原理的写法
// function App(){
//   const mydiv ='我是div';
//   const elent=React.createElement(
//     "div",
//     {title:"mydiv"},
//     React.createElement(
//       "h2",
//       {className:"h22"},
//       "hello worlddd"
//     )
//   )
//   return elent;
// }
export default App;
