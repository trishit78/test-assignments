function solve(obj){
const arr = Object.values(obj)
//console.log(arr)

    let result = arr[0]
    for(let i=1;i<arr.length;i++){
        result = result.filter(x=> arr[i].includes(x))
    }
    console.log(result)
}


const obj = { a: [1,2,3], b: [2,3,4], c: [3,4,5] }

solve(obj)
