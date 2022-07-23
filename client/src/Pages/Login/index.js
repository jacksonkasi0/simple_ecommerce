import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from "../../axios";
import {useDispatch} from 'react-redux'
import {setUser} from '../../store/action/user'

const Login = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch()

	const [inputValue, setInputValue] = useState({
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

	const handleSubmit = async () => {		
		if (
			!inputValue.email ||
			!inputValue.password
		) {
			alert('Enter all the details');
			return;
		}

		try {
			const { data } = await axios.post('/api/user/login', inputValue);
			alert(data?.msg);
			if (data?.success && data?.token) {
				localStorage.setItem("token", data?.token)
				dispatch(setUser(data?.user))
			}
		  } catch (error) { 
			alert(error.response?.data?.msg || error.message);
			return;
		};
		setInputValue({
			email: '',
			password: '',
		});
		setTimeout(() => {
			navigate('/')
		}, 1200);
	}

	return (
		<>
		<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto"  >
			<form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} >
				
				<div className="form-group mb-6">
					<input type="email" name="email" value={inputValue.email} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" onChange={handleChange} />
				</div>
				<div className="form-group mb-6">
					<input type="password" name="password" value={inputValue.password} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" onChange={handleChange} />
				</div>
				<button type="submit" value="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
			</form>	
			</div>
			
			<p className='mt-3 text-xl text-center  text-blue-600' >
				<Link to="/signup" >Signup</Link>
			</p>
		</>
	)
}

export default Login