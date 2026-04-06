// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises))
            return reject(new TypeError("promises is not an array"))

        let result=[]
        let counter=0;
        if(promises.length ==0) return resolve(result)

        promises.forEach((promise,index)=>{
            Promise.resolve(promise)
            .then((value)=>{
                result[index]=value
                counter++;
                if(counter === promises.length) return resolve(result)
            })
            .catch((err)=>{
                return reject(err)
            })
        })
        

    })
}

// const p1 = Promise.reject("5")
// const p2=9
// promiseAll([p1,p2]).then((val)=> console.log(val))


module.exports = promiseAll;
