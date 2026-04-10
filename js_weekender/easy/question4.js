function solve(obj){
    let num=0
    for(let i in obj){
        if(obj[i]>num){
            num = obj[i]
        }
    }
    for(let i in obj){
        if(obj[i]===num) return i
    }
    //console.log(num)
}


const obj = { a: 10, b: 50, c: 20 }

const ans =solve(obj)
console.log(ans)