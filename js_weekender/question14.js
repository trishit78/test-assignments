function captalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}



function solve(obj){
    const res ={}

    for(let i in obj){
        res[i] = captalize(obj[i])
    }
    return res
}

const obj = { name: "alice", city: "delhi" }

const ans = solve(obj)
console.log(ans)