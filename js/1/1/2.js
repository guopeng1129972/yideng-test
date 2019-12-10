// 借用构造函数 实现继承
// 继承的目的
//     1.得到父类对象的属性
//     2.得到父类对象的方法

// 1如何得到父类的属性？ 借用构造函数
// before
function inherits(child, parent) {
    var _prototype = Object.create(parent._prototype);
    _prototype.constructor = child.prototype.constructor;
    child.prototype = _prototype;
}

function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.getName = function () {
    return this.name;
}

function English(name, age, language) {
    People.call(this, name, age);
    this.language = language;
}

inherits(English, People);
English.prototype.introduce = function () {
    console.log("hi,I am" + this.getName())
    console.log("i can speak" + this.language);
}


// 会存在一个问题就是，子类的方法改编之后，会影响父类

// after

