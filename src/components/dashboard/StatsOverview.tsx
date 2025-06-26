import React from 'react';

interface StatsOverviewProps {
  title: string;
  value: string;
  change: string;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ title, value, change }) => {
  // Determine if change is positive or negative for text color
  const isPositive = change.startsWith('+');
  const changeColorClass = isPositive ? 'text-green-600' : 'text-red-500';

  return (
    <div className="card bg-white p-6 rounded-lg shadow" role="region" aria-label={title}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold text-green-600">{value}</p>
      <p className={`text-base text-gray-500`}>{change} from last week</p>
    </div>
  );
};

export default StatsOverview;