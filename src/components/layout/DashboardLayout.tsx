import React, { useContext } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import Footer from '../common/Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className="flex min-h-screen bg-[#f5f6f5] flex-col">
      <div className="flex flex-1 relative">
        <Sidebar />
        <div
          className="main-content"
          style={{ marginLeft: isOpen ? '280px' : '88px' }}
        >
          <Header />
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;