<?php
// 测试构造方法和析构方法

class Person  
{
    public function __construct ($name,$age){
        //当这个类new的时候自动执行
        $this-> age=$age;
        $this-> name=$name;
        echo "hello {$name}";
        echo "<hr/>";
    }
    public function data(){
        return $this->age;
    }
    public function __destruct(){
        //用途 可以进行当资源释放的时候操作 比如数据库关闭
        //当这个类不再使用的时候执行，没有代码调用的时候执行
        echo "bye bye {$this->name}";
        echo "<br/>";
    }



}

// new Person(name,age)
new Person("first",10);
new Person("second",20);
// hello first
// bye bye first
// hello second
// bye bye second
//这两种情况的输出还不一样，说明实例化对象如果有多个，先一起声明，再后进先出的退出执行__destruct
// $xiaohong=new Person("first",10);
// $xiaoming=new Person("second",20);
// hello first
// hello second
// bye bye second
// bye bye first

?>