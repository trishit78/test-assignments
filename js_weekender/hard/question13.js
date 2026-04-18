function solve(obj){
    let res={}
    let ans =''
    for(let key in obj){
        obj[key].map((val)=>{
             if(res[val]){
            res[val]++
        }else{
            res[val] = 1
        }
        })
    }
    let maxi=0
    for(let key in res){
        if(res[key]>maxi){
            maxi = res[key]
     
            ans=key
        }
    }
    //console.log('last',maxi)
    console.log(ans)
}


const obj = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }

solve(obj)