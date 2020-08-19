vue-hot-load-api 干了什么？

第一步需要调用install方法，传入 Vue 构造函数，根据注释来看，这一步是要知道这个库与 Vue 版本之间是否兼容。
// make the API aware of the Vue that you are using.
// also checks compatibility.
api.install(Vue);

接下来的这段注释告诉我们，每个需要热更新的组件选项对象，
我们都需要为它建立一个独一无二的 id，并且这段代码需要在初始化的时候完成。
if (初始化) {
  // for each component option object to be hot-reloaded,
  // you need to create a record for it with a unique id.
  // do this once on startup.
  api.createRecord('very-unique-id', myComponentOptions);
}

最后就是激动人心的热更新时间了，
根据注释来看，这个库的使用分为两种情况。

1.rerender 只有 template 或者 render 函改变的情况下使用。
2.reload 如果 template 或者 render 未改变，
则这个函数需要调用 reload 方法先销毁然后重新创建（包括它的子组件）。

// if a component has only its template or render function changed,
// you can force a re-render for all its active instances without
// destroying/re-creating them. This keeps all current app state intact.
api.rerender('very-unique-id', myComponentOptions);

// --- OR ---

// if a component has non-template/render options changed,
// it needs to be fully reloaded. This will destroy and re-create all its
// active instances (and their children).
api.reload('very-unique-id', myComponentOptions);

从这个简单的示例里面可以看出，这个库的核心流程就是：

api.install 检测兼容性。
api.createRecord 为组件对象通过一个独一无二的 id 建立一个记录。
api.rerender 或api.reload 进行组件的热更新。

