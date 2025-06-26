import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  ariaLabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, ariaLabel }) => {
  return (
    <div className="card bg-white p-6 rounded-lg shadow" role="region" aria-label={ariaLabel}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold text-green-600">{value}</p>
      <p className="text-base text-gray-500">{change}</p>
    </div>
  );
};

export default StatCard;