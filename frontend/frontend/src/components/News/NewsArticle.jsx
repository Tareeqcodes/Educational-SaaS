import React from 'react';

const NewsArticle = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">Read More</button>
    </div>
  );
};

export default NewsArticle;
