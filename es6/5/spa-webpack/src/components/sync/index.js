import lodash from "lodash-es";
// import {isArray} from "lodash-es";

const  sync =()=>{
    console.log("sync");
}
const isArray =(args)=>{
    console.log(isArray)
    // console.log(lodash.isArray(args))
    // console.log(isArray(args))
}

export{
    sync,
    isArray
}