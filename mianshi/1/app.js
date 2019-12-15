function a(name) {
    console.log("this name is"+name);
}


function pro(b, a) {
    var _prototype = Object.ccreate(a.prototype);
    _prototype.constructor =a.prototype.constructor;
    b.prototype=_prototype;
}

new a1=a('bab');
new b1;
pro(b1,a);