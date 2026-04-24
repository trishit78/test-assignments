/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

const App = () => {
  
    const [chips,setChips] = useState<string[]>([])
    const [inputVal,setInputVal] = useState('')
    const handleEnter= (event:any)=>{
        if(event.key === "Enter" && inputVal.trim() !== ""){
            setChips((prev)=>[...prev,inputVal])
            setInputVal('');
            (event.target as HTMLInputElement).value = ""
        }
    }

    const handleClick = (id:any)=>{
        console.log('helo',id)
        
        setChips((prev)=> prev.filter((_,i)=> i!==id))
    }

    return (
    <div className='flex flex-col items-center justify-center'>

        <h2>Chips Input</h2>
        <input type="text" placeholder='Enter the chips' className='border border-black m-2 p-2 h-10 w-[20rem]' 
        onChange = {(e)=>setInputVal(e.target.value)}
        onKeyDown={handleEnter}
        />
        {
            chips.map((chip,index)=>(
                
            <div key={index} className='flex flex-row gap-4 bg-gray-400 rounded p-4 font-bold'>
                <p>{chip}</p>
                <span onClick={()=>handleClick(index)} className='cursor-pointer'>❌ </span>
            </div>
            ))
        }

    </div>
  )
}

export default App