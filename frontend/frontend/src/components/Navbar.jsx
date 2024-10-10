import React from 'react'
import { Link} from 'react-router-dom';
import NavItems from './Homepage/NavItems';

const Navbar = () => {
  return (
    <>
    <nav
      className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-4 z-50">
      <div className=" mx-auto px-5 flex flex-1 justify-between items-center">
        <h1 className="text-2xl font-bold ml-10 ">Edusphere</h1>
        <NavItems />
      <Link className="bg-green-500 text-white py-2 px-4 rounded" to="/Auth">
          Login
          </Link> 
        
      </div>
    </nav>
    </>
    
  )
}

export default Navbar