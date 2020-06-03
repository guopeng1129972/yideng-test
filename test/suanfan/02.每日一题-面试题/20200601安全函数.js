/* 请完成一个函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回undefined */
var data = { a: { b: { c: 'yideng' } } };
const safeGet = (o, path) => {
  try {
    return path.split('.').reduce((o, k) => o[k], o)
  } catch (e) {
    return undefined
  }
}
console.log(safeGet(data, 'a.b.c.d'));//undefind
console.log(safeGet(data, 'a.b.c'));//yideng
console.log(safeGet(data, 'a.b.c.d.f.g'));//undefind