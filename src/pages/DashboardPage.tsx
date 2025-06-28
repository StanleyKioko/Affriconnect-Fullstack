import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import MapView from '../components/dashboard/MapView';
import ServiceRecommendations from '../components/dashboard/ServiceRecommendations';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  const [isExploring, setIsExploring] = useState(false);
  const [countdown, setCountdown] = useState('');

  // Simulate ticket booking
  const handleBookTickets = () => {
    setIsExploring(true);
    setTimeout(() => {
      setIsExploring(false);
      alert('Redirecting to ticket booking...');
    }, 1000);
  };

  // Simulate explore matches
  const handleExploreMatches = () => {
    alert('Exploring upcoming matches...');
  };

  // Simulate explore venues
  const handleExploreVenues = () => {
    alert('Viewing all venues...');
  };

  // Simulate plan visit
  const handlePlanVisit = () => {
    alert('Planning your AFCON visit...');
  };

  // Simulate join community
  const handleJoinCommunity = () => {
    alert('Joining AFCON fan community...');
  };

  // Simulate view news
  const handleViewNews = () => {
    alert('Viewing latest news...');
  };

  // Simulate shop merch
  const handleShopMerch = () => {
    alert('Redirecting to merchandise shop...');
  };

  // Simulate helpdesk
  const handleHelpdesk = () => {
    alert('Opening helpdesk...');
  };

  // Simulate explore Kenya
  const handleExploreKenya = () => {
    alert('Exploring Kenya beyond football...');
  };

  // Simulate app download
  const handleDownloadApp = () => {
    alert('Redirecting to app download...');
  };

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-07-21T14:00:00+03:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      setCountdown(`${days} Days Until Kickoff`);
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-container animate-fade-in-up">
        {/* Hero Section */}
        <div className="hero-banner" role="banner">
          <div className="banner-content">
            <h1 className="banner-title">Welcome to AFCON 2027 – Kenya</h1>
            <p className="banner-subtitle">
              Your ultimate guide to matches, travel, hotels, and events during the Africa Cup of Nations 2027.
            </p>
            <div className="banner-actions">
              <button
                className="action-btn btn-primary"
                onClick={handleExploreMatches}
                aria-label="View AFCON 2027 match schedule"
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
                View Match Schedule
              </button>
              <button
                className="action-btn btn-primary"
                onClick={handleExploreVenues}
                aria-label="Explore AFCON 2027 venues"
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Explore Venues
              </button>
              <button
                className="action-btn btn-secondary"
                onClick={handlePlanVisit}
                aria-label="Plan your AFCON 2027 visit"
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
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>

        {/* Tournament Overview */}
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
                <path d="M12 2a10 10 0 0 0-9 5.56L3 21l10-3 10 3V7.56A10 10 0 0 0 12 2z" />
                <path d="M12 2v16" />
              </svg>
              AFCON 2027 Overview
            </h3>
          </div>
          <div className="section-content">
            <div className="tournament-info">
              <div className="info-item">
                <span className="info-label">Dates</span>
                <span className="info-value">July 21 – August 15, 2025</span>
              </div>
              <div className="info-item">
                <span className="info-label">Teams</span>
                <span className="info-value">24</span>
              </div>
              <div className="info-item">
                <span className="info-label">Matches</span>
                <span className="info-value">52</span>
              </div>
              <div className="info-item">
                <span className="info-label">Host Cities</span>
                <span className="info-value">Nairobi, Kisumu, Mombasa, Eldoret</span>
              </div>
              <div className="info-item countdown">
                <span className="info-label">Kickoff Countdown</span>
                <span className="info-value">{countdown}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stadiums & Match Venues */}
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
              Stadiums & Match Venues
            </h3>
            <button
              className="action-btn btn-primary"
              onClick={handleExploreVenues}
              aria-label="See all AFCON 2027 venues"
            >
              See All Venues
            </button>
          </div>
          <div className="section-content">
            <div className="venue-list">
              <div className="venue-card">
                <div className="venue-info">
                  <div className="venue-name">Nyayo National Stadium</div>
                  <div className="venue-meta">
                    <span>Capacity: 30,000</span>
                    <span>City: Nairobi</span>
                    <span>Matches: 12</span>
                  </div>
                </div>
              </div>
              <div className="venue-card">
                <div className="venue-info">
                  <div className="venue-name">Kisumu Stadium</div>
                  <div className="venue-meta">
                    <span>Capacity: 15,000</span>
                    <span>City: Kisumu</span>
                    <span>Matches: 8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="venue-map">
              <MapView />
            </div>
          </div>
        </div>

        {/* Plan Your Trip */}
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
              Plan Your Trip
            </h3>
          </div>
          <div className="section-content">
            <ServiceRecommendations />
            <div className="trip-links">
              <a href="#hotels" className="trip-link" onClick={() => alert('Viewing hotels...')}>
                Hotel Finder
              </a>
              <a href="#transport" className="trip-link" onClick={() => alert('Viewing transport options...')}>
                Transport Options
              </a>
              <a href="#city-guides" className="trip-link" onClick={() => alert('Viewing city guides...')}>
                City Guides
              </a>
              <a href="#weather" className="trip-link" onClick={() => alert('Viewing weather info...')}>
                Weather Info
              </a>
              <a href="#visa" className="trip-link" onClick={() => alert('Viewing visa requirements...')}>
                Visa & Entry Requirements
              </a>
            </div>
          </div>
        </div>

        {/* Latest News & Announcements */}
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
                <path d="M12 2v20M2 10h20M2 14h20" />
              </svg>
              Latest News & Announcements
            </h3>
            <button
              className="action-btn btn-primary"
              onClick={handleViewNews}
              aria-label="View all AFCON 2027 news"
            >
              View All
            </button>
          </div>
          <div className="section-content">
            <div className="news-list">
              <div className="news-item">
                <div className="news-title">Fixtures Released!</div>
                <div className="news-desc">AFCON 2027 match schedule announced. Check out the opening games.</div>
              </div>
              <div className="news-item">
                <div className="news-title">Ticket Sales Open</div>
                <div className="news-desc">Book your tickets now for Nairobi and Kisumu matches!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Merch & Ticketing Info */}
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
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Merch & Ticketing
            </h3>
          </div>
          <div className="section-content">
            <div className="merch-info">
              <p>Get official AFCON 2027 shirts, scarves, and flags.</p>
              <button
                className="action-btn btn-primary"
                onClick={handleShopMerch}
                aria-label="Shop AFCON 2027 merchandise"
              >
                Shop Now
              </button>
            </div>
            <div className="ticket-links">
              <a href="#tickets" className="ticket-link" onClick={() => alert('Viewing ticket options...')}>
                How to Buy Tickets
              </a>
              <a href="#packages" className="ticket-link" onClick={() => alert('Viewing match packages...')}>
                Match Packages
              </a>
              <a href="#fan-zones" className="ticket-link" onClick={() => alert('Viewing fan zone passes...')}>
                Fan Zone Passes
              </a>
              <a href="#terms" className="ticket-link" onClick={() => alert('Viewing terms and refund policy...')}>
                Terms & Refund Policy
              </a>
            </div>
          </div>
        </div>

        {/* Visitor Help Section */}
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
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Visitor Help
            </h3>
          </div>
          <div className="section-content">
            <div className="help-links">
              <a href="#faqs" className="help-link" onClick={() => alert('Viewing FAQs...')}>
                FAQs
              </a>
              <a href="#helpdesk" className="help-link" onClick={handleHelpdesk}>
                Chatbot/Helpdesk
              </a>
              <a href="#emergency" className="help-link" onClick={() => alert('Viewing emergency numbers...')}>
                Emergency Numbers
              </a>
              <div className="language-toggle">
                <span className="language-option">English</span>
                <span className="language-option">Swahili</span>
                <span className="language-option">French</span>
                <span className="language-option">Arabic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Kenya */}
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
              Experience Kenya
            </h3>
          </div>
          <div className="section-content">
            <div className="experience-info">
              <p>Discover Kenyan culture, visit Maasai Mara, or enjoy local nightlife.</p>
              <button
                className="action-btn btn-primary"
                onClick={handleExploreKenya}
                aria-label="Explore Kenya beyond football"
              >
                Explore Kenya
              </button>
            </div>
          </div>
        </div>

        {/* Partners & Sponsors */}
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
              </svg>
              Partners & Sponsors
            </h3>
          </div>
          <div className="section-content">
            <div className="sponsor-list">
              <img src="/sponsors/caf.png" alt="CAF logo" className="sponsor-logo" />
              <img src="/sponsors/safaricom.png" alt="Safaricom logo" className="sponsor-logo" />
              <img src="/sponsors/kenya-airways.png" alt="Kenya Airways logo" className="sponsor-logo" />
            </div>
          </div>
        </div>

        {/* Mobile App CTA */}
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
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              Get the AFCON 2027 App
            </h3>
          </div>
          <div className="section-content">
            <div className="app-cta">
              <p>Download the AFCON 2027 Kenya App – Get match alerts, maps, bookings, and more.</p>
              <button
                className="action-btn btn-primary"
                onClick={handleDownloadApp}
                aria-label="Download AFCON 2027 app"
              >
                Download Now
              </button>
            </div>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="social-share">
          <button
            className="share-btn"
            onClick={() => alert('Sharing to X...')}
            aria-label="Share on X"
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
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
            Share on X
          </button>
          <button
            className="share-btn"
            onClick={() => alert('Sharing to Facebook...')}
            aria-label="Share on Facebook"
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Share on Facebook
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;