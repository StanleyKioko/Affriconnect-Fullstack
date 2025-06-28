import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import MapView from '../components/dashboard/MapView';
import ServiceRecommendations from '../components/dashboard/ServiceRecommendations';
import './DashboardPage.css'; // New CSS file for landing page

const DashboardPage: React.FC = () => {
  const [isExploring, setIsExploring] = useState(false);

  // Simulate ticket booking action
  const handleBookTickets = () => {
    setIsExploring(true);
    setTimeout(() => {
      setIsExploring(false);
      alert('Redirecting to ticket booking...');
    }, 1000);
  };

  // Simulate explore matches action
  const handleExploreMatches = () => {
    alert('Exploring upcoming matches...');
  };

  // Simulate join community action
  const handleJoinCommunity = () => {
    alert('Joining AFCON fan community...');
  };

  return (
    <DashboardLayout>
      <div className="landing-container animate-fade-in-up">
        {/* Hero Banner */}
        <div className="hero-banner">
          <div className="banner-content">
            <h1 className="banner-title">Welcome to AFCON 2027!</h1>
            <p className="banner-subtitle">
              Experience the thrill of African football in Kenya. Book your tickets, explore matches, and join the fan community!
            </p>
            <div className="banner-actions">
              <button
                className="action-btn btn-primary"
                onClick={handleBookTickets}
                disabled={isExploring}
                aria-label="Book AFCON 2027 tickets"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                {isExploring ? 'Loading...' : 'Book Tickets'}
              </button>
              <button
                className="action-btn btn-secondary"
                onClick={handleExploreMatches}
                aria-label="Explore AFCON 2027 matches"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 12h6m-3-3v6" />
                </svg>
                Explore Matches
              </button>
            </div>
          </div>
        </div>

        {/* Fan Engagement Section */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="18" cy="7" r="3" />
              </svg>
              Join the AFCON Fan Community
            </h3>
          </div>
          <div className="section-content">
            <div className="fan-engagement">
              <div className="fan-stats">
                <div className="stat-item">
                  <span className="stat-value">50K+</span>
                  <span className="stat-label">Active Fans</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">10K+</span>
                  <span className="stat-label">Posts Shared</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">Fan Satisfaction</span>
                </div>
              </div>
              <button
                className="action-btn btn-primary"
                onClick={handleJoinCommunity}
                aria-label="Join AFCON fan community"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                </svg>
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Match Highlights Section */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 12h6m-3-3v6" />
              </svg>
              Match Highlights
            </h3>
          </div>
          <div className="section-content">
            <div className="match-list">
              <div className="match-card">
                <div className="match-time">
                  <div className="match-time-value">14:00</div>
                  <div className="match-time-label">Jun 30</div>
                </div>
                <div className="match-teams">
                  <div className="team">
                    <div className="team-flag" style={{ backgroundImage: 'url(/flags/kenya.png)' }}></div>
                    <div className="team-name">Kenya</div>
                  </div>
                  <div className="match-versus">vs</div>
                  <div className="team">
                    <div className="team-flag" style={{ backgroundImage: 'url(/flags/nigeria.png)' }}></div>
                    <div className="team-name">Nigeria</div>
                  </div>
                </div>
                <div className="match-venue">Nairobi Stadium</div>
                <div className="match-actions">
                  <button
                    className="action-btn btn-primary"
                    onClick={handleBookTickets}
                    aria-label="Book tickets for Kenya vs Nigeria"
                  >
                    Book
                  </button>
                </div>
              </div>
              <div className="match-card">
                <div className="match-time">
                  <div className="match-time-value">17:00</div>
                  <div className="match-time-label">Jun 30</div>
                </div>
                <div className="match-teams">
                  <div className="team">
                    <div className="team-flag" style={{ backgroundImage: 'url(/flags/ghana.png)' }}></div>
                    <div className="team-name">Ghana</div>
                  </div>
                  <div className="match-versus">vs</div>
                  <div className="team">
                    <div className="team-flag" style={{ backgroundImage: 'url(/flags/egypt.png)' }}></div>
                    <div className="team-name">Egypt</div>
                  </div>
                </div>
                <div className="match-venue">Kisumu Arena</div>
                <div className="match-actions">
                  <button
                    className="action-btn btn-primary"
                    onClick={handleBookTickets}
                    aria-label="Book tickets for Ghana vs Egypt"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stadium & Hotel Map Section */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Explore Stadiums & Hotels
            </h3>
          </div>
          <div className="section-content h-full">
            <MapView />
          </div>
        </div>

        {/* Service Recommendations */}
        <div className="content-overlay glass-morphism">
          <div className="section-header">
            <h3 className="section-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              Plan Your AFCON Experience
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