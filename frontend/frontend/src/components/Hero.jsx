import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="w-full bg-white items-center text-center mx-auto">
        <div className="flex flex-wrap justify-center mb-4 p-20">
          <button className="bg-gray-800 text-white text-xl p-2 m-1 rounded">
            AI Tools
          </button>
         
          <button className="bg-gray-800 text-white text-xl p-2 m-1 rounded">
            Educational Resources
          </button>
          
        </div>
        {/* <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Edusphere</h1>
        <p className="mt-4 text-lg">
          Your Gateway to Future-Ready Education
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full">
          Get Started
        </button>
      </header> */}
      </div>
      
    </>
  )
}

export default Hero