import React from 'react';
import LanguageChart from './LanguageChart';

const ChatAnalytics: React.FC = () => {
  return (
    <div className="content-overlay p-8 rounded-lg mb-8" role="region" aria-label="Chat Analytics">
      <h3 className="text-xl font-semibold mb-4">Chat Analytics</h3>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <h4 className="text-base font-medium">Top Queries</h4>
          <ul className="mt-2 text-base">
            <li>Restaurants near Nyayo Stadium (1,234)</li>
            <li>Transport to Kasarani (987)</li>
            <li>Hotel bookings in Nairobi (654)</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-base font-medium">Language Breakdown</h4>
          <div className="mt-2">
            <LanguageChart height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAnalytics;