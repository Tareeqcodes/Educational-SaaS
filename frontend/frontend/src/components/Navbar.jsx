import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav
      className="bg-slate-800 text-white flex flex-row text-center justify-between w-full m-auto px-20 py-4  z-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Edusphere</Link>
        </div>
        <div>
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/pdfs">PDFs</Link>
          <Link className="mr-4" to="/rentals">Rentals</Link>
          <Link className="mr-4" to="/marketplace">Marketplace</Link>
          <Link className="mr-4" to="/news">News</Link>
          <Link className="mr-4" to="/sell-courses">Sell Courses</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar