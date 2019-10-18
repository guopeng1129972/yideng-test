/*
题目
 
*/
function C1(name) {
    if (name) this.name = name;
}

function C2(name) {
    this.name = name;
}

function C3(name) {
    this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));

/*
我的见解
function C1(name) {
    if (name) this.name = name;
}

function C2(name) {
    this.name = name;
}

function C3(name) {
    this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));
   
*/
/*
实际输出结果

 标准结论
 1.原型链上的方法优先级最低，如果有属性就会覆盖原有的
 2.当给一个函数中传入undefined的时候，undefined是有意义的
*/