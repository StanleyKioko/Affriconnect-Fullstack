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

  return (
    <div className="content-overlay p-8 rounded-lg mb-8" role="region" aria-label="Service Recommendations">
      <h3 className="text-xl font-semibold mb-4">Recent Service Recommendations</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-base">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3">User Query</th>
              <th className="p-3">Recommended Service</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec, index) => (
              <tr key={index}>
                <td className="p-3">{rec.query}</td>
                <td className="p-3">{rec.service}</td>
                <td className="p-3">{rec.location}</td>
                <td className={`p-3 ${rec.status === 'Booked' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {rec.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceRecommendations;