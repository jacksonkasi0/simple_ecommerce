import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from "../../axios";

const Signup = () => {

	const navigate = useNavigate();


	const [inputValue, setInputValue] = useState({
		name: "",
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value.trim(),
		})
	}

	const handleSubmit = async() => {
		if (
			!inputValue.name ||
			!inputValue.email ||
			!inputValue.password
		) {
			alert('Enter all the details');
			return;
		}

		try {
			const { data } = await axios.post('/api/user/signup', inputValue);
			alert(data.msg);
		  } catch (error) { 
			console.log(error);
			alert(error.response.data.msg || error.message);
			return;
		  }
		  setInputValue({
			name: '',
			email: '',
			password: '',			
		  });
		  setTimeout(() => {
			navigate('/login')
		  }, 1200);
	}

	return (
		<>
		<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto"  >
			<form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} >
				<div className="form-group mb-6">
					<input type="text" name='name' value={inputValue.name} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter name" onChange={handleChange} />
				</div>
				<div className="form-group mb-6">
					<input type="email" name="email" value={inputValue.email} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" onChange={handleChange} />
				</div>
				<div className="form-group mb-6">
					<input type="password" name="password" value={inputValue.password} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" onChange={handleChange} />
				</div>
				<button type="submit" value="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>
			</form>	
			</div>
			
			<p className='mt-3 text-xl text-center  text-blue-600' >
				<Link to="/login" >Login</Link>
			</p>
		</>
	)
}

export default Signup