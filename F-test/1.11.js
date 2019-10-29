// 10.请写出如下输出值，并解释为什么。(12分)
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
    var pusher = {
            value: "item" + i
        },
        tmp;
    if (i !== 2) {
        tmp = []
        pusher.children = tmp
    }
    arr.push(pusher);
    arr = tmp;
}
console.log(s[0]);

/*
我的：
pusher.children 不知道咋用的
i = 0 的时候第一步就是undefined 全局变量，

*/
/*
结论：
*/