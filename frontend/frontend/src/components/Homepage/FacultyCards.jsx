import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const FacultyCards = () => {
  const faculties = [
    'Agriculture',
    'Allied Health',
    'Art and Islamic',
    'Basic Medical',
    'Clinical',
    'Communication',
    'Computing',
    'Dentistry',
    'Earth and Environmental',
    'Education',
    'Engineering',
    'Law',
    'Life Science',
    'Management Science',
    'Pharmaceutical',
    'Physical Sciences',
    'Social Sciences',
    'Veterinary',
    // Add more faculties as needed
  ];

  return (
    <>
    <div className="text-center mx-auto">
      <h2 className="text-2xl font-bold mb-5">Available Faculties</h2>
      <div className="p-5 w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculties.map((faculty, index) => (
            <li key={index} className='flex items-center space-x-2'>
             <FaAngleRight />
             <span>{faculty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default FacultyCards