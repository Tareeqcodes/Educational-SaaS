import React from 'react';

const RentalSearchBar = () => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search Rentals..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default RentalSearchBar;
