function solve(arr){
    const res={}
    for(let obj of arr){
       // console.log(obj.name)
       // console.log(obj.city)
       let city =obj.city
       let name = obj.name 
        if(res[city]){
            res[city].push(name)
        }else{
            res[city] = [name]
        }
    }
    console.log(res)
}



const arr = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

solve(arr)