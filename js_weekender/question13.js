function solve(obj){
    let cnt=0;
    for(let i in obj){
        cnt++;
        //console.log(i)
    }
    return cnt
}

const obj = { a: 1, b: 2, c: 3 }

const ans = solve(obj)
console.log(ans)