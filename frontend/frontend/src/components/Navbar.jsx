import React from 'react'
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav
      className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-4 z-50">
      <div className=" mx-auto flex flex-1 justify-between items-center">
        <h1 className="text-xl font-bold">Edusphere</h1>
      <Link className="bg-green-500 text-white py-2 px-4 rounded" to="/Auth">
          Login
          </Link> 
        
      </div>
    </nav>
    </>
    
  )
}

export default Navbar