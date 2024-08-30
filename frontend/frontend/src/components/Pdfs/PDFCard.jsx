import React from 'react';

const PDFCard = ({ title, author }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{author}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">Download</button>
    </div>
  );
};

export default PDFCard;
