import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import GridLayout from '../components/layout/GridLayout';
import SplitLayout from '../components/layout/SplitLayout';
import ChatAnalytics from '../components/dashboard/ChatAnalytics';
import LanguageChart from '../components/dashboard/LanguageChart';
import StatsOverview from '../components/dashboard/StatsOverview';

const ChatAnalyticsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="content-overlay p-6 rounded-lg fade-in">
        <h2 className="text-2xl font-bold mb-6">Chat Analytics</h2>
        
        {/* Stats overview in a horizontal grid */}
        <section className="section">
          <h3 className="text-lg font-semibold mb-3">Key Statistics</h3>
          <GridLayout columns={4}>
            <StatsOverview title="Total Chats" value="2,547" change="+12%" />
            <StatsOverview title="Active Users" value="1,423" change="+8%" />
            <StatsOverview title="Response Rate" value="92%" change="+5%" />
            <StatsOverview title="Avg. Response Time" value="2m 12s" change="-10%" />
          </GridLayout>
        </section>
        
        {/* Two column layout for charts and analytics */}
        <section className="section mt-6">
          <SplitLayout 
            left={
              <div className="chart-container h-full">
                <h3 className="text-lg font-semibold mb-3">Language Distribution</h3>
                <LanguageChart />
              </div>
            }
            right={
              <div className="chart-container h-full">
                <h3 className="text-lg font-semibold mb-3">Chat Analytics</h3>
                <ChatAnalytics />
              </div>
            }
          />
        </section>
        
        {/* Three column layout for additional metrics */}
        <section className="section mt-6">
          <h3 className="text-lg font-semibold mb-3">Detailed Metrics</h3>
          <GridLayout columns={3}>
            <div className="stat-card">
              <h4 className="font-medium text-gray-500">Popular Topics</h4>
              <ul className="mt-2">
                <li className="py-1">Business Services (34%)</li>
                <li className="py-1">Technical Support (28%)</li>
                <li className="py-1">Product Inquiries (22%)</li>
                <li className="py-1">Other (16%)</li>
              </ul>
            </div>
            <div className="stat-card">
              <h4 className="font-medium text-gray-500">User Engagement</h4>
              <ul className="mt-2">
                <li className="py-1">Message Rate: 42/day</li>
                <li className="py-1">Avg. Session: 12 minutes</li>
                <li className="py-1">Returning Users: 64%</li>
              </ul>
            </div>
            <div className="stat-card">
              <h4 className="font-medium text-gray-500">Conversion Metrics</h4>
              <ul className="mt-2">
                <li className="py-1">Service Bookings: 245</li>
                <li className="py-1">Conversion Rate: 18%</li>
                <li className="py-1">Follow-ups: 157</li>
              </ul>
            </div>
          </GridLayout>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default ChatAnalyticsPage;