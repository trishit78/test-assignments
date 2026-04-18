function solve(arr){
    const res ={}
    for(let i of arr){
        if(res[i.category]){
            res[i.category]+=i.price
        }else{
            res[i.category]=i.price
        }
    }
    console.log(res)
}

const arr = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

solve(arr)