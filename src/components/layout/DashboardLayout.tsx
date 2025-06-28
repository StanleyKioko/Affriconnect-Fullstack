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
    <div className="flex min-h-screen bg-[#f5f6f5] overflow-hidden flex-col">
      <div className="flex flex-1 relative">
        <Sidebar />
        <div
          className="flex-1 flex flex-col transition-all duration-300 ease-in-out main-content"
          style={{ marginLeft: isOpen ? '280px' : '88px' }}
        >
          <Header />
          <div className="flex-1 flex flex-col">
            <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-6 animate-fade-in-up">
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;