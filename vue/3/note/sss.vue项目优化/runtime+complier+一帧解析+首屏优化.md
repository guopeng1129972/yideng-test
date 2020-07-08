
1.vue runtime + complier

template -> ast -> render -> vnode -> patch -> dom

script   -> new Vue() ->date()

style


编译时
运行时

vnode 存在于内存之中

vnode如何转换成真实的dom？
patch 就是生成真实dom的动作,
深度遍历，同层比较，深度递归
patch(){
  document.getElementById('...').appendchild('')
}

oldvdome newvdom - >diff =>patch(){修改正式dom的动作}=>修改页面 
oldvdome newvdom 的对比过程很慢，



dom
react采用-> fiber {时间切片的逻辑}
pull ==>主动发出的动作=> dom修改=>diff(react (setState props))=>数据改变=》dom
vue采用->
push =>
一个组件=》一个watcher 组件内部使用diff算法对比
一个特定的watcher可以生成一个vnode，
一个组件里可能有很多watcher(内存 运行时)
{{text}} ==>watcher(修改生成dom的操作)
<div>{{text}} 

runtime（运行时） 


编译时

这样写有个问题
new Vue{
  template:'<div>{{text}}</div>'
}
因为vue有在线编译的模块，所以这样是可以运行的，
（是在浏览器调用js去执行的，是不会在runtime执行的）
vue打好的包
runtime + complier =>才会运行这样的代码，
并且这样调用了两个包，性能很差（应该写在render方法里）
runtime only =》是不会运行的
这是资源优化，高级的性能优化


为什么要用vnode?
1.借用寄存器（gpu）（dom），内存(vdom)（缓冲地带），硬盘（数据）
2.使用vdom就可以让代码到不同的端去执行


vue如何优化加载速度？

vue白屏问题？

浏览器进程

renderer Process
renderer Process分为3个线程
1.compositor process（排版线程）
排版线程是为了启动主线程，但是compositor process不一定触发
主进程（比如在网页交互并未提交数据,不触发重绘重排，
html css js 资源文件修改）
走的就是
compositor process-》Reaster Scheduled
2.compositor Tile Worker(s)
栅格化=》 把cpu数据处理成GPU数据
3.Main Thread（主线程（事件 逻辑处理））
Frame Start -> input event handlers 
requestAnimationFrame（这一帧设置的requestAnimationFrame，
会在下一帧执行，所以上一帧的js会在这块执行）
ParseHTML（浏览器执行到这一块，遇到js会调用V8来执行js，
等待执行完成后，看是否会触发重绘重排，所以本次帧的js在这执行）
Recalc Styles

dom tree
          => layer tree
css tree

css tree 修饰了dom tree 但是dom tree + css tree !=layer tree
（比如一个元素的display:none; 就会少个节点，
如果dom上绑定了：hover属性，就会多个节点）
Layout
Update Layer Tree
Paint 
修改元素的opacity属性，会触发最终图层的顺序显示，
比如修改一个元素的opacity会改变他是否在最上图层显示
Composite
提交数据的栅格化过程，会将页面做成多个图层，
都要显示什么，这个过程不绘制页面（gpu来做）
到此 
Frame end
将处理好的栅格文件，交由gpu处理
实现一个async wait
libuv 怎么实现？



GPU Process =》(绘图进程 图形学)
2.vue 浏览器端的一帧解析机制
3.vue 首屏优化