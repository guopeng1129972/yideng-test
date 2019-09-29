/*
   - 3.请写出如下点击li的输出值，并用三种办法正确输出li里的数字。(12分)
 <ul>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 </ul>
 <script type="text/javascript">
 var list_li = document.getElementsByTagName("li");
 for (var i = 0; i < list_li.length; i++) {
 list_li[i].onclick = function() {
 console.log(i);
 }
 }
 </script>
答：
*/

var list_li = document.getElementsByTagName("li");
for (var i = 0; i < list_li.length; i++) {
    list_li[i].onclick = function () {
        console.log(i);


    }
}
/*
        console.log(list_li[i].innerHTML);
        console.log(list_li[i].innerText);
        i 定义变为let 定义

*/