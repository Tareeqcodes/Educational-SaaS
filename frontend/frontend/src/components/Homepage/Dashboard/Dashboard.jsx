import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
      <aside className="bg-peach text-white min-h-fit pl-20 min-w-64">
        <div className='flex flex-col items-center text-center fixed justify-center '>
          <Link className=" py-2 text-blue-700 mt-16 text-xl font-bold" to="/">
          Home
          </Link>
          <Link className=" py-2 text-blue-700 my-3 text-xl font-bold" to="/pdfs">
          PDFs
          </Link>
          <Link className=" py-2 text-blue-700 my-3 text-xl font-bold" to="/rental">
          Rental
          </Link>
          <Link className=" py-2 text-blue-700 my-3 text-xl font-bold" to="/ma rounderketplace">
          Marketplace
          </Link>
          <Link className=" py-2 text-blue-700 my-3 text-xl font-bold" to="/news">
          News
          </Link>
          <Link className=" py-2 text-blue-700 my-3 text-xl font-bold" to="/profilepage">
          Profile
          </Link> 
        </div>
      </aside>
  );
};

export default Dashboard;
