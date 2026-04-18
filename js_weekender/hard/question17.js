function solve(obj,n){
    const sortVal = Object.entries(obj).sort(([,a],[,b])=> b-a)
   
    const ans=[]
    for(let i=0;i<n;i++){
        ans.push(sortVal[i][0])
    }
    console.log(ans)
   
}

const obj= { a: 10, b: 50, c: 30, d: 40 }
const n=2

solve(obj,n)