import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axios'

const Product = () => {
	const { id } = useParams();

	const [productDetails, setProductDetails] = useState(null)

	console.log(productDetails);

	useEffect(() => {

		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/product/get/${id}`, { id: id })
			setProductDetails(data);
		}
		fetchProduct();
	}, [])

	return (
		<div>
			{productDetails !== null ? (
				<div>

					<section class="text-gray-700 body-font overflow-hidden bg-white">
						<div class="container px-5 py-24 mx-auto">
							<div class="lg:w-4/5 mx-auto flex flex-wrap">
								<img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={productDetails.image[0]} />
								<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
									<h2 class="text-sm title-font text-gray-500 tracking-widest">{productDetails.name}</h2>
									<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.name}</h1>

									<p class="leading-relaxed">{productDetails.description}</p>

									<div class="flex">
										<span class="title-font font-medium text-2xl text-gray-900">$ {productDetails.price}</span>
										<button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to cart</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			) : (
				<h1>Loadin...</h1>
			)}
		</div>
	)
}

export default Product