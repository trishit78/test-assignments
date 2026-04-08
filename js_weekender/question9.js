function solve(obj){
    const set = new Set()
    for(let i in obj){
        //console.log(i)
        //console.log(obj[i])
        obj[i].map((val)=> set.add(val))
        
       // set.add()
    }
   // console.log(set)

    let ans=[]
    for(let i of set){
        //console.log(i)
        ans.push(i)
    }
    console.log(ans)
}


const obj ={ x: [1,2,3], y: [2,3,4], z: [4,5] }

solve(obj)
