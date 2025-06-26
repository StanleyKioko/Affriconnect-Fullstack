import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsOverview from '../components/dashboard/StatsOverview';
import ChatAnalytics from '../components/dashboard/ChatAnalytics';
import ServiceRecommendations from '../components/dashboard/ServiceRecommendations';
import MapView from '../components/dashboard/MapView';

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
      
      <StatsOverview />
      <ChatAnalytics />
      <ServiceRecommendations />
      <MapView />
    </DashboardLayout>
  );
};

export default DashboardPage;