import React from 'react';

interface StatsOverviewProps {
  title: string;
  value: string;
  change: string;
  icon?: React.ReactNode;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ title, value, change, icon }) => {
  // Determine if change is positive or negative for text color
  const isPositive = change.startsWith('+');
  const changeColorClass = isPositive ? 'text-green-600' : 'text-red-500';

  return (
    <div className="stat-card animate-fade-in-up" role="region" aria-label={title}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {/* Removed icon container */}
      </div>
      
      <p className="text-2xl font-bold text-gray-800 mb-2">{value}</p>
      
      <div className={`flex items-center ${changeColorClass} text-xs`}>
        {/* Removed change icon */}
        <span className="font-medium">{change}</span>
        <span className="ml-1 text-gray-500">from last week</span>
      </div>
    </div>
  );
};

export default StatsOverview;