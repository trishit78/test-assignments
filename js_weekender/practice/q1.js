function solve(str){
    const count ={}
    let step=true
    for(let i=0;i<str.length;i++){
        if(count[str[i]]){
            count[str[i]]++
            step=false
            return str[i]
        }
        else{
            count[str[i]]=1
        }
    }
    if(step) return null

}

const str = "abc";
const ans = solve(str)
console.log(ans)