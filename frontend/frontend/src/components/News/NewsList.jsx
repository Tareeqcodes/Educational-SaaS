import React, { useState } from 'react';

const NewsList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white p-4 transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="flex justify-between items-center">
          <h1 className={`text-xl transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>Edusphere</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>
        <ul className="mt-4">
          <li className="my-2">
            <a href="#" className={`block py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'text-center' : ''}`}>Faculties</a>
          </li>
          <li className="my-2">
            <a href="#" className={`block py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'text-center' : ''}`}>Profile</a>
          </li>
          <li className="my-2">
            <a href="#" className={`block py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'text-center' : ''}`}>Rentals</a>
          </li>
          <li className="my-2">
            <a href="#" className={`block py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'text-center' : ''}`}>Departments</a>
          </li>
          <li className="my-2">
            <a href="#" className={`block py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${isCollapsed ? 'text-center' : ''}`}>AI Tools</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <nav className="bg-gray-900 p-4 flex justify-end">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
        </nav>

        {/* Faculties Section */}
        <section className="mt-6">
          <h2 className="text-2xl mb-4">Faculties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="faculty1.jpg" alt="Science" className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-lg mt-2">Science</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="faculty2.jpg" alt="Engineering" className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-lg mt-2">Engineering</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="faculty3.jpg" alt="Arts" className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-lg mt-2">Arts</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="faculty4.jpg" alt="Law" className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-lg mt-2">Law</h3>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-6">
          <h2 className="text-2xl mb-4">Tools</h2>
          <div className="flex space-x-4">
            <div className="bg-gray-200 p-4 rounded-lg flex-1 text-center">AI Tools</div>
            <div className="bg-gray-200 p-4 rounded-lg flex-1 text-center">Calculators</div>
            <div className="bg-gray-200 p-4 rounded-lg flex-1 text-center">PDF Tools</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsList;
