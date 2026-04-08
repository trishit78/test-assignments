function solve(arr){
    const res={}
    arr.forEach((val) => {
       res[val.id] = val
    });
    console.log(res)

}


const arr =[{ id: 1, name: "A" }, { id: 2, name: "B" }]

solve(arr)