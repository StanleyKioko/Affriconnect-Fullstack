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
      {/* Action Buttons */}
      <div className="flex justify-end mb-6">
        <button 
          className="action-btn bg-green-600 text-white px-4 py-2 rounded-lg mr-2" 
          onClick={() => alert('Refreshing data...')}
        >
          Refresh Data
        </button>
        <button 
          className="action-btn bg-green-600 text-white px-4 py-2 rounded-lg" 
          onClick={() => alert('Exporting report...')}
        >
          Export Report
        </button>
      </div>
        
      {/* Stats Overview */}
      <div className="content-overlay p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
        <GridLayout columns={4}>
          <StatsOverview title="Active Users" value="12,345" change="+15%" />
          <StatsOverview title="Service Requests" value="4,567" change="+8%" />
          <StatsOverview title="Resolved Complaints" value="789" change="+10%" />
          <StatsOverview title="Total Revenue" value="$45,239" change="+15%" />
        </GridLayout>
      </div>
        
      {/* Maps and Recommendations */}
      <SplitLayout 
        leftWidth="w-full lg:w-2/3" 
        rightWidth="w-full lg:w-1/3"
        left={
          <div className="content-overlay p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold mb-4">Service Locations</h3>
            <MapView />
          </div>
        }
        right={
          <div className="content-overlay p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold mb-4">Language Distribution</h3>
            <div className="chart-container">
              <LanguageChart />
            </div>
          </div>
        }
      />
        
      {/* Service Recommendations */}
      <div className="content-overlay p-6 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-4">Recent Service Recommendations</h3>
        <ServiceRecommendations />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;