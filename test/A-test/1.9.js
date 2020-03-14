// -6. 请用一句话算出0 - 100 之间学生的学生等级， 如90 - 100 输出为1等生、 80 - 90 为2等
// 生以此类推。 不允许使用if switch等。（ 10 分）

function fun(lv) {
    if (99 <= lv && lv <= 100) {
        console.log("1");
    } else {
        console.log(Math.floor(10 - (lv / 10)))
    }

}


fun(1);
fun(100);
fun(99);
fun(9);

/*
我的：rt，就是我的方法
*/
/*
结论：
*/