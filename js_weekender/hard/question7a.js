function solve(obj){
    const size={}
    for(let i in obj){
        const s = obj[i].length
       // console.log(s)
        size[obj[i]]=s
    }
    let maxi=0
    let ans=""
    for(let i in size){
        if(size[i]>maxi){
            maxi=size[i]
            ans=i
        }
    }
    console.log(ans)
}

const obj = { a: "apple", b: "banana", c: "kiwi" }

solve(obj)