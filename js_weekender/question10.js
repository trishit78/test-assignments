function solve(obj,arr){
    const res={}
    for(let key of arr){
        if(key in obj){
            //console.log(key)
            //console.log(obj[key])
            res[key] = obj[key]
        }
    }
    console.log(res)
}



const obj = { name: "Rahul", age: 23, city: "Noida" }
const arr =["name","city"]

solve(obj,arr)