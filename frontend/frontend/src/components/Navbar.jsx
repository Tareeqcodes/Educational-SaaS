import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'
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
          <li><NavLink to='/'>Home</NavLink></li>
           <li><FacultyDropdown /></li>
          <li><NavLink to='/rental'>Rental</NavLink></li>
          <li><NavLink to='/profile'>Profile</NavLink></li>
          <li><LoginBtn /></li>
        </ul>
        </div>
    </nav>
    <Outlet />
    </>
    
  )
}

export default Navbar