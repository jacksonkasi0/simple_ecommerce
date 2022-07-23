import React from 'react'
import {useSelector} from 'react-redux'

const Cart = () => {

	const {user } = useSelector(state=>state.auth);

  return (
	  <div>
		  <p>Cart</p>
		  <h1>you are login in</h1>
		  <pre>
			  {JSON.stringify(user)}
		  </pre>
	</div>
  )
}

export default Cart