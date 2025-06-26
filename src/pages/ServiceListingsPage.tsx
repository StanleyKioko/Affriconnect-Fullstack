import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const ServiceListingsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="content-overlay p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Service Listings</h2>
        <p>Service listings content will go here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ServiceListingsPage;