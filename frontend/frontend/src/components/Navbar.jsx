import React from 'react'
import LoginBtn from './LoginBtn'
import FacultyDropdown from './FacultyDropdown'


const Navbar = () => {
  return (
    <>
    <nav
      className="bg-orange-500 text-white flex flex-row text-center justify-between  w-full p-4 fixed z-0"
    >
      <>
        <span className='text-2xl italic'>EDUSPHERE</span>
      </>
      <div>
        <ul className="flex flex-row items-center justify-evenly space-x-5">
          <li><a href="">Home</a></li>
           <li><FacultyDropdown /></li>
          <li><a href="/rental">Rental</a></li>
          <li><a href="/rental">Profile</a></li>
          {/* <li><a href="/campconnect">Campusnet</a></li> */}
          <li><LoginBtn /></li>
        </ul>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar