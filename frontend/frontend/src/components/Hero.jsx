import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="w-full mt-0 mb-0 p-4">
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-4 mt-16"
        >
        
          <input
            id="search"
            type="text"
            placeholder="Search PDFs+ AI Tools"
            className="p-2 mt-auto border border-black rounded w-full md:w-auto flex-grow md:mr-4 mb-4 md:mb-0"
          />
          <button className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center mb-4 space-x-2">
          
         
          <button className="bg-gray-200 text-gray-700 p-2 m-1 rounded">
            AI Tools
          </button>
         
          <button className="bg-gray-200 text-gray-700 p-2 m-1 rounded">
            Educational Resources
          </button>
          
        </div>
      </div>
      
    </>
  )
}

export default Hero