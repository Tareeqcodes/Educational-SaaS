import React, { useState } from 'react';
import { FaUniversity, FaNewspaper, FaDollarSign, FaChartLine, FaFileUpload, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import Upload from '../../../app/Marketplace/Upload';
import Spinner from '../Spinner';

const Sidebar = ({ user, signOut, onSelectSection }) => {

  return (
    <div className="w-1/4 bg-blue-900 text-white h-full items-center justify-center pt-20 px-6">
       {user && (
          <p className='flex flex-col p-5'>
            <strong>Email:</strong> {user.email}
          </p>
       
      )}
      <ul className=" items-center">
        <li
          className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
          onClick={() => onSelectSection('campusConnect')}
        >
          <FaUniversity className="mr-3" />
          <span>Campus Connect</span>
        </li>
        <li
          className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
          onClick={() => onSelectSection('news')}
        >
          <FaNewspaper className="mr-3" />
          <span>News</span>
        </li>
        <li
          className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
          onClick={() => onSelectSection('subscription')}
        >
          <FaDollarSign className="mr-3" />
          <span>Subscription</span>
        </li>
        <li
          className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
          onClick={() => onSelectSection('activity')}
        >
          <FaChartLine className="mr-3" />
          <span>Activity</span>
        </li>
          <li
            className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
            onClick={() => onSelectSection('upload')}
          >
            <FaFileUpload className="mr-3" />
            <span>Add Room</span>
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

const DashboardContent = ({ selectedSection }) => {
  return (
    <div className="w-3/4 p-8 flex flex-col bg-gray-10 text-center justify-center overflow-hidden">
     
      {selectedSection === 'campusConnect' && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800">Campus Connect</h2>
          <p className="text-gray-600">Explore campus-wide resources and connections.</p>
        </div>
      )}
      {selectedSection === 'news' && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800">News</h2>
          <p className="text-gray-600">Stay updated with the latest campus news.</p>
        </div>
      )}
      {selectedSection === 'subscription' && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800">Subscription</h2>
          <p className="text-gray-600">Manage your subscriptions here.</p>
        </div>
      )}
      {selectedSection === 'activity' && (
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800">Activity</h2>
          <p className="text-gray-600">View and manage your recent activities.</p>
        </div>
      )}
      {selectedSection === 'upload' && (
        <div className="mt-6 flex-grow h-full overflow-hidden">
          {/* <h2 className="text-lg font-bold text-gray-800">Upload Section</h2>
          <p className="text-gray-600">You can upload your lecture materials here.</p> */}
          <Upload />
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const [selectedSection, setSelectedSection] = useState('campusConnect');

  if (loading) return <Spinner />;
  if (!user) return <SignInForm />;

  return (
    <div className="flex h-screen">
      <Sidebar user={user} signOut={signOut} onSelectSection={setSelectedSection} />
      <DashboardContent user={user} selectedSection={selectedSection} />
    </div>
  );
};

export default Dashboard;
