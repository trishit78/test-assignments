function solve(arr){
      arr.sort((a,b)=>{
        const nameSort = a.name.localeCompare(b.name)
        return nameSort|| (b.age-a.age) 
       // return nameSort
    })
    //console.log(arr)
    return arr

        
}

const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]

console.log(solve(arr))
//console.log(ans)