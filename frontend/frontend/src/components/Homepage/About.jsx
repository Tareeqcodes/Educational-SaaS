import React from 'react'

const About = () => {
  return (
    <div>
        <h2 className="text-2xl text-blue-700 py-5  font-semibold ">What's <span className='text-orange-600'>Edusphere</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sint?</p>
        <div className="grid grid-cols-2 grid-rows-1 items-center w-full text-center justify-center p-5 gap-5">
            <div className=" bg-gray-300  rounded-lg gap-5 items-center text-center justify-center p-12">
                <h3 className="text-xl font-bold"> For Instructors</h3>
                <button className='px-6 w-10'>Start</button>
            </div>
            <div className=" bg-gray-300  items-center text-center justify-center p-12">
                <h3 className="text-xl font-bold"> For Students</h3>
                <button className='px-6 w-10'>Start</button>
            </div>
        </div>
    </div>
  )
}

export default About