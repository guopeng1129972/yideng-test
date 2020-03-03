// 必须引入的库
import React from 'react';
// react-dom 的相关元素，将虚拟dom转换为真实的组件
import ReactDOM from 'react-dom';
import './assets/css/index.css';
//导入app.js
import App from './App';
// import * as serviceWorker from './serviceWorker';
//将虚拟dom转换为真实的组件render(a,b,c) a,为组件名称 b为渲染的模板组件的id c为回调函数
ReactDOM.render(<App />, document.getElementById('root'),()=>{console.log('渲染OK')});


// serviceWorker.unregister();
