react
虚拟dom

createElement 创造出一个js对象 返回一个reactElement
会先判断是否有config然后处理config 会判断是否有存在defaultProps，接着处理children
利用reactElement创建react元素
利用object形式递归生成一个dom树

dom - diff
三种优化策略

更新的时候只比较同级，并不会跨级对比
同级对比不对， 整个替换或者删除
同层对比如果只是换位置的话， 就会复用。 通过key实现的。

对树的遍历

先序深度优先遍历 时间复杂度 o(n)

对比规则

当节点类型相同时候， 会比较属性是否相同。 产生一个属性的补丁包 { type: 'ATTRS', attrs: { class : 'xxx' } }
新的DOM节点不存在的时候 { type: 'REMOVE', index: xx }
节点类型不相同的时候， 直接替换  { type: 'REPLACE', newNode: newNode }
文本的变化  { type: 'TEXT', text: 1 }

setState

在组件已经渲染完成中，setState是同步执行的，但是不会立马更新，因为他在批量处理中会等待组件render才真正触发。不在批处理中的任务可能会立马更新。到底更新不更新要取决于setState是否在Async的渲染过程中，因为他会进入到异步调度过程。如果setState处于我们某个生命周期中，暂时不会BatchUpdate参与，因为组件要尽早的提前渲染。

fiber

浏览器API requestIdleCallback
react利用requestAnimationFrame来计算剩余时间来模拟requestIdleCallback从而实现时间分片
利用window.performance.now()得到准确的浏览器时间
MessageChannel创建通信管道 发送消息数据完成消息传递

fiber流程

获取系统当前时间 hasNativePerformanceNow
设定任务的优先级
根据优先级设置任务的过期时间
根据这些优先级和过期时间进行双向链表推导
scheduleHostCallbackIfNeeded 具体的进行调度任务
如果时间没有过期的话
requestAnimationFrameWithTimeout(animationTick) 压帧 （requestAnimationFrame 模拟 requestIdleCallback）
requestAnimationFrameWithTimeout就是按照每一帧的空闲时间来计算 按照1000 / 30来计算

调度算法 任务优先级

ImmediatePriority = 1 最高任务优先级
UserBlockingPriority = 2 用户阻塞优先级
NormalPriority = 3 普通优先级
LowPriority = 4 低优先级
IdlePriority = 5 空闲优先级

暴露API

unstable_scheduleCallback 最低优先级任务
flushSync 同步任务最高优先级任务

redux
createStore

getSteate, dispatch, subscribe subscribe 返回一个unsubsribe卸载函数
发布订阅模式， 利用subscribe监听每个组件数据发生的变化

applyMiddleware

中间件 利用改写dispatch实现

react - redux

一个HOC 封装redux暴露给组件

react - router

利用react context来做数据传递

hashRouter

监听hash的变化 window.addEventListener('hashchange', () => { })

historyRouter

监听浏览器历史栈popstate信息变化 window.addEventListener('popstate', e => this.handler())

AST语法树

ast抽象语法树 可以通过程序javascript parser将代码转换成抽象语法树(ast)
使用ast可以干嘛 ? 将源代码进行解析解析成 ast语法树, 遍历这个树, 修改节点的值, 重新生成新的树
转换ast的第三方库 esprima(将源代码生成ast) estraverse(遍历ast语法树) escodegen(重新生成源代码) 在线解析的网址: astexplorer.net /
  使用babel转换源代码 使用到的库@babel/core(生成ast,遍历语法树,转换) babel-types(用于创建新的节点类型或是判断节点类型)

核心步骤

利用ast的三个核心步骤

将源代码转换成ast语法树
解析ast语法树转换成想要生成的代码 +
  代替



webpack
webpack的生成结构流程

自己创建了一个 requre的方法去加载模块(这就是为什么webpack可以认识node的require module.export的原因)
检查缓存是否存在, 如果存在就直接返回缓存中的exports
如果缓存不存在, 就创建一个对象 放入缓存中
开始执行这个模块

性能优化

利用performance来监控首屏 白屏和完全加载的时间

devtool 调试用 源码映射

dev cheap - module - eval - source - map 提示的错误比较全， 打包的速度比较快
prod  cheap - module - source - map 打包速度较快 调试较好， 也可以用 none

分析打包文件

--profile --json > stats.json 生成json文件
analyse code - splittingwebpack官网 代码分析工具
webpack - bundle - analyzer
  (分析网站)[webpack.github.io / analyse /] 把生成的json上传到该网站

高性能代码优化 如何查看代码使用率 （做到加载页面代码利用率最高）

chrome浏览器 在network控制面板  command + shift + p
输入 coverage 查看当前页面代码利用率
webpack - webpackPrefetch
webpackPrefetch 会等待主线程加载完毕之后在加载 webpackPreload 是和主的业务文件一起加载


1、优化方案， 多写异步代码
2、典型利用场景 modal 需要操作才触发的内容
3、解决办法 利用空闲时间下载代码
利用 import(/* webpackPrefetch: true */ 'xx.js') 异步加载解决方案，这个加载方案是在js主线程加载完毕之后， 网络带宽有空闲的时候才会加载

性能优化的点
1、前端性能优化最重要点的代码覆盖率上。 当前页面代码使用率
2、利用缓存
webpack打包优化
webpack - bundle - analyzer 进行分析打包大小
noParse

不去解析某个库内部的依赖关系
比如jquery 这个库是独立的， 则不去解析这个库内部依赖的其他的东西
在独立库的时候可以使用

module.exports = {
  module: {
    noParse: /jquery/,
    rules: []
  }
}

复制代码IgnorePlugin

忽略掉某些内容 不去解析依赖库内部引用的某些内容
从moment中引用./ locol 则忽略掉
如果要用local的话 则必须在项目中必须手动引入 import 'moment/locale/zh-cn'

module.exports = {
  plugins: [
    new Webpack.IgnorePlugin(/\.\/local/, /moment/),
  ]
}

复制代码dillPlugin

不会多次打包， 优化打包时间
先把依赖的不变的库打包
生成 manifest.json文件
然后在webpack.config中引入
webpack.DllPlugin Webpack.DllReferencePlugin

happypack

大项目的时候开启多线程打包

webpack自带优化 tree - shaking，scope hosting

import 在生产模式下 会自动去除没用的代码
tree - shaking 把没用到的代码 自动删除掉 mode = 'production'
不支持require tree - shaking
scope hosting 作用域提升， 会自动省略一些可以简化的代码

多页面打包抽离公共代码
module.exports = {
  optimization: {
    splitChunks: { // 分割代码块 只有在多页的时候才需要把公共的部分抽离出来
      cacheGroups: { // 缓存组
        common: { // 公共的模块
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
        },
        vendor: {
          priority: 1, // 权重 先抽离这个在抽离其他的
          test: /node_modules/, // 抽离第三方模块。 只要引用node_modules的就抽离出来
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
        }
      }
    }
  },
  mode: 'development', // production
  entry: {
    index: './src/index.js',
    otherL: './src/other.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
}
复制代码promise
A + 规范的promise

首先写一个promise类 这个类包含几个方法resolve reject all then, 这些方法可以单独调用。 构造器constructor里面是传入一个方法fn， 这个方法fn会在内部调用resolve, reject这两个方法, 会在这两个方法里面具体判断该执行的逻辑。 并且构造器里面会生成一个状态state和一个值value， 还会生成两个队列，成功状态回调队列onFulfilledCallbacks和失败状态回调队列onRejectedCallbacks。
这些方法resolve, reject all then都会进行promise / A + 规范的检查 会调用一个新的函数resolvePromise 这个函数就具体实现规范，传入参数有promise x resolve, reject, 会对传递的参数x进行判断。 这个x参数包含任意值。 对这个x判断如下:


如果x 与 promise 相等 则是循环引用抛出异常
如果x的构造函数是promise 则会判断x的状态， 如果是等待状态， 则回调resolvePromise本函数 如果是执行或者拒绝状态， 则执行x.then
如果x是一个object或者function，则会先取到then = x.then，如果报错则执行reject。 否则把then的this指向改变到x身上 并且执行then函数 这里会先判断then是函数还是别的.是函数则直接执行， 不是执行resolve并且把x当为参数


基本上这就是一个符合A + 规范的promise

const app = new Koa()
const host = 'localhost'
const port = 8881

// 设置强缓存
app.use(async (ctx, next) => {
  // 设置响应头Cache-Control 设置资源有效期为300秒
  ctx.set({
    'Cache-Control': 'max-age=300'
  })
  await next()
})

// 设置协商缓存
// app.use(conditional())
// app.use(etag())

app.use(koaStatic(path.join(__dirname, './static')))

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`)
})

复制代码Docker


Docker 让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中, 然后发布到任何服务器上去, 容器之间都是沙盒状态


Docker的理解: Docker就像一个虚拟机, 在每一个容器中有这个项目的依赖, 这就避免了相同的代码在不同的环境中出现的问题



Docker核心的命令: docker build 通过配置文件构建自己的景象 docker pull 下载景象到本地 docker run 通过景象启动容器


查看当前启动的docker容器 docker container ls docker container ls - a 查看全部


删除容器 docker container rm(-f 强行删除) 容器ID


查看当前的景象 docker image ls


配置Dockerfile
FROM node: last //居于node的最新版本的镜像
COPY./ app / app //将当前目录的./app文件夹copy到镜像中的app文件夹中
WORKDIR / app //镜像的执行目录
RUN npm install //当启动镜像时执行的命令
EXPOSE 3000 //暴露当前镜像的3000端口
CMD npm start //当容器启动时执行命令
//然后在app外层 执行命令进行docker对image的编译
// 参数 -t 是指定镜像的名称 . 是指编译的目录 "."表示当前目录
docker build - t dockertest.

//编译镜像完成后,再执行docker run 启动一个刚编译好的容器
//参数 -p 端口映射 当访问本机的3333端口时将映射到docker的3000端口(相当于访问的时候访问3333端口了) -it将容器的shell映射到当前的shell中,在当前执行的shell中执行的命令将会在容器中执行, dockertest是使用镜像的名称 /bin/bash 容器启动后执行的第一个命令,这里启动了bash容器以便执行脚本 -d 后台运行
docker run - p 3333: 3000 - it dockertest / bin / bash
复制代码Reflect && Symbol && ES6模块 && class类
Reflect 反射

和Object一样， 不过返回值会更好。  比如 Object.defineProperty 错误的话会保存 而 Reflect.defineProperty会返回true和false
用Reflect设置和获取obj的值 Reflect.get(obj, 'name')
使用Reflect判断key是否在对象中存在 Reflect.has(zhangsan, 'name')

EventLoop

先执行宏任务, 再执行微任务(因为最先执行的是script脚本中的代码, 而script脚本也是一个宏任务)
UI的渲染和JS的执行是互斥的
每次JS执行主栈完成后都将把微任务进行清空, 然后再从宏任务中取出一个任务进行执行

宏任务

宏任务: script ajax 事件(click) requestFrameAnimation setTimeout setInterval setImmediate(IE的方法) MessageChannel I / O UI rendering
每次只取一个队列中的任务出来执行

微任务

微任务: promise.then MutationObserver process.nextTick
每次当主栈中的任务执行完成后 微任务列表都将被清空

call apply bind new
  call


在Function原型链上加一个call函数， 这个函数给所有函数调用


调用这个函数的时候，把传入的函数体或者window对象赋值给一个内部变量 ctx


在ctx上加一个属性func， 这个属性指向当前的this


以对象调用的形式调用func 这时候this指向ctx 也就是传入的需要绑定的this指向


把ctx.func设为空


简单点来说， 就是把当前那个函数放在传入的context的属性func上, 调用的时候直接调用context.func, 这样调用的时候this就是context这个传入的数据


bind和call apply的区别在于， 它不知道何时才会调用， 而函数是存的内存地址， 在没调用之前如果改了原函数的话， 内存地址不变， 但是值确变了。  所有bind会先把传入的context做深拷贝，最后传入到context.func上


return ctx


Function.prototype.call = function (context) {
  const ctx = context || window
  // 将当前被调用的方法定义在ctx.func上， 为了能以对象调用的形式绑定this
  ctx.func = this

  // 获取实参
  const args = Array.from(arguments).slice(1)

  // 以对象调用的形式调用func 此时this指向ctx 也就是传入的需要绑定的this指向
  const res = arguments.length > 1 ? ctx.func(...args) : ctx.func()

  // 删除该方法， 不然会对传入对象造成污染（添加该方法）
  ctx.func = null
  return res
}
复制代码apply

和call类似 唯一不同的就是传参的方式

Function.prototype.apply = function (context) {
  const ctx = context || window

  // 将当前被调用的方法定义在ctx.func上， 为了能以对象调用的形式绑定this
  ctx.func = this

  // 以对象调用的形式调用func 此时this指向ctx 也就是传入的需要绑定的this指向
  const res = arguments[1] ? ctx.func(...arguments[1]) : ctx.func()

  // 删除该方法， 不然会对传入对象造成污染（添加该方法）
  ctx.func = null
  return res
}
复制代码bind

bind会先对传入参数进行深拷贝
返回一个函数 这个函数内部对this进行了绑定
也就是调用函数的时候会进行绑定


Function.prototype.bind = function (context) {
  // 对context进行深拷贝,防止污染
  const ctx = JSON.parse(JSON.stringify(context)) || window

  // 将当前被调用的方法定义在ctx.func上（为了能以对象调用的形式绑定this）
  ctx.func = this

  // 获取实参
  const args = [...arguments].slice(1)

  // bind 返回一个绑定函数 等待调用
  return function () {
    // 这里 需要注意的一点是需要对bind函数的实参和返回的绑定函数的实参进行合并，调用时传入
    const allArgs = args.concat(Array.from(arguments))
    // 以对象调用的形式调用func，此时this指向ctx 也就是传入的需要绑定的this指向
    return allArgs, length > 0 ? ctx.func(...allArgs) : ctx.func()
  }
}

复制代码new
function myNew(fn) {
  // 创建一个实例对象 o  让构造函数的显示原型指向实例o的隐式原型__proto__
  const o = Object.create(fn.prototype)

  // 获取要实例化的实参
  const args = [...arguments].slice(1)

  // 执行构造函数，并用apply将this指向绑定到实例上
  const res = fn.apply(o, args)

  // 如果是引用类型，返回该引用类型， 否则返回实例
  return ['object', 'function'].includes(typeof res) ? res : o

}
复制代码说说看call apply bind实现原理。

call apply, bind都绑定在函数原型上， 其中call, apply利用传入的参数context 在这个上面新增一个新的属性func，这个属性就是当前调用的函数this 也就是当前执行call, apply的那个函数。 然后获取call, apply之后传入的第一个参数以外的参数。  然后利用在内部生成的一个对象context调用func函数，这时候this就是指向调用者 context ， 这是传入的第一个参数。call, apply为一不同的是传参，一个是单个一个是数组的形式。 call apply是在调用的时候改变了this的指向而bind是返回一个函数(这个函数会把前面传入的第二个和之后的参数和最后调用的参数合并起来) 。已经绑定好了this指向。后面调用的时候this已经改变了。

new 的原理实现

先拿到把传入的函数的prototype 然后获取传入的第二个和之后的参数, 利用apply把this绑定到prototype上传入并且传入其他参数 最后返回绑定好的对象

css
css 实现一个三角形
  .container{
  border: 20px solid transparent;
  border - top - color: red;
  width: 0;
}
复制代码css 再实现一个扇形

这两题考察点是对css的灵活应用以及对各个属性的理解

  .container{
  border: 20px solid transparent;
  border - top - color: red;
  width: 0;
  border - radius: 50 %;
}
复制代码fetch和xhr的理解以及有什么优缺点

fetch利用promise的方式来处理结果和回调而xhr是利用回调的方式
xhr兼容性比fetch更好
xhr可以取消当前发送的请求abort而fetch不能
xhr可以监测事件解决onabort而fetch不能

能不能把xhr封装成promise解决方案
const fetch = (method = 'GET', url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.open(method, url)
  request.onload = function () {
    if (request.status == 200) {
      resolve(request.response)
    } else {
      reject(Error(request.statusText))
    }
  }
  request.onerror = function (e) {
    reject(Error(e))
  }
  request.send()
})
复制代码Promise.all的实现
Promise.all = function (promiseArray) {
  return new Promise((resolve, reject) => {
    let resList = []
    let n = 0
    for (let i = 0; i < promiseArray.length; i++) {
      let fn = (data => { }, err => { }) => { }
      const then = promiseArray[i] ? typeof promiseArray[i].then === 'function' ? promiseArray[i].then : fn : fn
      then(data => {
        resList[i] = data
        if (++n === promiseArray.length) {
          resolve(resList)
        }
      }, reject)
    }
  })
}
复制代码实现

fn(1)
fn(1, 2)
fn(1, 2)(3)
fn(1, 2)(3)(4)  // 10

const curry = fn => {
  const g = (...allArgs) => allArgs.length >= fn.length ?
    fn(...allArgs)
    : (...args) => g(...allArgs, ...args)
  return g
}

const fn = curry((a, b, c, d) => {
  return a + b + c + d
})

复制代码说说看浏览器缓存
强缓存

浏览器缓存分为强缓存和协商缓存，浏览器在请求数据的时候，会先请看强缓存是否命中，然后再走协商缓存
强缓存是Expires和Cache - Control, Cache - Control的优先级更高, 是因为Expires是HTTP / 1.0而Cache - Control是HTTP / 1.1
Expires的参数一个过期时间，浏览器通过这个过期时间判断是否走缓存
Cache - Control的参数是最长时间max - age=1000，就是在多长时间内走缓存
Cache - Control可设置不缓存no - store，是否跳过强缓存no - cache，只有浏览器可缓存代理服务器不可缓存private，和代理服务器缓存时间s - maxage

协商缓存

在没有命中强缓存之后， 浏览器会在请求头中带If - Modified - Since属性最后修改时间或者If - None - Match属性根据内容生成的hash来判断是否命中缓存
If - Modified - Since对应服务器设置返回头Last - Modified
If - None - Match对应服务器设置返回头ETag
ETag的优先级比Last - Modified更高
ETag精度教高，是存的文件内容生成的hash
Last - Modified性能较好， 因为是存最后修改时间, 只能感知秒级别的修改
命中缓存返回304

完整匹配[]{ } ()

[]{ { } }
{ { [()]] } }

const isBalance = str => {
  const obj = [...str].reduce((a, b) => (a[b] = a[b] ? ++a[b] : 1), {})
  return (obj['['] === obj[']'] &&
    obj['{'] === obj['}'] &&
    obj['('] === obj[')'])
}

作者：Eric艾瑞
链接：https://juejin.im/post/5e6d9b7ce51d452728648879
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。