import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';

const Header: React.FC = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header className="bg-white shadow p-5 flex justify-between items-center" role="banner">
      <div className="flex items-center">
        <button 
          id="toggleSidebar" 
          className="text-gray-600 mr-4 focus:outline-none" 
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold">AFCON 2027 Admin Dashboard</h2>
      </div>
      <div className="flex items-center">
        <input 
          type="text" 
          id="searchInput" 
          placeholder="Search users, services..." 
          className="border rounded-lg p-2.5 w-64 focus:ring-2 focus:ring-green-500" 
          aria-label="Search dashboard"
        />
        <button className="ml-2 text-gray-600 hover:text-green-600" aria-label="Search">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <div className="flex items-center ml-4">
          <img src="https://i.imgur.com/8Km9tLL.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <span className="ml-2 text-lg">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;