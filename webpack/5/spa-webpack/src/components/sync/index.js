import lodash from "lodash-es";
// import {isArray} from "lodash-es";
import item from "./sync.css";
import item2 from "./txt.txt";
const sync =function () {
    console.log("sync");
    console.dir(lodash);
    console.log(item.container);
    console.log(item2.container);
    document.getElementById('app').innerHTML='<h1 class="${item.test}">hello webpack</h1>';   
    // document.getElementById('app').innerHTML='<h2 class="${item2}">hello webpack</h2>';   
}
// const  sync =()=>{
//     console.log("sync");
//     console.log(item);
//     document.getElementById('app').innerHTML='<h1 class="${item.test}">hello webpack</h1>';
// }
const isArrayFun =(args)=>{
    //这里不能tree-shacking的原因是因为调用里scop
    console.log(isArrayFun)
    // console.log(lodash.isArray(args))
    // console.log(isArray(args))
}

export{
    sync,
    isArrayFun
}