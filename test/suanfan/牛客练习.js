/*  
https://www.cnblogs.com/Yfling/p/6656939.html
本次牛客的练习题
https://ac.nowcoder.com/acm/contest/320#question
*/
/* 官网给的用例 */
while (line = readline()) {
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a + b);
}
/*  求a+b3 */
while (line = readline()) {
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  var sum = a + b;
  if (sum) {
    print(a + b);
  }
}
/* a+b4 */
while (line = readline()) {
  var lines = line.split(' ').map(Number);
  var sum = 0;
  for (var i = 1; i < lines.length; i++) {
    sum += lines[i]
  }
  if (sum) {
    print(sum);
  }
}
// a+b5
while (line = readline()) {
  if (line.length > 1) {
    var lines = line.split(' ').map(Number);
    var sum = 0;
    for (var i = 1; i < lines.length; i++) {
      sum += lines[i]
    }
    if (sum) {
      print(sum);
    }
  }
}
// a+b6
while (line = readline()) {
  var lines = line.split(' ').map(Number);
  var sum = 0;
  for (var i = 1; i < lines.length; i++) {
    sum += lines[i]
  }
  if (sum) {
    print(sum);
  }
}


