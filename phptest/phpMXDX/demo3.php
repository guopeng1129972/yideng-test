<?php
    class Persion  
    {   
        // public private protected 公有的 私有的 受保护的

        private $age=20;
        public $name="wang";
        protected $money=100;

        public function getName(){
            return $this->name;
        }
        private function getAge(){
            return $this->age;
        }
        protected function getMoney(){
            return $this->money;
        }
        public function userCard(){
   
            echo $this->getAge();
            echo $this->getName();
            echo $this->getMoney();
            echo $this->getAge();
        }
        // __set($key,$value) __get($key) 
        // 魔术方法只针对受保护数据 protected private

        public function __set($key,$value){
            // echo $key;
            // echo $value;
            if($key=="name" && $value == "laowang"){
                $this->name="xiaowang";
            }
        }
        public function __get($key){
            // echo $key;
            if($key=="age"){
                return "age is not tall you ,noob";
            }
    }
}
    
$lw=new Persion();
// $lw->age=20;
// $lw->money=200;
// $lw->name="laowang";
// $lw->userCard();
echo $lw->age;


?>  