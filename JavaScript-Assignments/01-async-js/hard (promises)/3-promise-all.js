/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

async function wait1(t) {
    let p = new Promise((res)=>{
        setTimeout(()=>{
            res()
        },t*1000)
    })
    return p

}

async function wait2(t) {
    let p = new Promise((res)=>{
        setTimeout(()=>{
            res()
        },t*1000)
    })
    return p

}

async function wait3(t) {
    let p = new Promise((res)=>{
        setTimeout(()=>{
            res()
        },t*1000)
    })
    return p

}

async function calculateTime(t1, t2, t3) {
    const start = Date.now()
    const p= wait1(t1)
    const p2=wait2(t2)
    const p3 = wait3(t3)

   await Promise.all([p,p2,p3])

    const end = Date.now()
    return end-start

}
//calculateTime(2,4,5)
module.exports = calculateTime;
