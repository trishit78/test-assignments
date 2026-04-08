function solve(obj){
    let val = true
    for(let i in obj){
        //console.log(typeof obj[i])
        if(typeof obj[i]==="string"){
            val=false
        }
    }
    return val
}

const obj = { a: 1, b: "9", c: 3 }
console.log(solve(obj))