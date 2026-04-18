function solve(arr){
    const res= {}
    for(let obj of arr){
       // console.log(obj.user)
        if(res[obj.user]){
            res[obj.user]+=obj.amount
        }
        else{
            res[obj.user] = obj.amount
        }
    }
    console.log(res)
}


const arr = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

solve(arr)