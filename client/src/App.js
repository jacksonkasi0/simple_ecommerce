import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Browse from './Pages/Browse';
import Cart from './Pages/Cart';
import Home from './Pages/Home'
import Login from './Pages/Login';
import Product from './Pages/Product';
// import PLP from './Pages/PLP';
// import Product from './Pages/Product';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/product" element={<Browse />} />
        <Route path="/product/:id" element={<Product />} />
        
        <Route path='/cart' element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App