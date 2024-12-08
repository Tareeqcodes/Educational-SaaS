import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10'>  
      <h2 className="text-blue-700 font-bold text-4xl py-5">
        What's <span className='text-orange-600'>Edusphere</span>
      </h2>
      <p className="text-center mb-8">“EduSphere is a Web3-powered platform that redefines how students interact with their university environment. From easy access to PDFs and hostel bookings to earning Archway tokens for exclusive benefits, EduSphere makes academic and campus life more connected and rewarding.”</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center justify-center">  
        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center">  
          <h3 className="text-xl font-bold">For Instructors</h3>
          <button className='border border-green-800 text-black font-bold rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>

        <div className="bg-gray-300 rounded-lg py-10 px-12 max-w-md mx-auto flex flex-col items-center justify-center"> 

          <h3 className="text-xl font-bold">For Students</h3>
          <button className=' bg-blue-700 text-white font-bold  rounded-xl w-40 py-1 px-2 my-5'>Start</button>
        </div>
      </div>
    </div>
  )
}

export default About
