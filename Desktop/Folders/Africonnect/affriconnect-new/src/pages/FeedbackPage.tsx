import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const FeedbackPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="content-overlay p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">User Feedback</h2>
        <p>User feedback content will go here.</p>
      </div>
    </DashboardLayout>
  );
};

export default FeedbackPage;