function solve(obj1,obj2){
    const res = {...obj1}

    for(let key in obj2){
        const val1 = res[key]
        const val2 = obj2[key]
        if( typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null ){
            res[key]= solve(val1,val2)
        }
        else{
            res[key] = obj2[key]
        }
    }
    return res

}

const obj1 = { a: { x: 1, y: 2 } }
const obj2 = { a: { y: 3, z: 4 } }

const ans =solve(obj1,obj2)
console.log(ans)