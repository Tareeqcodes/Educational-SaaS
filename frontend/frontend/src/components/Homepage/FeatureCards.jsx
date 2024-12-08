import React from 'react'

const FeatureCards = () => {
  return (
    <div className='items-center  justify-center text-center'>
        <h2 className='font-bold text-2xl md:text-4xl py-5'>Our Features</h2>
         
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-0 mx-auto text-center mb-20 items-center justify-center">

    <div className="p-4 rounded shadow">  
      <h2 className="text-xl font-bold py-5">Access Online PDFs</h2>
      <p>Download lecture notes, research papers, and syllabi effortlessly with a user-friendly interface.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Tools for Teachers and Learners</h2>
      <p>Browse and book campus hostels with ease. Compare amenities, prices, and secure your accommodation in just a few clicks.</p>
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
      <p>Stay informed with the latest updates, events, and announcements from your university.</p>
    </div>

    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Bukstore</h2>
      <p>Use Archway tokens to buy digital goods, subscribe to premium services, or gain access to workshops and events.</p>
    </div>
    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold py-5">Tokens system</h2>
      <p>Engage with EduSphere and earn Archway tokens to unlock discounts, exclusive content, and more.</p>
    </div>
  </div>
 
  </div>
  )
}

export default FeatureCards