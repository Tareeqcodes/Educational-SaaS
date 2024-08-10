import React from 'react'
import LoginBtn from './LoginBtn'

const Navbar = () => {
  return (
    <>
     
    <nav
      className="bg-orange-500 text-black w-full items-center border-b-2 border-slate-400 fixed z-0"
    >
        <ul className="flex flex-row items-center justify-evenly p-4 space-x-8">
          <li><a href="#premium">Home</a></li>
          <li><a href="airbnb.html">Rental</a></li>
          <li><a href="payment.html">Profile</a></li>
          <li><LoginBtn /></li>
        </ul>
    </nav>
    </>
    
  )
}

export default Navbar