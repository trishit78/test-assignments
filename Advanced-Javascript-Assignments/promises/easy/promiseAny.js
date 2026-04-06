// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {

    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)) return reject(new TypeError("promises not an array"))
        
            let result = []
           // let errResult=[]
            let counter =0;
            if(promises.length === 0 )return reject(new Error("Empty iterable"))
            
            promises.forEach((promise,index)=>{
                Promise.resolve(promise).then((value)=>{
                    return resolve(value)
                })
                .catch((err)=>{
                    result[index] = err;
                    counter++;
                    if(counter === promises.length) return reject(new Error("All promises were rejected"))
                })
            })



    })
}

module.exports = promiseAny;
