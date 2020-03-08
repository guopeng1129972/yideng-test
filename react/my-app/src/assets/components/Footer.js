/* jshint esversion: 6 */ 
import React from 'react';
class Footer extends React.Component{
    // constructor(props) 相当于构造器函数，如果没有声明，会默认添加
    constructor(props){
      //super(props) ES6实现继承，改编this的固定写法
      super(props);
      // 组件内部的状态为 setState
      this.state ={
        name1:props.name +"www", 
        count:0,
        isShow:true,
      }
      // this.handleAdd=this.handleAdd.bind(this);
      this.props.getChildData(this.state.count);
    }
    handleAdd = ()=>{
      console.log("this绑定",this.state.count,this)
      //基于当前state进行计算，保证拿到的state一定是最新的，用函数的方法绑定
      this.setState(state=>({
        count:++state.count
      }))
    }
    handleClick= ()=>{
        this.setState({isShow:!this.state.isShow})
    }
    render(){
      const {name,age}=this.props;
    return (
      <div>
          {this.state.isShow?<h1>这是一个子组件 {name}</h1>:""}
       <p>{this.state.name1}----{age}</p>
       <button onClick={this.handleAdd} >点击加1{this.state.count}</button>
       <button onClick={this.handleClick} >点击切换显示子组件</button>
      </div>
    )
  }
  }

  export default Footer;