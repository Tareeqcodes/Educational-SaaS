import React from 'react';
import { FaUniversity, FaNewspaper, FaDollarSign, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';

const Sidebar = ({signOut}) => {
  return (
    <div className="w-1/4 bg-blue-900 text-white h-full p-6">
      <h2 className="text-xl font-bold mb-8 text-center">Dashboard</h2>
      <ul className="space-y-6">
        <li className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer">
          <FaUniversity className="mr-3" />
          <span>Campus Connect</span>
        </li>
        <li className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer">
          <FaNewspaper className="mr-3" />
          <span>News</span>
        </li>
        <li className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer">
          <FaDollarSign className="mr-3" />
          <span>Subscription</span>
        </li>
        <li className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer">
          <FaChartLine className="mr-3" />
          <span>Activity</span>
        </li>
      </ul>
      <button
        className="flex items-center justify-center bg-red-500 text-white px-4 py-2 mt-6 rounded hover:bg-red-700"
        onClick={signOut}
      >
        <FaSignOutAlt className="mr-2" />
        Sign Out
      </button>
    </div>
  );
};

const DashboardContent = ({user}) => {
  return (
    <div className="w-3/4 p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Welcome to Your Dashboard</h1>
      <p className="text-gray-700">Here is where the main content will go.</p>
      {user && (
        <div>
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
      {/* Additional content can go here */}
    </div>
  );
};

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user is logged in</p>;

  return (
    <div className="flex h-screen">
      <Sidebar signOut={signOut}/>
      <DashboardContent user={user} />
    </div>
  );
};

export default Dashboard;
