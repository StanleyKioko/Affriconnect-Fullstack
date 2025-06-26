import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import GridLayout from '../components/layout/GridLayout';
import SplitLayout from '../components/layout/SplitLayout';
import ChatAnalytics from '../components/dashboard/ChatAnalytics';
import LanguageChart from '../components/dashboard/LanguageChart';
import StatsOverview from '../components/dashboard/StatsOverview';

type StatsPeriod = 'week' | 'month';
type StatsData = {
  [key in StatsPeriod]: {
    totalChats: string;
    totalChange: string;
    activeUsers: string;
    activeChange: string;
    responseRate: string;
    responseRateChange: string;
    responseTime: string;
    responseTimeChange: string;
  };
};

const ChatAnalyticsPage: React.FC = () => {
  // State for date range filter
  const [dateRange, setDateRange] = useState<StatsPeriod>('week');
  
  // Sample time period options
  const timePeriods = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' }
  ];
  
  // Dynamic stats based on selected date range
  const statsData: StatsData = {
    week: {
      totalChats: '2,547',
      totalChange: '+12%',
      activeUsers: '1,423',
      activeChange: '+8%',
      responseRate: '92%',
      responseRateChange: '+5%',
      responseTime: '2m 12s',
      responseTimeChange: '-10%'
    },
    month: {
      totalChats: '10,843',
      totalChange: '+18%',
      activeUsers: '5,762',
      activeChange: '+15%',
      responseRate: '89%',
      responseRateChange: '+2%',
      responseTime: '2m 45s',
      responseTimeChange: '-5%'
    },
    // Add more time periods as needed
  };
  
  // Use week as default if selected period data doesn't exist
  const currentStats = statsData[dateRange] || statsData.week;

  return (
    <DashboardLayout>
      <div className="chat-analytics-dashboard">
        {/* Page Header with Controls */}
        <div className="page-header glass-morphism">
          <div className="header-content">
            <div className="header-title">
              <h2 className="text-2xl font-bold">Chat Analytics</h2>
              <p className="text-gray-500">Track conversation metrics across AFCON venues</p>
            </div>
            
            <div className="header-controls">
              <div className="date-selector">
                <label htmlFor="timeRange" className="text-sm font-medium mr-2">Time Period:</label>
                <select 
                  id="timeRange" 
                  className="search-input" 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as StatsPeriod)}
                >
                  {timePeriods.map(period => (
                    <option key={period.value} value={period.value}>{period.label}</option>
                  ))}
                </select>
              </div>
              
              <button className="action-btn">
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats overview in a horizontal grid */}
        <section className="stats-overview-section">
          <GridLayout columns={4}>
            <StatsOverview 
              title="Total Chats" 
              value={currentStats.totalChats} 
              change={currentStats.totalChange} 
            />
            <StatsOverview 
              title="Active Users" 
              value={currentStats.activeUsers} 
              change={currentStats.activeChange} 
            />
            <StatsOverview 
              title="Response Rate" 
              value={currentStats.responseRate} 
              change={currentStats.responseRateChange} 
            />
            <StatsOverview 
              title="Avg. Response Time" 
              value={currentStats.responseTime} 
              change={currentStats.responseTimeChange} 
            />
          </GridLayout>
        </section>
        
        {/* Two column layout for charts and analytics */}
        <section className="analytics-section">
          <SplitLayout 
            left={
              <div className="chart-card glass-morphism">
                <div className="card-header">
                  <h3 className="text-lg font-semibold">Language Distribution</h3>
                  <div className="card-actions">
                    <select className="mini-select">
                      <option>All Venues</option>
                      <option>Kasarani Stadium</option>
                      <option>Nyayo Stadium</option>
                    </select>
                  </div>
                </div>
                <div className="chart-container">
                  <LanguageChart />
                </div>
                <div className="language-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#34D399'}}></span>
                    <span className="legend-label">Swahili: 45%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#10B981'}}></span>
                    <span className="legend-label">English: 35%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{backgroundColor: '#059669'}}></span>
                    <span className="legend-label">Sheng: 20%</span>
                  </div>
                </div>
              </div>
            }
            right={
              <div className="chart-card glass-morphism">
                <div className="card-header">
                  <h3 className="text-lg font-semibold">Conversation Trends</h3>
                  <div className="card-actions">
                    <button className="tab-btn active">Daily</button>
                    <button className="tab-btn">Weekly</button>
                    <button className="tab-btn">Monthly</button>
                  </div>
                </div>
                <div className="trend-metrics">
                  <div className="trend-metric">
                    <span className="metric-value">+24%</span>
                    <span className="metric-label">Conversation Growth</span>
                  </div>
                  <div className="trend-metric">
                    <span className="metric-value">87%</span>
                    <span className="metric-label">Query Resolution</span>
                  </div>
                </div>
                <div className="trend-chart">
                  {/* Replace this with an appropriate chart component */}
                  <div className="placeholder-chart">
                    <div className="bar" style={{height: '30%'}}></div>
                    <div className="bar" style={{height: '50%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '45%'}}></div>
                    <div className="bar" style={{height: '65%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '55%'}}></div>
                  </div>
                </div>
              </div>
            }
          />
        </section>
        
        {/* Popular Queries & Topics */}
        <section className="queries-section glass-morphism">
          <div className="section-header">
            <h3 className="text-lg font-semibold">Popular Queries & Topics</h3>
            <button className="text-sm text-primary">See all queries</button>
          </div>
          
          <div className="query-grid">
            <div className="query-card">
              <div className="query-rank">#1</div>
              <div className="query-content">
                <h4 className="query-title">Where can I find food near Kasarani Stadium?</h4>
                <div className="query-meta">
                  <span className="query-count">1,245 mentions</span>
                  <span className="query-trend up">+18% this week</span>
                </div>
              </div>
            </div>
            
            <div className="query-card">
              <div className="query-rank">#2</div>
              <div className="query-content">
                <h4 className="query-title">How to get to Nyayo Stadium from the city center?</h4>
                <div className="query-meta">
                  <span className="query-count">987 mentions</span>
                  <span className="query-trend up">+12% this week</span>
                </div>
              </div>
            </div>
            
            <div className="query-card">
              <div className="query-rank">#3</div>
              <div className="query-content">
                <h4 className="query-title">Hotels near AFCON venues</h4>
                <div className="query-meta">
                  <span className="query-count">876 mentions</span>
                  <span className="query-trend up">+5% this week</span>
                </div>
              </div>
            </div>
            
            <div className="query-card">
              <div className="query-rank">#4</div>
              <div className="query-content">
                <h4 className="query-title">AFCON ticket prices</h4>
                <div className="query-meta">
                  <span className="query-count">754 mentions</span>
                  <span className="query-trend down">-3% this week</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three column layout for additional metrics */}
        <section className="detailed-metrics">
          <GridLayout columns={3}>
            <div className="metric-card glass-morphism">
              <h4 className="metric-header">Popular Topics</h4>
              <ul className="metric-list">
                <li className="metric-item">
                  <span className="topic-name">Stadium Directions</span>
                  <div className="topic-bar-container">
                    <div className="topic-bar" style={{width: '65%'}}>
                      <span className="topic-percentage">34%</span>
                    </div>
                  </div>
                </li>
                <li className="metric-item">
                  <span className="topic-name">Food & Dining</span>
                  <div className="topic-bar-container">
                    <div className="topic-bar" style={{width: '53%'}}>
                      <span className="topic-percentage">28%</span>
                    </div>
                  </div>
                </li>
                <li className="metric-item">
                  <span className="topic-name">Accommodation</span>
                  <div className="topic-bar-container">
                    <div className="topic-bar" style={{width: '42%'}}>
                      <span className="topic-percentage">22%</span>
                    </div>
                  </div>
                </li>
                <li className="metric-item">
                  <span className="topic-name">Other</span>
                  <div className="topic-bar-container">
                    <div className="topic-bar" style={{width: '30%'}}>
                      <span className="topic-percentage">16%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="metric-card glass-morphism">
              <h4 className="metric-header">User Engagement</h4>
              <div className="engagement-stats">
                <div className="engagement-stat">
                  <div className="stat-circle">
                    <span className="stat-value">42</span>
                  </div>
                  <span className="stat-label">Messages per day</span>
                </div>
                <div className="engagement-stat">
                  <div className="stat-circle">
                    <span className="stat-value">12m</span>
                  </div>
                  <span className="stat-label">Average session</span>
                </div>
                <div className="engagement-stat">
                  <div className="stat-circle">
                    <span className="stat-value">64%</span>
                  </div>
                  <span className="stat-label">Returning users</span>
                </div>
              </div>
            </div>
            
            <div className="metric-card glass-morphism">
              <h4 className="metric-header">Service Conversions</h4>
              <div className="conversion-funnel">
                <div className="funnel-step">
                  <div className="step-info">
                    <span className="step-name">Queries</span>
                    <span className="step-count">2,547</span>
                  </div>
                  <div className="funnel-bar" style={{width: '100%'}}></div>
                </div>
                <div className="funnel-step">
                  <div className="step-info">
                    <span className="step-name">Service Info</span>
                    <span className="step-count">1,358</span>
                  </div>
                  <div className="funnel-bar" style={{width: '65%'}}></div>
                </div>
                <div className="funnel-step">
                  <div className="step-info">
                    <span className="step-name">Bookings</span>
                    <span className="step-count">245</span>
                  </div>
                  <div className="funnel-bar" style={{width: '35%'}}></div>
                </div>
                <div className="funnel-rate">
                  <span className="rate-label">Conversion Rate</span>
                  <span className="rate-value">18%</span>
                </div>
              </div>
            </div>
          </GridLayout>
        </section>
        
        {/* User Satisfaction Section */}
        <section className="satisfaction-section glass-morphism">
          <div className="section-header">
            <h3 className="text-lg font-semibold">User Satisfaction</h3>
          </div>
          
          <div className="satisfaction-content">
            <div className="satisfaction-score">
              <div className="score-circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray="85, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">85%</text>
                </svg>
                <span className="score-label">Customer Satisfaction</span>
              </div>
            </div>
            
            <div className="satisfaction-breakdown">
              <div className="rating-item">
                <div className="rating-label">
                  <span className="rating-emoji">😃</span>
                  <span>Very Satisfied</span>
                </div>
                <div className="rating-bar-container">
                  <div className="rating-bar" style={{width: '65%'}}></div>
                  <span className="rating-percentage">65%</span>
                </div>
              </div>
              
              <div className="rating-item">
                <div className="rating-label">
                  <span className="rating-emoji">🙂</span>
                  <span>Satisfied</span>
                </div>
                <div className="rating-bar-container">
                  <div className="rating-bar" style={{width: '20%'}}></div>
                  <span className="rating-percentage">20%</span>
                </div>
              </div>
              
              <div className="rating-item">
                <div className="rating-label">
                  <span className="rating-emoji">😐</span>
                  <span>Neutral</span>
                </div>
                <div className="rating-bar-container">
                  <div className="rating-bar" style={{width: '10%'}}></div>
                  <span className="rating-percentage">10%</span>
                </div>
              </div>
              
              <div className="rating-item">
                <div className="rating-label">
                  <span className="rating-emoji">🙁</span>
                  <span>Unsatisfied</span>
                </div>
                <div className="rating-bar-container">
                  <div className="rating-bar" style={{width: '5%'}}></div>
                  <span className="rating-percentage">5%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default ChatAnalyticsPage;