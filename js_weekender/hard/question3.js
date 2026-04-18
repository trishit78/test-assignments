function solve(obj){
    const res ={}
   for(let key in obj){  
    if(obj[key]){
        res[key]=obj[key]
    }
   }
   console.log(res)
}

const obj = { a: 0, b: null, c: "hello", d: undefined, e: 5 }

solve(obj)