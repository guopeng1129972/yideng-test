import lodash from "lodash-es";
// import {isArray} from "lodash-es";
import item from './sync.css';
const  sync =()=>{
    console.log("sync");
    document.getElementById('app').innerHTML='<h1 class="${item.test}" >hello webpack</h1>';
}
const isArray =(args)=>{
    //这里不能tree-shacking的原因是因为调用里scop
    console.log(isArray)
    // console.log(lodash.isArray(args))
    // console.log(isArray(args))
}

export{
    sync,
    isArray
}