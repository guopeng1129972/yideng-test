<?php

$con = mysqli_connect("localhost", "root", "", "phplesson");
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


//删除数据
// $sql="DELETE FROM `news` WHERE `news`.`newsid` = 3";
// 修改数据
// $sql="UPDATE `news` SET `newscontent` = 'newscontent_789' WHERE `news`.`newsid` = 4;";
$newstitle = $_REQUEST['newstitle'];
$newsimg = $_REQUEST['newsimg'];
$newscontent = $_REQUEST['newscontent'];
$addtime = $_REQUEST['addtime'];
echo $addtime;
//写入数据
$sql = "INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `newstime`)
    VALUES($newstitle, $newsimg, $newscontent,$addtime)";

mysqli_query($con,"set names 'utf8'");
// $result = mysqli_query($con, $sql) or die("Problem with the query");
if ($result) {
    echo "add ok";
} else {
    echo "add nook";
}

