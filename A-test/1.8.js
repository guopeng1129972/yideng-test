// 5.请写出代码执行结果，并解释为什么？（5分）
function yideng() {
    console.log(1);
}
(function () {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }
    yideng();
})();
/*
结论：
1.肯定不能是2，走false，如果走了false，这语言就没法用了
2.1 具体还是要看浏览器版本
*/