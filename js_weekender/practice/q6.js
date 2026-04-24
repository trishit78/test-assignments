function solve(arr){
    const sum = arr.reduce((acc,init)=> acc+init,0)
    const n = arr[arr.length-1]
    const actaulSum  = n*(n+1)/2
    console.log(actaulSum-sum)
}

const arr = [1,2,4,5]

solve(arr)