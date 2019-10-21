<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>

<body>
    <form action="a.php" method='post'>
        <label for="username">username:</label><input type="text" name="username" id="username"/>
        <label for="password">password:</label><input type="text" name="password" id="password"/>
        <input type='submit' value='提交' id='submit'/>
    </form>
    <script type='text/javascript'>


$("#submit").click(function(e){
    e.preventDefault();
    // alert(1);
        $.ajax({
            url:"a.php",

            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                // window.open(data);
                alert(data);
                },
        })
  });
    </script>

</body>

</html>