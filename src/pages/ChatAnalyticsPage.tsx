import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const ChatAnalyticsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="content-overlay p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Chat Analytics</h2>
        <p>Detailed chat analytics content will go here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ChatAnalyticsPage;