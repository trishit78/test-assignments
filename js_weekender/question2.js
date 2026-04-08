function solve(arr){
    const res = {}
    for(let i of arr){
       // console.log(res[i])
        if(res[i]){
            res[i]++
        }
else{
    res[i]=1

}
    }
    //console.log(res)
    return res
}

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"]
const ans = solve(arr)

// for(let i in ans){
//     if(ans[i]>1){
//         console.log('repeat',i)
//     }
// }

console.log(ans)