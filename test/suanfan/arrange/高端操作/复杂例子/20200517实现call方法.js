function myCall(context) {
  var context = context | window;
  context.fn = this;
  var arg = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');

  }
  var result = eval('context.fn(' + arg + ')')
  delete context.fn()
  return result
}

function myApplay(context, arr) {
  var context = Object(context) | window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn()
  } else {
    var args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}