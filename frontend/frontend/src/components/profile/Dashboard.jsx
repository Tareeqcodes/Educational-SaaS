import React, { useState } from 'react';
import { FaUniversity, FaNewspaper, FaDollarSign, FaChartLine, FaFileUpload, FaSignOutAlt } from 'react-icons/fa';
import { Dropdown } from "flowbite-react";
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import UploadRoom from '../../../app/Rental/UploadRoom';
import Spinner from '../Spinner';
import avatar  from '../../assets/images/avatar.png';

const Sidebar = ({  signOut, onSelectSection }) => {


  return (
    <div className=" bg-blue-900 flex w-full text-white max-h-40 mt-10   items-center justify-between px-5 py-3">
      
        <div className="mt-2">        
        <Dropdown label="Rental" size='xs' dismissOnClick={false} >
         <Dropdown.Item onClick={() => onSelectSection('upload')}>Add Room</Dropdown.Item>
         <Dropdown.Item>Delete Room</Dropdown.Item>
         <Dropdown.Item>My Rooms/Rentals</Dropdown.Item>
         <Dropdown.Item></Dropdown.Item>
        </Dropdown>
        </div>
      <button
        className="flex items-center justify-center text-white rounded hover:bg-red-700"
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
    <div className=" p-8 justify-center overflow-y-scroll">
      <div className='flex flex-col items-center text-center max-h-96'>
      <img src={avatar} className='w-32 object-cover' alt="user.png" />
      {user && (
          <p className=''>
            <strong>Email:</strong> {user.email}
          </p>
       
      )} 
      </div>
      
       <div>
      {selectedSection === 'upload' && (
        <div className="overflow-y-auto">
          <UploadRoom />
        </div>
      )}
      </div> 
     
    </div>
  );
};

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const [selectedSection, setSelectedSection] = useState('upload');

  if (loading) return <Spinner />;
  if (!user) return <SignInForm />;

  return (
    <div className="flex flex-col h-screen">
      <Sidebar user={user} signOut={signOut} onSelectSection={setSelectedSection} />
      <DashboardContent user={user} selectedSection={selectedSection} />
    </div>
  );
};

export default Dashboard;
