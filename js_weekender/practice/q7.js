function solve(str){
    
    const words = str.split(" ")
    const upper = words.map((word)=> word[0].toUpperCase()+word.slice(1))
    return upper.join(" ")

}

const str = "hello world new"

const ans  = solve(str)
console.log(ans)