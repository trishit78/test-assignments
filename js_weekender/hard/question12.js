function solve(obj){
    let res = {}
    for(let key in obj){
        if(Array.isArray(obj[key])){
            res[key] = obj[key].flat(Infinity)
        }else{
            res[key] = obj[key]

        }
    }
    //console.log(res)
    return res
}


const obj = { a: [1, [2, [3]]], b: [4, [5]] }

const ans = solve(obj)
console.log(ans)