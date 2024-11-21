import React, { useState } from 'react';
import { FaUniversity, FaNewspaper, FaDollarSign, FaChartLine, FaFileUpload, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import Upload from '../Storage/Upload';

const Sidebar = ({ signOut, role, onSelectSection }) => {
  return (
    <div className="w-1/4 bg-blue-900 text-white h-full items-center justify-center mt-10 p-6">
      <ul className="space-y-1 items-center">
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
        {role === 'lecturer' && (
          <li
            className="flex items-center hover:bg-blue-700 p-3 rounded cursor-pointer"
            onClick={() => onSelectSection('upload')}
          >
            <FaFileUpload className="mr-3" />
            <span>Upload PDF</span>
          </li>
        )}
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

const DashboardContent = ({ user, selectedSection }) => {
  return (
    <div className="w-3/4 p-8 flex flex-col bg-gray-10 text-center justify-center">
      <h1 className="text-2xl font-bold text-blue-900">Welcome to Your Dashboard</h1>
      {user && (
        <div>
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
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
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-800">Upload Section</h2>
          <p className="text-gray-600">You can upload your lecture materials here.</p>
          <Upload />
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { user, role, loading, signOut } = useAuth();
  const [selectedSection, setSelectedSection] = useState('campusConnect'); // Default section

  if (loading) return <p>Loading...</p>;
  if (!user) return <SignInForm />;

  return (
    <div className="flex h-screen">
      <Sidebar signOut={signOut} role={role} onSelectSection={setSelectedSection} />
      <DashboardContent user={user} selectedSection={selectedSection} />
    </div>
  );
};

export default Dashboard;
