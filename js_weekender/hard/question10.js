function solve(obj,remove){
   for(let key in obj){
    const val = obj[key]
    if(key==remove){
        delete obj[key]
    }
    else if(typeof val ==="object" && val !==null){
        solve(val,remove)
    }
}
return obj
   
}

const obj = { a: { b: { c: 1, d: 2 } } }
const remove="c"


const ans=solve(obj,remove)
console.log(ans)