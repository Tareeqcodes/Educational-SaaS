import React from 'react'

const FeatureCards = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Access Online PDFs</h2>
      <p>Browse and download educational PDFs from various categories.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Rental Services</h2>
      <p>Find and rent hostels and homes near your campus.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Marketplace</h2>
      <p>Order goods online from trusted sellers within your campus community.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Campus News</h2>
      <p>Stay updated with the latest news and events happening around your campus.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Sell Courses</h2>
      <p>Create and sell your tutorials or courses online.</p>
    </div>
  </div>

  )
}

export default FeatureCards