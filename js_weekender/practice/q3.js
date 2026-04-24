function solve(arr1,arr2){
    for(let i =0;i<arr2.length;i++){
        if(arr1[i]!== arr2[i]) return false
    }
    return true
}

const arr1 = [1,2,3]
const arr2 = [1,3,2]

const ans = solve(arr1,arr2)
console.log(ans)