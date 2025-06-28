import React from 'react';

interface ServiceRecommendation {
  query: string;
  service: string;
  location: string;
  status: string;
}

const ServiceRecommendations: React.FC = () => {
  const recommendations: ServiceRecommendation[] = [
    {
      query: '"Food joint near Nyayo Stadium"',
      service: 'Mama Oliech Restaurant',
      location: '1.5km from Nyayo',
      status: 'Booked',
    },
    {
      query: '"Boda to Kasarani"',
      service: 'Bolt Boda',
      location: 'Kasarani',
      status: 'Pending',
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'booked':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes('restaurant')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10h10M7 14h10M12 2v20M2 6h20v12H2z" />
        </svg>
      );
    } else if (service.toLowerCase().includes('boda')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M7 12h5l2 2.5h3" />
        </svg>
      );
    }
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01M12 7h.01M17 7h.01" />
      </svg>
    );
  };

  return (
    <div className="recommendations-container">
      <div className="mb-6 flex flex-wrap gap-5">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <div className="recommendation-header">
              <div className="recommendation-icon">
                {getServiceIcon(rec.service)}
              </div>
              <div className="recommendation-titles">
                <h4 className="recommendation-service">{rec.service}</h4>
                <span className={`status-badge ${getStatusClass(rec.status)}`}>
                  {rec.status}
                </span>
              </div>
            </div>
            
            <div className="recommendation-details">
              <div className="recommendation-detail">
                <span className="detail-label">Query:</span>
                <span className="detail-value">{rec.query}</span>
              </div>
              <div className="recommendation-detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{rec.location}</span>
              </div>
            </div>
            
            <div className="recommendation-actions">
              <button className="action-button primary">View Details</button>
              <button className="action-button secondary">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRecommendations;