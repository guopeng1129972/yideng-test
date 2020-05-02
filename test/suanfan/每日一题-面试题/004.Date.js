
/*
时间：  2020年05月02日11:47:33
题目：  请判断输出的date是否相等
*/

var yi = new Date('2020-04-30'),
  deng = new Date(2020, 04, 30);
[yi.getDay() === deng.getDay(), yi.getMonth() === deng.getMonth()]



/*
我的：    [true,true]
分析：
我想着是这个date对象下面有4种设置值得方法，
那么prototype的属性方法应该是一样的，
返回的值应该也是一样的
实际结果: [false,false]
真实的：MDN: Date 对象则基于 Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。
也就是说 不是同一个时刻的时间，它的值就不一样了，跟他传入啥参数没啥关系

重点：
*/
