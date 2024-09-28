import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
      <aside className="bg-gray-800 text-white min-h-fit p-4 w-64">
        <div className='flex flex-col items-center text-center fixed justify-center '>
          <Link className="bg-orange-500 py-2 px-2  mt-16 text-xl font-ubuntu font-semibold rounded-lg" to="/">
          Home
          </Link>
          <Link className="bg-orange-500 py-2 my-5 px-2  text-xl  font-ubuntu font-medium rounded-lg" to rounde="/pdfs">
          PDFs
          </Link>
          <Link className="bg-orange-500 py-2 my-5 px-2  text-xl  font-ubuntu font-medium rounded-lg" to=" rounde/rental">
          Rental
          </Link>
          <Link className="bg-orange-500 py-2 my-5 px-2  text-xl  font-ubuntu font-medium rounded-lg" to="/ma rounderketplace">
          Marketplace
          </Link>
          <Link className="bg-orange-500 py-2 my-5 px-2  text-xl  font-ubuntu font-medium rounded-lg" to rounde="/news">
          News
          </Link>
          <Link className="bg-orange-500 py-2 my-5 px-2  text-xl  font-ubuntu font-medium rounded-lg" to="/pr roundeofilepage">
          Profile
          </Link> 
        </div>
      </aside>
  );
};

export default Dashboard;
