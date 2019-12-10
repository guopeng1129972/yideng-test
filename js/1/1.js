function fn(){
    this.i=0;
    setInterval(function(){
        console.log(this.i++)
    }.bind(this),500)
}

fn()
////////**/
var i=1;
function fn(){
    this.i=0;
    setInterval(function(){
        console.log(this.i++)
    },500)
}

fn()

function isNumber(obj){
     return Object.prototype.toString.call(obj)=="[Object Number]";
}

