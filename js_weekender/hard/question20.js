function solve(obj1,obj2){
    const res = {...obj1}

    for(let key in obj2){
        if(res[key]){
            res[key] = obj2[key]
        }
        else{
            res[key] = obj2[key]
        }
    }
    console.log(res)
}

const obj1= { a: 10, b: 20 }
const obj2= { a: 5, c: 15 }


solve(obj1,obj2)
