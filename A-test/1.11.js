// - 8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
// 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
// Cruze买给了小王价格是14万。（20分）
"use strict"

function Car(color) {
    console.log("XXX");
    this.color = color;
}
Car.myname = "bie mo wo";
Car.prototype.x = function () {}

function BWM(color) {
    Car.call(this, color);
}

BWM.prototype = Object.create(Car.prototype, {
    constructor: {
        value: BWM,
        writable: false
    },
    test: {
        value: function () {}
    }
})
// BWM.prototype.constructor =function(){};
console.log("🍊", BWM.prototype.constructor);

var staticKeys = Object.entries(Car);
for (let i = 0; i < staticKeys.length; i++) {
    // console.log("🍊",staticKeys[i]);
    var key = staticKeys[i][0];
    var value = staticKeys[i][1];
    BWM[key] = value;
}


var bmw = new BWM();

console.log(bwm);
console.log(BWM.myname);