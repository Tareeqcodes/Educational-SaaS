import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav
      className="bg-peach text-black text-center font-ubuntu  w-full m-auto px-16 py-4 fixed  z-0"
    >
      <div className=" mx-auto flex flex-1 justify-between items-center">
        <div className="text-2xl  font-bold">
          <Link to="/">Edusphere</Link>
        </div>
        <div>
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/pdfs">PDFs</Link>
          <Link className="mr-4" to="/rental">Rental</Link>
          <Link className="mr-4" to="/marketplace">Marketplace</Link>
          <Link className="mr-4" to="/news">News</Link>
          <Link className="mr-4" to="/sell-courses">Sell Courses</Link>
          <Link className="mr-4" to="/Auth">Login</Link> 
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar