import { useState } from "react"


const SignUpForm = () => {
    const [firstName,setFirstName] = useState('')
    const [firstNameError,setFirstNameError] = useState('')
    
    const [lastName,setLastName] = useState('')
    const [lastNameError,setLastNameError] = useState('')
    
    const [email,setEmail] = useState('')
    const [emailError,setEmailError] = useState('')
    
    const [password,setPassword] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [confirmPasswordError,setConfirmPasswordError] = useState('')

    const [error,setError] = useState(true)
    const EmailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e:any) => {
        e.preventDefault()

        if(firstName.trim()===''){
            setError(false)
            setFirstNameError("First name cannot be empty")
        }
        if(lastName.trim()==='')
            {
            setError(false)
            setLastNameError("Last name cannot be empty")
        }

        if(!EmailRegex.test(email))
            {
            setError(false)
            setEmailError("Invalid email address")
        }

        if( password.length<8)
            {
            setError(false)
            setPasswordError('Password must be greater than 7 characters')
        }


        if(password.trim() !== confirmPassword.trim())
            {
            setError(false)
            setConfirmPasswordError('Passwords do not match')
        }
        if(error){
    console.log('Form submitted successfully')
        }
    }

    return (
        <div className="mt-6 ">
            <form 
            className="flex flex-col align-items justify-center"
            onSubmit={handleSubmit}>
                <input className="p-3 font-bold mb-2 w-1/2 border border-black"
                    data-testid="first-name-id"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                />
                {firstNameError!=='' && 
                <p className="text-red-500">
                    {firstNameError}
                </p>
                    }
                
                <input className="p-3 font-bold mb-2 w-1/2 border border-black"
                    data-testid="last-name-id"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                />
                
                {lastNameError!=='' && 
                <p className="text-red-500">
                    {lastNameError}
                </p>
                    }
                
                <input className="p-3 font-bold mb-2 w-1/2 border border-black"
                    data-testid="email-id"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
        {emailError!=='' && 
                <p className="text-red-500">
                    {emailError}
                </p>
                    }
                <input  className="p-3 font-bold mb-2 w-1/2 border border-black"
                    data-testid="password-id"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
        {passwordError!=='' && 
                <p className="text-red-500">
                    {passwordError}
                </p>
                    }
                <input className="p-3 font-bold mb-2 w-1/2 border border-black"
                    data-testid="confirm-password-id"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange = {(e)=>setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError!=='' && 
                <p className="text-red-500">
                    {confirmPasswordError}
                </p>
                    }
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm

