import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../../contexts/SidebarContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isOpen } = useContext(SidebarContext);

  const navItems = [
    { path: '/', icon: '🏠', label: 'Dashboard', tooltip: 'View key metrics' },
    { path: '/chat-analytics', icon: '💬', label: 'Chat Analytics', tooltip: 'Analyze user interactions' },
    { path: '/service-listings', icon: '📍', label: 'Service Listings', tooltip: 'Manage services' },
    { path: '/feedback', icon: '🗳️', label: 'Feedback', tooltip: 'View user feedback' },
    { path: '/settings', icon: '⚙️', label: 'Settings', tooltip: 'Configure system' },
  ];

  return (
    <div className={`sidebar w-64 bg-white shadow-lg flex flex-col gradient-bg text-white p-6 ${!isOpen ? 'sidebar-hidden' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="flex items-center mb-8">
        <img src="https://i.imgur.com/9ZqVGFm.png" alt="AfriConnect Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl font-bold">AfriConnect</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-4">
              <Link 
                to={item.path} 
                className={`flex items-center p-3 rounded hover:bg-green-600 ${location.pathname === item.path ? 'active-link' : ''}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="mr-2">{item.icon}</span> {item.label}
                <span className="tooltip ml-2">{item.tooltip}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;