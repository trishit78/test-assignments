function solve(roles,checkRole,action){
    for(let key in roles){
        if(key===checkRole){
            if(roles[key].includes(action)){
                //console.log('hi',action)
                return true
            }
        }
        //console.log(roles[i])
    }
    return false
}


const roles={ admin:["read","write"], user:["read"], staff: ["write"]}
const checkRole="staff"
const action="write"

const ans = solve(roles,checkRole,action)
console.log(ans)