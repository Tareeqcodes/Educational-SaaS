import React, { useState } from 'react';
import PropertyUpload from './PropertyUpload'; // Assuming you've created the PropertyUpload component
import PropertyList from './PropertyList'; // Assuming you've created the PropertyList component

const RentalMainPage = () => {
  const [isSelling, setIsSelling] = useState(false);

  const handleSellClick = () => {
    setIsSelling(true);
  };

  const handleRentClick = () => {
    setIsSelling(false);
  };

  return (
    <div className="flex flex-col items-center font-ubuntu justify-center text-center px-16 py-0">
      <h1 className="font-bold text-4xl text-black pt-36 pb-8 w-full">
        Find your perfect home with us
      </h1>

      <div className="flex flex-row gap-5 mb-8">
        <button
          onClick={handleRentClick}
          className={`${
            !isSelling ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'
          } border rounded-xl p-2 mx-5 font-semibold text-xl`}
        >
          Available for Rent
        </button>
        <button
          onClick={handleSellClick}
          className={`${
            isSelling ? 'bg-orange-700 text-white' : 'bg-gray-300 text-black'
          } border rounded-xl px-5 py-2 mx-5 font-semibold text-xl`}
        >
          Sell
        </button>
      </div>

      {isSelling ? (
        // Show the property upload form when 'Sell' is clicked
        <PropertyUpload />
      ) : (
        // Show the property list when 'Available for Rent' is clicked
        <PropertyList />
      )}

    </div>
  );
};

export default RentalMainPage;
