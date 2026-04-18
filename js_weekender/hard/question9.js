function solve(arr){
    let res={}
    for(let i=0;i<arr.length;i++){
        if(res[arr[i].category]){
            res[arr[i].category].push(arr[i].id)
        }else{
            res[arr[i].category]=[arr[i].id]
        }

    }
    console.log(res)
}


const arr = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]


solve(arr)