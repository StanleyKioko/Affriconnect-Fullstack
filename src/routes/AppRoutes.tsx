import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ChatAnalyticsPage from '../pages/ChatAnalyticsPage';
import ServiceListingsPage from '../pages/ServiceListingsPage';
import FeedbackPage from '../pages/FeedbackPage';
import SettingsPage from '../pages/SettingsPage';
import StadiumFinderPage from '../pages/StadiumFinderPage'; // Add this import

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/chat-analytics" element={<ChatAnalyticsPage />} />
      <Route path="/services" element={<ServiceListingsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/stadium-finder" element={<StadiumFinderPage />} /> {/* Add this route */}
    </Routes>
  );
};

export default AppRoutes;