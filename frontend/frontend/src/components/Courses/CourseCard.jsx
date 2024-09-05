import React from 'react';

const CourseCard = ({ title, description }) => {
  return (
    <div className="bg-white py-40 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">View Course</button>
    </div>
  );
};

export default CourseCard;
