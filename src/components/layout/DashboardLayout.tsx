import React, { useContext } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className="flex min-h-screen bg-[#f5f6f5] overflow-hidden">
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
          {/*<footer className="py-4 px-6 lg:px-8 text-center border-t border-[#d1d5db] bg-[#ffffff] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#4b5563] font-medium">
                © {new Date().getFullYear()} AfriConnect - AFCON 2027. All rights reserved.
              </p>
              <nav className="flex items-center space-x-6">
                <a
                  href="/privacy"
                  className="text-[#4b5563] hover:text-[#006400] transition-colors duration-200 font-medium"
                  aria-label="View Privacy Policy"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-[#4b5563] hover:text-[#006400] transition-colors duration-200 font-medium"
                  aria-label="View Terms of Service"
                >
                  Terms of Service
                </a>
                <a
                  href="/contact"
                  className="text-[#4b5563] hover:text-[#006400] transition-colors duration-200 font-medium"
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;