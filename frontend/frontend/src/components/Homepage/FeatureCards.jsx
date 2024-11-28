import React from 'react'

const FeatureCards = () => {
  return (
    <div className='items-center  justify-center text-center'>
        <h2 className='font-bold text-2xl md:text-4xl py-5'>Our Features</h2>
         
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-0 mx-auto text-center  items-center justify-center">

    <div className="p-4 rounded shadow">  
      <h2 className="text-xl font-bold py-5">Access Online PDFs</h2>
      <p>Browse and download educational PDFs from various categories.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Tools for Teachers and Learners</h2>
      <p>Create and sell your tutorials or courses online.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Rental Services</h2>
      <p>Find and rent hostels and homes near your campus.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Marketplace</h2>
      <p>Order goods online from trusted sellers within your campus community.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Campus News</h2>
      <p>Stay updated with the latest news and events happening around your campus.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Sell Courses</h2>
      <p>Create and sell your tutorials or courses online.</p>
    </div>
  </div>
 
  </div>
  )
}

export default FeatureCards