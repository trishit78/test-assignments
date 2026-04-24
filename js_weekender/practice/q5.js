function solve(str){
    const set = new Set()
    for(let i in str){
        set.add(str.charAt(i))
    }
    let ans =""
    for(let val of set){
        ans+=val
    }

    console.log(ans)
}

const str = "programming"
solve(str)