function solve(obj){
    
   return Object.entries(obj).map(([key,val])=>
    `${key}=${encodeURIComponent(val)}`
   ).join('&')

   //console.log(res)
}

const obj = { name: "Alice", age: 25 }

const ans = solve(obj)
console.log(ans)