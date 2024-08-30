import React from 'react';

const ProductSearchBar = () => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search Products..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default ProductSearchBar;
