import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    {/* Logo */}
    <h1 className="text-2xl font-bold tracking-wide text-white">
      MyLogo
    </h1>

    {/* Links */}
    <ul className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
      <li>
        <Link to="/"
        className="transition hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" 
        className="transition hover:text-white">
          Products
        </Link>
      </li>
    
      
    </ul>

    {/* Button */}
    <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 active:scale-95">
      Get Started
    </button>
  </div>
</nav>
  )
}

export default Navbar
