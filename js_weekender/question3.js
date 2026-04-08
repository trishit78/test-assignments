function solve(obj){
    const res = {}
    for(let i in obj){
        res[obj[i]]=i
    }
    console.log(res)
    return res
}




const obj = { a: "x", b: "y", c: "z" }

solve(obj)