import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<nav className='relative w-full flex flex-wrap p-4  bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light'>				

				<div className='flex-grow' >
					<Link to="/">
						<h1 className='text-2xl font-semibold' >Jackie Smith</h1>
					</Link>
					</div>
					<div className='flex gap-5' >
						<Link to="/signup" className=' text-xl text-gray-500 hover:text-gray-700 focus:text-gray-700' >
							<i className="fa-solid fa-user"></i>
						</Link>
						<Link to="/browse" className=' text-xl text-gray-500 hover:text-gray-700 focus:text-gray-700' >
							<i className="fa-solid fa-magnifying-glass"></i>
						</Link>
						<Link to="/cart" className=' text-xl text-gray-500 hover:text-gray-700 focus:text-gray-700' >
							<i className="fa-solid fa-bag-shopping"></i>
						</Link>
					</div>
			</nav>
			<br />
		</>
	)
}

export default Navbar