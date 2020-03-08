import React, { Fragment } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import { render } from 'react-dom';
import Component1 from "./assets/components/Component1.js";
// 根组件  App()是个函数组件：通过函数来创建的组件


function App() {
  return (
    <>
      <Component1 />
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
