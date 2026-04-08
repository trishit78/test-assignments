function solve(obj){
    const res = {}
    for(let i in obj){
        //console.log(i)
        if(obj[i]>50){
            res[i]=obj[i]
        }
    }
    console.log(res)
}



const obj = { a: 20, b: 60, c: 40, d: 90 }

solve(obj)