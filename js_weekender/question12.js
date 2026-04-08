function solve(obj){
   // console.log(Object.entries(obj))
    return Object.entries(obj).sort((a,b)=> a[1]-b[1])
    //    .forEach((val)=>{
//         console.log(val)
//     })
}


const obj = { a: 3, b: 1, c: 2 }

const ans = solve(obj)
console.log(ans)