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