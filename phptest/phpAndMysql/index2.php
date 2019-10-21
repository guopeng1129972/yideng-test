<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>

<body>
    <form action="a.php" method='get'>
        <label for="username">username:</label><input type="text" name="username" id="username">
        <label for="password">password:</label><input type="text" name="password" id="password">
        <button type='submit' id='submit'>提交</button>
    </form>
    <script>
    $('#submit').click=function(e){
        e.preventDefult();
        alert(1);
    }
    </script>


    <?php
    // require_once('a.php');  
    // include_once('a.php');
if (false) {
    echo $a;
}
    
if(isset($a)){
    echo "shengming le1";
}else {
    echo "wei shengming";
}

// 不能输出
$b="我声明了";
function test(){
    // echo $b;
    global $c;
    echo $c;
}
// test($c);
$arrtest = array('0' => "cai",'1' => "xu",'2' => "kun" );
echo json_encode($arrtest);
?>
</body>

</html>