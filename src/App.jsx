import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Product from './pages/Productpage'
import Sort from './component/Sorting'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      </Routes>
      </BrowserRouter>

    
  )
}

export default App
