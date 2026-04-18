function solve(obj){
    const ans = obj.user.profile.name
    const ans2 = obj.user.profile.age
    console.log(ans)
    console.log(ans2)
}

const obj = { user: { profile: { name: "Alice", age: 25 } } }

solve(obj)