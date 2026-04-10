function solve(obj){
    const res = {}
    for(let i in obj){
       // console.log(i)
        //console.log(obj[i])
        let sum = obj[i].reduce((acc,init)=>acc+init,0)
        res[i] = sum/obj[i].length    
    }
    let ans;
    let maxVal = -Infinity

    for(let [key,val] of Object.entries(res)){
        if(val>maxVal){
            maxVal=val
            ans=key
        }
    }
    console.log(ans)
    //console.log(res)
    //console.log(ans)
}


const obj = { A: [80, 90], B: [70, 75, 85] }

solve(obj)