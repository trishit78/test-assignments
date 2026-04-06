// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function Clock(){
    const time =new Date().toLocaleString('en-GB').split(',')[1]
    const time2 = new Date().toLocaleString('en-GB',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:true
    })
    console.log(time)
    console.log('12 hours: ',time2)
}

setInterval(Clock,1000)
//console.log(new Date().toLocaleString('en-GB').split(',')[1])
