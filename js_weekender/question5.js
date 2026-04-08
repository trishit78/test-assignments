function solve(obj){
    const res = []
    for(let key in obj){
        //console.log(key)
        //console.log(obj[key])
        obj[key].map((val)=> res.push(val))
    }
    console.log(res)
    return res
}





const obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

solve(obj)