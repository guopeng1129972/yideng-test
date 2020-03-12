/* jshint esversion: 6 */ 
import React from 'react';

import User from "./User.js";
import Footer from "./Footer.js";
function Component1() {
    const mydiv = "我是div";
    const mystyle = {
      color: 'green',
      fontSize: '13px'
    };
    const useRef=React.createRef();
    const inputRef=React.createRef();
    const usernameRef=React.createRef();
    
    // 创建一个ref属性
    
    function clickHander() {
      console.log("点击触发了",inputRef);
      console.log("usernameRef",usernameRef.current.value);
      inputRef.current.focus();
    }
    function getChildData(data){
        console.log("child data",data)
    }
    const user = { name: "guopeng", age: "25" }
    const username = { name: "guopeng" }
    return (
      <>
        <div style={{ color: 'green', fontSize: '13px' }} title={mydiv} className="App" tabIndex='1' dataid='1'>
          <h2>hello world!{1 > 2 ? mystyle : mydiv}</h2>
          <p>123</p>
          <button onClick={clickHander}>{mydiv}</button>
          <User {...user} />
          <Footer getChildData={getChildData} {...user} ref={useRef} />
          <input type='text' ref={inputRef} />
          <div dangerouslySetInnerHTML={{__html:'<p>我是插入的html</p>'}}></div>
          <div><label htmlFor="input1" >username</label>
            <input id="input1" type="text" {...username} defaultValue="this is 非受控组件" ref={usernameRef} /> </div>
        </div>
      </>
    );
  }

  export default Component1;