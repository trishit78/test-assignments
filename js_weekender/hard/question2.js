function solve(arr){
    const res={}
    // for(let obj of arr){
    //     //console.log(obj.id)
    //     res[obj.id]=obj.name
    // }
    console.log(arr.reduce((acc,obj)=>{
        acc[obj.id]=obj.name
        return acc   
    },{}))
   // console.log(res)
}

const arr =[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

solve(arr)