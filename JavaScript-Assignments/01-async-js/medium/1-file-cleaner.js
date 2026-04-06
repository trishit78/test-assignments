// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs')
fs.readFile('input.txt',(err,data)=>{
    if(err){
        throw new Error(err)
    }
    const word = data.toString().trim().split(' ').filter((word)=> word!=='').join(' ')

    fs.writeFile('input.txt',word,(err,data)=>{
         if(err){
        throw new Error(err)
    }
    console.log('output done')   
    })
})