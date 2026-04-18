function solve(expected,actual){
    const ans ={}
    for(let key of expected){
        if(!actual.includes(key))
        {
           ans['missing'] = [key]
        }
    }
    for(let key of actual){
        if(!expected.includes(key)){
            ans['extra']=[key]
        }
    }
    console.log(ans)
}


const expected = ["a","b","c"]
const actual = ["b","c","d"]

solve(expected,actual)