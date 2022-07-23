import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../../store/action/product';
import axios from '../../axios';
import ProductCard from '../../components/ProductCard'
import InfiniteScroll from 'react-infinite-scroller';

const Browse = () => {

	const dispatch = useDispatch();
	const  {products}  = useSelector(state => state.product);


	const [skip, setSkip] = useState(0)

	console.log(skip);
	console.log(products);

	useEffect(() => {
		const fetchProdutcs = async () => {
			try {
				const {data} = await axios.get(`/api/product/all?skip=${skip}`)
				// console.log(data);
				dispatch(setProduct(data))
			} catch (error) {
				console.log(error);
			}
		}
		fetchProdutcs()
	}, [skip])

	const fetchMore = () => {
		console.log("fetch");
		setSkip(products.length)
	}
	
	return (
 <InfiniteScroll
    pageStart={0}
    loadMore={fetchMore}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
> 
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2" >
			{
				products.length > 0 ? (
					products.map((item) => (
						<ProductCard key={item._id} id={item._id} name={item.name} price={item.price} img={item.image[0]} />
					))
				) : (
						<h1 className='text-xl text-center text-blue-500' >Loading...</h1>
				)
			}
		</div>
		 </InfiniteScroll>
	)
};

export default Browse