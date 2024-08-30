import React from 'react';

const SearchBar = () => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search PDFs..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
