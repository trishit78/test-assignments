import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCounter] = useState(0)
  const handleDecrement = ()=>{
    setCounter(prev=>(prev >0 ? prev-1:0))
  }
  return (
    <> 
        <h1>counter {counter}</h1>
        <div className='flex flex-3 gap-9'>
        <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={()=>setCounter(0)}>reset</button>
        </div>
    </>
  )
}

export default App
