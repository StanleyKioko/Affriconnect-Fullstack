import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="content-overlay p-8 rounded-lg" role="region" aria-label="Service Locations">
      <h3 className="text-xl font-semibold mb-4">Service Locations</h3>
      <div id="map" className="h-64 bg-gray-200 rounded">
        <img 
          src="https://i.imgur.com/BmWG3JH.jpg" 
          alt="Kenya Stadium Locations Map" 
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default MapView;