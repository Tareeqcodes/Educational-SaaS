import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
      <aside className="bg-gray-800 text-white min-h-fit p-4 w-64">
        <div className='flex flex-col items-center text-center fixed justify-center'>
          <Link className=" py-2   mt-16 text-xl font-normal" to="/">
          Home
          </Link>
          <Link className=" py-2 my-3 text-xl font-normal" to="/pdfs">
          PDFs
          </Link>
          <Link className=" py-2 my-3 text-xl font-normal" to="/rental">
          Rental
          </Link>
          <Link className=" py-2 my-3 text-xl font-normal" to="/ma rounderketplace">
          Marketplace
          </Link>
          <Link className=" py-2 my-3 text-xl font-normal" to="/news">
          News
          </Link>
          <Link className=" py-2 my-3 text-xl font-normal" to="/profilepage">
          Profile
          </Link> 
        </div>
      </aside>
  );
};

export default Dashboard;
