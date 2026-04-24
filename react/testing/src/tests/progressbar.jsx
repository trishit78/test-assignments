import React from 'react'

const App = () => {
  const currentValue=20;
  const maxVal = 100
  return (
    <div>
      <progress className='h-[20px] w-100 rounded-md'  value={currentValue} max={maxVal}  />

    </div>
  )
}

export default App

