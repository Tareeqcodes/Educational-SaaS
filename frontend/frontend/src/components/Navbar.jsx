import React from 'react'
import LoginBtn from './LoginBtn'
import Profile from './Profile'

const Navbar = () => {
  return (
    <>
    <nav
      className="bg-orange-500 text-white flex flex-row text-center justify-between w-full m-auto p-5 py-4 fixed z-0"
    >
      <>
        <span className='text-2xl italic'>EDUSPHERE</span>
      </>
      <div>
        <ul className="flex flex-row items-center justify-evenly space-x-5">
          <li><a href="">Home</a></li>
          <li><a href="/campconnect">Campusnet</a></li>
          <li><a href="/rental">Rental</a></li>
          <li><LoginBtn /></li>
          <li><Profile /></li>
        </ul>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar