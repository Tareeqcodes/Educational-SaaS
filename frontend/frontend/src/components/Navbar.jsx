import React from 'react'
import LoginBtn from './LoginBtn'

const Navbar = () => {
  return (
    <>
     
    <nav
      className="bg-orange-500 text-white flex flex-row text-center justify-between  w-full p-4 fixed z-0"
    >
      <>
        <span className='text-2xl'>EDUSPHERE</span>
      </>
      <div>
        <ul className="flex flex-row items-center justify-evenly space-x-2">
          <li><a href="#premium">Home</a></li>
          <li><a href="airbnb.html">Rental</a></li>
          <li><a href="payment.html">Profile</a></li>
          <li><LoginBtn /></li>
        </ul>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar