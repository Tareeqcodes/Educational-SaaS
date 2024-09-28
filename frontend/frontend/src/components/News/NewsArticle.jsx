import React from 'react'
import { Link} from 'react-router-dom';

const Navbar = () => {
  // const LinkClass = ({isActive}) =>{
  //   isActive
  //   ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  //   : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  // }

  return (
    <>
    <nav
      className="bg-gray-900 font-ubuntu justify-end  p-4 fixed  z-0"
    >
      <div className=" mx-auto flex flex-1 justify-between items-center">
        <div className="text-2xl  font-bold">
          <Link to="/">Edusphere</Link>
        </div>
        <div className='flex  '>
          <Link className="mr-4" to="/">
          Home
          </Link>
          <Link className="mr-4" to="/pdfs">
          PDFs
          </Link>
          <Link className="mr-4" to="/rental">
          Rental
          </Link>
          <Link className="mr-4" to="/marketplace">
          Marketplace
          </Link>
          <Link className="mr-4" to="/news">
          News
          </Link>
          <Link className="mr-4" to="/profilepage">
          Profile
          </Link>
          <Link className="mr-4" to="/Auth">
          Login
          </Link> 
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar