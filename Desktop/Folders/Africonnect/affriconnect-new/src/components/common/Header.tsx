import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import './Header.css'; // We'll create this CSS file

const Header: React.FC = () => {
  const { toggleSidebar, isOpen } = useContext(SidebarContext);

  return (
    <header className="app-header" role="banner">
      <div className="header-left">
        <button 
          id="toggleSidebar" 
          className="sidebar-toggle"
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <span>{isOpen ? "Hide" : "Menu"}</span>
        </button>
        <h2 className="header-title">AFCON 2027 Admin Dashboard</h2>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search users, services..." 
            className="search-input" 
            aria-label="Search dashboard"
          />
        </div>
        
        <div className="header-actions">
          {/* Notifications */}
          <button className="notification-button" aria-label="Notifications">
            Alerts
            <span className="notification-badge">2</span>
          </button>
          
          {/* User Menu */}
          <div className="user-menu">
            <img src="https://i.imgur.com/8Km9tLL.png" alt="User Avatar" className="user-avatar" />
            <span className="user-name">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;