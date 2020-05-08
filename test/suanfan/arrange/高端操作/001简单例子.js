/* 
001.优化for循环 
    我第一次见到 是在华为内网上一个人发出来的，看能不能再优化下，
    我感觉他这样已经很好了，就记了下来
说明：就是每次循环成为2（或者别的），然后每次循环都写2（或者别的）遍，
*/
{
  let arr = [1, 2, 3];
  for (let i = 0; i < arr.length; i += 2) {
    let a = i, b = i + 1;
    console.log(a);
    console.log(b);
  }
}
/* 
002.reduce reduceRight 的应用
原理：
*/
{
  let arr = [1, 2, 3];
  console.log(arr.reduce(function (a, b) { return a + b }))
  // es6描述
  console.log(arr.reduce((a, b) => { return a + b }))
}