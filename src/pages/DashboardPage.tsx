import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import GridLayout from '../components/layout/GridLayout';
import SplitLayout from '../components/layout/SplitLayout';
import StatsOverview from '../components/dashboard/StatsOverview';
import ServiceRecommendations from '../components/dashboard/ServiceRecommendations';
import MapView from '../components/dashboard/MapView';
import LanguageChart from '../components/dashboard/LanguageChart';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Page Header with Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 md:mb-0">
          Dashboard Overview
          <span className="ml-2 text-sm font-normal text-gray-500">Last updated: Today</span>
        </h2>
        
        <div className="flex space-x-3">
          <button 
            className="action-btn bg-white border border-green-600 text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-md transition-all duration-300 text-sm" 
            onClick={() => alert('Refreshing data...')}
          >
            Refresh Data
          </button>
          <button 
            className="action-btn bg-green-600 text-white hover:bg-green-700 px-3 py-1.5 rounded-md transition-all duration-300 text-sm" 
            onClick={() => alert('Exporting report...')}
          >
            Export Report
          </button>
        </div>
      </div>
      
      {/* Stats Overview - Top Cards */}
      <div className="content-overlay glass-morphism mb-6 transform transition-all duration-300 hover:shadow-lg">
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Key Metrics
          </h3>
          <GridLayout columns={4}>
            <StatsOverview title="Active Users" value="12,345" change="+15%" />
            <StatsOverview title="Service Requests" value="4,567" change="+8%" />
            <StatsOverview title="Resolved Complaints" value="789" change="+10%" />
            <StatsOverview title="Total Revenue" value="$45,239" change="+15%" />
          </GridLayout>
        </div>
      </div>
      
      {/* Middle Section - Map and Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Map Section - Takes 2/3 width on large screens */}
        <div className="content-overlay glass-morphism lg:col-span-2 transform transition-all duration-300 hover:shadow-lg h-[350px]">
          <div className="p-5 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Service Locations
            </h3>
            <div className="flex-grow">
              <MapView />
            </div>
          </div>
        </div>
        
        {/* Language Chart - Takes 1/3 width on large screens */}
        <div className="content-overlay glass-morphism transform transition-all duration-300 hover:shadow-lg h-[350px]">
          <div className="p-5 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Language Distribution
            </h3>
            <div className="flex-grow flex items-center justify-center">
              <LanguageChart />
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Recommendations */}
      <div className="content-overlay glass-morphism transform transition-all duration-300 hover:shadow-lg">
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Recent Service Recommendations
          </h3>
          <ServiceRecommendations />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;