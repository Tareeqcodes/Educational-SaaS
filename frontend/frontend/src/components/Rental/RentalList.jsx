import React from 'react';
import RentalCard from './RentalCard';

const RentalList = () => {
  const rentals = [
    { id: 1, name: 'Hostel A', location: 'Near Campus' },
    { id: 2, name: 'Apartment B', location: 'City Center' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rentals.map(rental => (
        <RentalCard key={rental.id} name={rental.name} location={rental.location} />
      ))}
    </div>
  );
};

export default RentalList;
