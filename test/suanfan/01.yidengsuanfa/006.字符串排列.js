/*
时间：2020年05月06日22:59:32
题目：输入一个字符串,按字典序打印出该字符串字符的所有排列。
例如 输入abc 输出abc,acb,bac,bca,cab,cba
思路：
使用回溯法。
* 记录一个字符（temp），用于存储当前需要进入的排列的字符
* 记录一个字符（current），用于记录当前已经排列好的字符
* 记录一个队列（queue），用于存储还未被排列的字符
1.每次排列将temp添加到current
2.如果queue为空，则本次排列完成，将curret加入到结果数组中，结束递归
  如果queue不为空，说明还有未排列的字符
3.递归排列queue中剩余的字符

为了不影响后续排列，每次递归成功，将当前递归的字符temp加回队列
*/

/*
我的结果：
分析：
实际结果：

重点：
*/