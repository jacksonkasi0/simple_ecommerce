import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {



  return (
    <div className='mx-5 flex flex-wrap gap-4' >
      <Link to="/browse" >
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-32 mx-auto" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_600x.png?v=1654312291" alt="Tech" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Explore Tech Products</div>
            <p className="text-gray-700 text-center text-base">
              Explore Tech Products
            </p>
          </div>
        </div>
      </Link>

      <Link to="/browse" >
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-32 mx-auto" src="https://images.bewakoof.com/t1080/gojo-domain-oversized-fit-t-shirt-520746-1658344284-1.jpg" alt="fashion" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Explore fashion Products</div>
            <p className="text-gray-700 text-center text-base">
              Explore fashion Products
            </p>
          </div>
        </div>
      </Link>

      <Link to="/browse" >
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-32 mx-auto" src="https://m.media-amazon.com/images/I/51QUw4yRCkL._UY500_.jpg" alt="sport" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Explore Sport Products</div>
            <p className="text-gray-700 text-center text-base">
              Explore Sport Products
            </p>
          </div>
        </div>
      </Link>

      <Link to="/browse" >
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-32 mx-auto" src="https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?b=1&k=20&m=1193750118&s=170667a&w=0&h=dWmXq8D_P7sHRIZn-fPNRLPJaAvSvJmeYH9Bsq8Ywhs=" alt="shop" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Browse All Products</div>
            <p className="text-gray-700 text-center text-base">
              Explore All Products
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Home