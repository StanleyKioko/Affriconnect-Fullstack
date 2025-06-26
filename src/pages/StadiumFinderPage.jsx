import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StadiumHotelMapping from '../components/StadiumHotelMapping';

const StadiumFinderPage = () => {
  return (
    <DashboardLayout>
      <div className="page-header">
        <h1 className="text-2xl font-bold">AFCON 2027 Venue Guide</h1>
        <p className="text-gray-600">Find the best accommodations near AFCON 2027 venues</p>
      </div>
      
      <div className="stadium-filters glass-morphism mb-4 p-4">
        <div className="filter-group">
          <label className="text-sm font-medium">Filter by City:</label>
          <select className="search-input ml-2">
            <option value="">All Cities</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="eldoret">Eldoret</option>
            <option value="nakuru">Nakuru</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label className="text-sm font-medium">Price Range:</label>
          <select className="search-input ml-2">
            <option value="">Any Price</option>
            <option value="budget">Budget ($-$$)</option>
            <option value="moderate">Moderate ($$-$$$)</option>
            <option value="luxury">Luxury ($$$-$$$$)</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label className="text-sm font-medium">Distance from Venue:</label>
          <select className="search-input ml-2">
            <option value="">Any Distance</option>
            <option value="walking">Walking Distance (&lt; 1km)</option>
            <option value="close">Close (1-5km)</option>
            <option value="driving">Short Drive (5-15km)</option>
          </select>
        </div>
      </div>
      
      <StadiumHotelMapping />
    </DashboardLayout>
  );
};

export default StadiumFinderPage;