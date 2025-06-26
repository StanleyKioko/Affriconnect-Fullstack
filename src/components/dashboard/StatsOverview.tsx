import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  ariaLabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, ariaLabel }) => (
  <div className="bg-white shadow rounded-lg p-6" aria-label={ariaLabel}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-green-500">{change}</p>
  </div>
);

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 content-overlay p-8 rounded-lg">
      <StatCard 
        title="Active Users"
        value="12,345"
        change="+15% from last week"
        ariaLabel="Active Users"
      />
      <StatCard 
        title="Service Requests"
        value="4,567"
        change="+8% from last week"
        ariaLabel="Service Requests"
      />
      <StatCard 
        title="Resolved Complaints"
        value="789"
        change="+10% from last week"
        ariaLabel="Resolved Complaints"
      />
    </div>
  );
};

export default StatsOverview;