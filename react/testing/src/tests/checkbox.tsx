




import React, { useState } from 'react'


const CheckboxList = () => {
	const [checkboxes,setCheckboxes] = useState([
		{ id: 1, label: 'Dogs', checked: false },
		{ id: 2, label: 'Cats', checked: false },
		{ id: 3, label: 'Cows', checked: false },
		{ id: 4, label: 'Deers', checked: false },
	])

  const handleClick =()=>{
   setCheckboxes((prev)=>prev.map((check)=>({...check,checked:!check.checked})))
  }
  const handleClickBox = (id:number)=>{
   // console.log(id)
    setCheckboxes((prev)=>prev.map((check)=> check.id === id  ? ({...check,checked:!check.checked}) : check))
  }

	return (
		<div>
			<div data-testid="checkbox-container">
				{checkboxes.map((checkbox, index) => (
					<div key={checkbox.id} >
						<input
							data-testid={`checkbox-${index + 1}`}
							type="checkbox"
							checked={checkbox.checked}
               onClick={()=>handleClickBox(checkbox.id)}
						/>
						{checkbox.label}
					</div>
				))}
			</div>
			<button className='bg-blue-400 p-2'   onClick={()=>handleClick()}>Select All</button>
		</div>
	)
}

export default CheckboxList
