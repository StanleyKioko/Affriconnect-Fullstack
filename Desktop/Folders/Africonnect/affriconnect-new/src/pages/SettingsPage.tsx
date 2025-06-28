import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const SettingsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="content-overlay p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <p>Dashboard settings will go here.</p>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;