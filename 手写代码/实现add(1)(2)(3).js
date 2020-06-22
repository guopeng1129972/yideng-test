//闭包
function add(a) {
  var sum = function (b) {
    return add(a + b)
  }
  sum.toString = function () {
    return a
  }
  return sum
};
add(1)(2)(3)

//柯里化

function add2(...arg) {
  var a = [...arg];
  _add = function (...innerArg) {
    if (innerArg.length === 0) {
      return a.reduce(function (a, b) {
        return a + b
      })
    } else {
      [].push.apply(a, innerArg)
      return _add;
    }
  }
  return _add
}

add2(1)(2)(3)()
// 6
