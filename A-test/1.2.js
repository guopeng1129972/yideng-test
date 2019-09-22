/*
题目2
 
*/

var x = 1,
    y = 0,
    z = 0;

function add(x) {
    return (x = x + 1);
}
y = add(x);
console.log(y)

function add(x) {
    return (x = x + 3);
}
z = add(x);
console.log(z)



/*
我的见解
    同样的，这个也属于函数优先声明，所以赋值也会在后面，
   var x = 1, 定义并赋值三个变量
    y = 0,
    z = 0;

function add(x) {   定义函数 add 
    return (x = x + 1);
}
y = add(x); 将函数挂在y变量，这个在初始化变量之前
console.log(y) 我觉得这边应该先输出的结果是 add function 

function add(x) { 再一次重写了add function
    return (x = x + 3); 
}
z = add(x);   这次 将函数挂在z变量，这个在初始化变量之前
console.log(z) 这边也会输出 add function

赋值的时候我以为 y z 都是全局变量赋值的那种，，，，
其实是连续附了三个值，
看错了但是结果跟我以为的，还是差很多的，还是不对
        那么从结果上来看，这个问题也不难理解，重写了add function 之后
        ，将第二次的函数重写了第一次的，执行之前都是调用的最后一个的结
        果
*/
/*
实际输出结果
 4 4 undefind
 标准结论

*/