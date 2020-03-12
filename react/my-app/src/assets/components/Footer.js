/* jshint esversion: 6 */
import React from 'react';
class Footer extends React.Component {
  // constructor(props) 相当于构造器函数，如果没有声明，会默认添加
  constructor(props) {
    //super(props) ES6实现继承，改编this的固定写法
    super(props);
    // 组件内部的状态为 setState
    this.state = {
      name1: props.name + "www",
      count: 0,
      isShow: true,
      username:"this is defult value",
      textValue:"this is defult textvalue"
    }
    // this.handleAdd=this.handleAdd.bind(this);
    this.props.getChildData(this.state.count);
    //this绑定
    console.log("1.constructor初始化");
  }
  //挂载阶段 1，2，3，4
  UNSAFE_componentWillMount() {
    console.log("2.componentWillMount执行，在render方法之前调用");
  }
  componentDidMount() {
    console.log("3.componentDidMount执行，组件挂载完成之后，DOM元素已经插入到页面上");

  }
  handleAdd = () => {
    console.log("this绑定", this.state.count, this)
    //基于当前state进行计算，保证拿到的state一定是最新的，用函数的方法绑定
    this.setState(state => ({
      count: ++state.count
    }))
  }
  handleClick = () => {
    
    this.setState({ isShow: !this.state.isShow })
  }
  handleChange = (e) => {
    // e.preventDefult();
    this.setState({username:e.target.value});
  }
  handleChangeText = (e) => {
    this.setState({textValue:e.target.value});
  }
  render() {
    console.log("rander函数执行");
    const { name, age } = this.props;
    return (
      <div>
        {this.state.isShow ? <h1>这是一个子组件 {name}</h1> : ""}
        <p>{this.state.name1}----{age}</p>
        <input type="text" onChange={this.handleChange} value={this.state.username} />
        <button onClick={this.handleAdd} >点击加1{this.state.count}</button>
        <button onClick={this.handleClick} >点击切换显示子组件</button>
        <textarea name="" id="" onChange={this.handleChangeText} defaultValue="this is defule value" value={this.textValue} cols="30" rows="10"></textarea>
      </div>
    )
  }
  //更新阶段
    UNSAFE_componentWillReceiveProps(nextProps){
        // props引起的组件更新过程this.setState 不会触发
        // 只要父组件的render函数被调用，无论父组件传给子组件
        // 的props有没有改变，都会触发此函数
    }
    //重要，性能优化用
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    UNSAFE_componentWillUpdate(prevProps,prevState){

    }
    // 卸载阶段
    // 处理清理工作 重要
    componentWillMount(){

    }
    //错误处理
    componentDidCatch(error,info){
      //错误捕获
    }

}

export default Footer;