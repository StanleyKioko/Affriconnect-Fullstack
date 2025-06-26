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
    <div 
      className={`sidebar ${!isOpen ? 'sidebar-hidden' : ''}`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-center py-6 mb-6 border-b border-white/10">
        <img src="https://i.imgur.com/9ZqVGFm.png" alt="AfriConnect Logo" className="w-10 h-10 mr-3" />
        <h1 className="text-2xl font-bold text-white">AfriConnect</h1>
      </div>
      
      <div className="px-4">
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path} className="tooltip-trigger">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active-link' : ''}`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="tooltip">{item.tooltip}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="mt-auto px-4 py-6 border-t border-white/10">
        <div className="flex items-center">
          <img src="https://i.imgur.com/8Km9tLL.png" alt="Admin" className="w-8 h-8 rounded-full border-2 border-white" />
          <div className="ml-3">
            <p className="text-white font-medium">Admin User</p>
            <p className="text-white/70 text-sm">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;