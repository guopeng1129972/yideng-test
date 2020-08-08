/*
1  写一个 mySetInterVal(fn, a, b),
每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal */
const mySetInterVal = (fn, a, b) => {
  let timer;
  return function () {
    if (!timer) {
      timer = setInterval(mySetInterVal(fn, a, b), a)
    } else {
      clearInterval(timer);
      a += b;
      timer = setInterval(mySetInterVal(fn, a, b), a)
    }
  }
}

const myClear = () => {
  clearInterval(timer);
}
// 2-10什么是深拷贝，和浅拷贝有什么区别，动手实现一个深拷贝
const deepClone = (obj) => {
  let newObj = typeof obj === 'object' ? {} : []
  for (let i in arguments) {
    newObj[i] = typeof arguments[i] === 'object' || typeof arguments[i] === 'function' && arguments[i] ? deepClone(arguments[i]) : arguments[i]
  }
  return newObj
}
// 2-23	箭头函数和普通函数的区别
/*
1 箭头函数表示一个作用域，
2 箭头函数没有原型属性
3 箭头函数不能当做Generator函数，不能使用yield关键字
4.是匿名函数，不能使用new
5.不绑定this,指向作用域的this
6.不绑定arguments,用rest解决...a
https://www.cnblogs.com/1825224252qq/p/11772370.html
*/
// 2-25	说一下盒子模型，以及标准情况和 IE 下的区别
/*
1.盒子模型由margin,border,padding,context 4个部分组成
2.各自分别都有4个组成分top,right,bottom,left
3.context有width,height属性
4.w3c标准盒子的长宽是不把boder与padding计算在内的
5.在IE中描述长宽是算上boder的padding的
*/

/* 3-25 BFC 是什么？触发 BFC 的条件是什么？有哪些应用场景？
1.Block Formatting Context 块级格式化上下文，
是一个独立的渲染区域（例如inline-blocks,table-cells）
2.触发条件
a.浮动元素，除了 float:none以外的所有
b.定位，position的absolute,fixed
c.display为inline-blocak,table-cells,flex,table
d.overflow除了visible以外
3.应用场景
a.清除浮动，防止浮动导致父元素高度塌陷父级设置overflow：hidder,元素float:right;
b.外边距折叠,两个块相邻就会导致外边距被折叠，给中间的设置BFC就会避免，方法就是套个父级设置overflow：hidder
c.自适应两栏布局
 */