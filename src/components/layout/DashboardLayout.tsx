import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { SidebarProvider } from '../../contexts/SidebarContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 md:p-8 flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;