import { useState } from "react";

const person = {
	name: "John Doe",
	age: 32,
	occupation: "Developer",
};

const address = {
	street: "1234 Main St",
	city: "San Francisco",
	state: "CA",
	zip: "94107",
};



const App = () => {


const [view,setView]= useState(true)


	return (
		<div className="w-100 h-50 flex flex-col">
			<div className="flex list-none m-0 p-0 border-b border-gray-400 ">
				<button className="p-2.5 cursor-pointer  bg-blue-400 font-black"
				onClick={()=> setView(true)}
				>Person</button>
				<div className="p-2.5 cursor-pointer  bg-gray-500 font-black"
				onClick={()=> setView(false)}
				>Address</div>
			</div>
			<div className="p-5">
				{
					view?
					<div className="flex flex-col" >
					<p>Name: {person.name}</p>
					<p>Age: {person.age}</p>
					<p>Occupation: {person.occupation}</p>
				</div>:
				<div className="flex flex-col" >
					<p>Street: {address.street}</p>
					<p>City: {address.city}</p>
					<p>State: {address.state}</p>
					<p>Zip: {address.zip}</p>
				</div>
                
				}
                
                
			</div>
		</div>
	);
};

export default App;
