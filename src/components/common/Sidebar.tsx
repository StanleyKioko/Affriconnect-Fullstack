import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../../contexts/SidebarContext';

// You can replace these with actual icons or use a library like @heroicons/react
const Icon = ({ name }: { name: string }) => (
  <div className="nav-icon">{name[0].toUpperCase()}</div>
);

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

const Sidebar: React.FC = () => {
  const { isOpen } = useContext(SidebarContext);
  const location = useLocation();
  
  const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Stadium Finder', path: '/stadium-finder', icon: 'stadium' }, // Add this item
  { name: 'Chat Analytics', path: '/chat-analytics', icon: 'chat' },
  { name: 'Service Listings', path: '/services', icon: 'services' },
  { name: 'Feedback', path: '/feedback', icon: 'feedback' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

  return (
    <aside className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
      <div className="sidebar-logo">
        {isOpen ? (
          <>
            <div className="sidebar-logo-icon">A</div>
            <span className="sidebar-logo-text">AfriConnect</span>
          </>
        ) : (
          <div className="sidebar-logo-icon">A</div>
        )}
      </div>
      
      <nav>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                data-tooltip={item.name}
              >
                <Icon name={item.icon} />
                <span className="nav-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <span>© 2025 AfriConnect</span>
      </div>
    </aside>
  );
};

export default Sidebar;