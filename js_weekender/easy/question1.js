function solve(obj){
//   Object.entries(obj).forEach((cat)=>{
//     console.log(cat)
//   })

 const res={}
    for (let i in obj){
        //console.log(i)
        const sum = obj[i].reduce((acc,init)=> acc+init,0)
        //console.log(sum)
        res[i]=sum
    }
    return res

// const arr = Object.entries(obj)
//     arr.forEach(([key,val])=>{
//        // console.log(key)
//         const sum = val.reduce((acc,init)=> acc+init,0)
//         //console.log(sum)
//         res[key]=sum
//     })
//     // console.log(res)
//     return res
}


const obj = {
    food: [10, 20, 30], travel: [5, 15], bills: [40, 60]
}

const ans = solve(obj)

console.log(ans)