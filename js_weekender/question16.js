function solve(arr){
    const res ={}
    let oddcnt=0;
    let evencnt=0
    for(let i of arr){
        if(i%2==0){
            evencnt++    
        }else{
         oddcnt++
        }
    }
    res['even']=evencnt
    res['odd']=oddcnt
    console.log(res)
}


const arr = [1,2,3,4,5,8,6]

solve(arr)