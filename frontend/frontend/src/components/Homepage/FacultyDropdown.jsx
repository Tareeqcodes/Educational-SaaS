import React from 'react'
import { useState } from 'react'

const FacultyDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='relative'>
        <button onClick={toggleDropdown} className='focus:outline-none'>
        Departments
        </button>
        {isOpen && (
             <div className="dropdown-content w-32 text-black absolute bg-white shadow-lg rounded">
             <a href="" className="block px-4 py-2">Faculty 1</a>
             <a href="" className="block px-4 py-2">Faculty 2</a>
             <a href="" className="block px-4 py-2">Faculty 3</a>
             <a href="" className="block px-4 py-2">Faculty 4</a>
           </div>
        )}
    </div>
  )
}

export default FacultyDropdown