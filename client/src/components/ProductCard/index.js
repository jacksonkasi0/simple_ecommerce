import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({id,img,name,price}) => {
	return (
		<Link to={`/product/${id}`}>
			<div className="w-full px-7 lg:px-0">
				<div className="p-3 bg-white rounded shadow-md">
					<div className="">
						<div className="relative w-full mb-3 h-62 lg:mb-0">
							<img src={img} alt={name}
								className="object-fill w-full h-full rounded" />
						</div>
						<div className="flex-auto p-2 justify-evenly">
							<div className="flex flex-wrap ">
								<div className="flex items-center justify-between w-full min-w-0 ">
									<h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
										{name}
									</h2>
								</div>
							</div>
							<div className="mt-1 text-xl font-semibold">${price}</div>
						</div>
					</div>
				</div>
			</div>
			</Link>
	)
}

export default ProductCard