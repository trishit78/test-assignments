// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')
fs.writeFile('output.txt','tell me the data',(err,data)=>{
    if(err){
        throw new Error('new error')
    }
    console.log('data is written')
})