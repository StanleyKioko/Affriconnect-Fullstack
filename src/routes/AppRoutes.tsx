import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ChatAnalyticsPage from '../pages/ChatAnalyticsPage';
import ServiceListingsPage from '../pages/ServiceListingsPage';
import FeedbackPage from '../pages/FeedbackPage';
import SettingsPage from '../pages/SettingsPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/chat-analytics" element={<ChatAnalyticsPage />} />
      <Route path="/service-listings" element={<ServiceListingsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRoutes;