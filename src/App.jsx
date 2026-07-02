import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Product from './pages/Productpage'
import Sort from './component/Sorting'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './component/Form'
import ProductDetails from './component/ProductDetails'

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>

      

    
  )
}

export default App
