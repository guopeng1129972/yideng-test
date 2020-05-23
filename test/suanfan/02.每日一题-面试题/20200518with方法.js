/**
with (this) {

}
为什么不能这么写？
1.他具体不好再哪里呢？
2.vue在compile的源码中为什么大量使用它？
答：With是有一些bug的，比如
var obj={}
with(obj){
  a=30
}
console.log(obj.a);

如上这样是取不到的反而会得到一个全局的a变量，
而且with一旦在闭包内执行 将放弃当前闭包全部变量的回收，造成GC。

唯一的好处就是本身使用with能节省多次调用with并形成块作用域。

2.vue并没有对模板中的javascript表达式进行ast语法分析，
如果要移除with,就需要对javascript表达式进行ast语法分析，
并且还需要一个专门的解释器对ast语法树进行解释，

*/
