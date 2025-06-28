import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsOverview from '../components/dashboard/StatsOverview';
import ServiceRecommendations from '../components/dashboard/ServiceRecommendations';
import MapView from '../components/dashboard/MapView';
import LanguageChart from '../components/dashboard/LanguageChart';
import './DashboardPage.css'; // Import the new CSS file

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        {/* Page Header with Action Buttons */}
        <div className="dashboard-header flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="dashboard-title">
              Dashboard Overview
              <span className="dashboard-subtitle">Last updated: Today</span>
            </h2>
          </div>
          
          <div className="dashboard-actions">
            <button 
              className="action-btn btn-secondary"
              onClick={() => alert('Refreshing data...')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
              </svg>
              Refresh Data
            </button>
            <button 
              className="action-btn btn-primary"
              onClick={() => alert('Exporting report...')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export Report
            </button>
          </div>
        </div>
        
        {/* Stats Overview - Top Cards */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Key Metrics
            </h3>
          </div>
          <div className="section-content">
            <div className="stats-grid">
              <StatsOverview title="Active Users" value="12,345" change="+15%" />
              <StatsOverview title="Service Requests" value="4,567" change="+8%" />
              <StatsOverview title="Resolved Complaints" value="789" change="+10%" />
              <StatsOverview title="Total Revenue" value="$45,239" change="+15%" />
            </div>
          </div>
        </div>
        
        {/* Middle Section - Map and Chart */}
        <div className="map-chart-grid">
          {/* Map Section */}
          <div className="map-container content-overlay glass-morphism">
            <div className="section-header">
              <h3 className="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Service Locations
              </h3>
            </div>
            <div className="section-content h-full">
              <MapView />
            </div>
          </div>
          
          {/* Language Chart */}
          <div className="chart-container content-overlay glass-morphism">
            <div className="chart-header">
              <h3 className="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                Language Distribution
              </h3>
            </div>
            <div className="chart-body">
              <LanguageChart />
            </div>
          </div>
        </div>
        
        {/* Service Recommendations */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              Recent Service Recommendations
            </h3>
          </div>
          <div className="section-content">
            <ServiceRecommendations />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;