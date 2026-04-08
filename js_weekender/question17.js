function solve(obj1,obj2){
    const res =[]
    for(let i in obj1){
        if(i in obj2){
            res.push(i)
        }
    }
    console.log(res)
}



const obj1 ={ a: 1, b: 2, c: 3 }


const obj2 = { b: 4, c: 5, d: 6 }

solve(obj1,obj2)