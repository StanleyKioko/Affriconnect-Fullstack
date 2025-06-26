import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import MatchSchedule from '../components/MatchSchedule';
import HotelFinder from '../components/HotelFinder';
import MapExplorer from '../components/MapExplorer';
import HealthcareFacilities from '../components/HealthcareFacilities';
import EntertainmentVenues from '../components/EntertainmentVenues';

const VisitorCenterPage = () => {
  const [activeTab, setActiveTab] = useState('matches');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'matches':
        return <MatchSchedule />;
      case 'hotels':
        return <HotelFinder />;
      case 'map':
        return <MapExplorer />;
      case 'healthcare':
        return <HealthcareFacilities />;
      case 'entertainment':
        return <EntertainmentVenues />;
      default:
        return <MatchSchedule />;
    }
  };

  return (
    <DashboardLayout>
      <div className="visitor-center">
        <div className="hero-banner glass-morphism">
          <div className="banner-content">
            <h1 className="banner-title">AFCON 2027 Visitor Center</h1>
            <p className="banner-subtitle">Your complete guide to the African Cup of Nations in Kenya</p>
          </div>
        </div>
        
        <div className="visitor-tabs">
          <button 
            className={`visitor-tab ${activeTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveTab('matches')}
          >
            <span className="tab-icon">⚽</span>
            <span className="tab-label">Match Schedule</span>
          </button>
          
          <button 
            className={`visitor-tab ${activeTab === 'hotels' ? 'active' : ''}`}
            onClick={() => setActiveTab('hotels')}
          >
            <span className="tab-icon">🏨</span>
            <span className="tab-label">Find Hotels</span>
          </button>
          
          <button 
            className={`visitor-tab ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            <span className="tab-icon">🗺️</span>
            <span className="tab-label">Map & Directions</span>
          </button>
          
          <button 
            className={`visitor-tab ${activeTab === 'entertainment' ? 'active' : ''}`}
            onClick={() => setActiveTab('entertainment')}
          >
            <span className="tab-icon">🍽️</span>
            <span className="tab-label">Entertainment</span>
          </button>
          
          <button 
            className={`visitor-tab ${activeTab === 'healthcare' ? 'active' : ''}`}
            onClick={() => setActiveTab('healthcare')}
          >
            <span className="tab-icon">🏥</span>
            <span className="tab-label">Healthcare</span>
          </button>
        </div>
        
        <div className="visitor-content">
          {renderTabContent()}
        </div>
        
        <div className="visitor-help glass-morphism">
          <div className="help-content">
            <h3>Need Help?</h3>
            <p>Contact our AFCON 2027 visitor support team</p>
            <button className="action-btn">Live Chat Support</button>
          </div>
          <div className="emergency-contacts">
            <h4>Emergency Contacts</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-label">Police:</span>
                <span className="contact-value">999</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Ambulance:</span>
                <span className="contact-value">112</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Tourist Support:</span>
                <span className="contact-value">+254-20-555-1234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VisitorCenterPage;