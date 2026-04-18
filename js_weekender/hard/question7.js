function solve(obj,size){
    const arr =  Object.entries(obj)
    //console.log(arr)
    let ans=[]
    let count=0
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(arr[i])
        count++
        if(count==size){
            ans.push(res)
            res=[]
            count=0
        }
    }
    if(res.length>0){
        ans.push(res)
    }
    console.log(ans)
    
}

const obj = { a: 1, b: 2, c: 3, d: 4 ,e:5}
const size=2

solve(obj,size)