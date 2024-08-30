import React from 'react';

const ProductCard = ({ name, price }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{price}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">Buy Now</button>
    </div>
  );
};

export default ProductCard;
