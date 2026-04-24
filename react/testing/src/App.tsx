import React, { useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const checkPasswordStrength = (password:string)=>{
	const ans = [password.length>8 ,
	/[A-Z]/.test(password),
	/[a-z]/.test(password),
	/[0-9]/.test(password),
	/[^A-Za-z0-9]/.test(password), ]
const res = ans.filter(Boolean).length
		//console.log(res)
	if(res==1) return "Level 1"
	else if (res==2 || res==3) return "Level 2"
	else if (res==4 || res==5) return "Level 3"
	else return "Weak Password"
	
	
	
}

const App = () => {
	
	const [password,setPassword] = useState('')
	const [show,setShow]=useState('')
	const handleClick = ()=>{
		setShow(checkPasswordStrength(password))
		
	}

	return (
	<div>
		<h1>Password strength Checker</h1>
		<input type="text" name="password" id="password"
			value={password}
			onChange={(e)=> setPassword(e.target.value)}
		/>
		<button
		onClick={handleClick}
		>submit</button>

		<p>{show}</p>
	</div>
  )
}

export default App