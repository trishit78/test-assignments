function solve(arr){
    const res =[]
    for(let i of arr){
        //console.log(i)
        console.log(i.id)
        console.log('res',res[i.id])
        if(i.id!==res[i.id]){
            res.push(i)
            console.log(res)
        }
    }
   // console.log(res)
}

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

solve(arr)