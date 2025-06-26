import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';

const Header: React.FC = () => {
  const { toggleSidebar, isOpen } = useContext(SidebarContext);

  return (
    <header className="header" role="banner">
      <div className="flex items-center">
        <button 
          id="toggleSidebar" 
          className="text-gray-600 hover:text-primary mr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-1" 
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          {/* Toggle text instead of icon */}
          <span className="font-medium text-sm">{isOpen ? "Hide" : "Menu"}</span>
        </button>
        <h2 className="text-xl font-semibold text-gray-800">AFCON 2027 Admin Dashboard</h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search users, services..." 
            className="search-input px-4" 
            aria-label="Search dashboard"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Notifications - text-based */}
          <button className="relative px-2 py-1 text-gray-600 hover:text-primary rounded-md hover:bg-gray-100 text-sm font-medium" aria-label="Notifications">
            Alerts
            <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 inline-flex items-center justify-center">2</span>
          </button>
          
          {/* User Menu */}
          <div className="flex items-center">
            <img src="https://i.imgur.com/8Km9tLL.png" alt="User Avatar" className="w-7 h-7 rounded-full border border-gray-200" />
            <span className="ml-2 text-sm font-medium hidden md:block">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;