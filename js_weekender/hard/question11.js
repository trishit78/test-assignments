// function solve(obj1,obj2){
//     const a = JSON.stringify(obj1)
//     console.log(a)
//     const b = JSON.stringify(obj2)
//     console.log(b)
    
//     return JSON.stringify(obj1)===JSON.stringify(obj2)
// }



function solve(obj1,obj2){
    if(obj1===obj2)return true

    if(obj1 === null || typeof obj1 !=="object" || obj2 === null || typeof obj2 !=="object" ){
        return false
    }
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)
    if(key1.length !== key2.length) return false

    for(let key of key1){
        if(!key2.includes(key) || !solve(obj1[key],obj2[key])){
            return false
        }
    }
    return true
}

const obj1 = { a: { x: 1, y: 2 } }
const obj2= { a: { x: 1, y: 2 } }

const ans = solve(obj1,obj2)
console.log(ans)
