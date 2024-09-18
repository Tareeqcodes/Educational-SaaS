import React from 'react';

const RentalCard = ({ name, location }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{location}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">View Details</button>
    </div>
  );
};

export default RentalCard;
