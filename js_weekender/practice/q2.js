function solve(arr){
    const res = []
    let cnt = 0
    for(let i in arr){
        if(arr[i]==0){
            cnt++
        }else{
            res.push(arr[i])
        }
    }
    for(let i=0;i<cnt;i++){
        res.push(0)
    }
    console.log(res)
}

const arr= [0,1,0,3,12] 
solve(arr)