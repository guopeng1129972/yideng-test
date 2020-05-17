var yidenga = Function.length;
var yidengb = new Function.length
console.log(yidenga === yidengb)

/*
length 是函数对象的一个属性值，
指该函数有多少个必须要传入的参数，即形参的个数。
形参的数量不包括剩余参数个数，
仅包括第一个具有默认值之前的参数个数。
Function 构造器本身也是个Function。
他的 length 属性值为 1 。
该属性 Writable: false, Enumerable: false,
 Configurable: true.
 Function原型对象的 length 属性值为 0 。
 */