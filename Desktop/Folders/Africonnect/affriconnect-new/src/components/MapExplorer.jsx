import React, { useState } from 'react';

// Note: You would typically integrate with a maps API like Google Maps
// This is a simplified version to demonstrate the UI

/**
 * @typedef {Object} Location
 * @property {string} id
 * @property {string} name
 * @property {'stadium' | 'hotel' | 'entertainment' | 'healthcare'} category
 * @property {string} address
 * @property {{ lat: number, lng: number }} coordinates
 * @property {string} [description]
 * @property {string} icon
 * @property {number} [rating]
 */

/**
 * @typedef {Object} CategoryFilter
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {boolean} active
 */

const locations = [
  {
    id: "loc1",
    name: "Moi International Sports Centre, Kasarani",
    category: 'stadium',
    address: "Thika Road, Nairobi",
    coordinates: { lat: -1.2306, lng: 36.8958 },
    description: "The largest stadium in Kenya with 60,000 capacity",
    icon: "🏟️",
  },
  {
    id: "loc2",
    name: "Safari Park Hotel",
    category: 'hotel',
    address: "Thika Road, Nairobi",
    coordinates: { lat: -1.2250, lng: 36.8850 },
    description: "5-star hotel with multiple amenities",
    icon: "🏨",
    rating: 5
  },
  {
    id: "loc3",
    name: "The Alchemist Bar",
    category: 'entertainment',
    address: "Westlands, Nairobi",
    coordinates: { lat: -1.2673, lng: 36.8032 },
    description: "Popular bar and restaurant with live music",
    icon: "🍸",
    rating: 4
  },
  {
    id: "loc4",
    name: "The Nairobi Hospital",
    category: 'healthcare',
    address: "Argwings Kodhek Rd, Nairobi",
    coordinates: { lat: -1.2929, lng: 36.8172 },
    description: "Major private hospital with emergency care",
    icon: "🏥"
  },
];

const MapExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState([
    { id: 'stadium', name: 'Stadiums', icon: '🏟️', active: true },
    { id: 'hotel', name: 'Hotels', icon: '🏨', active: true },
    { id: 'entertainment', name: 'Entertainment', icon: '🎭', active: true },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', active: true },
  ]);
  
  const toggleCategory = (categoryId) => {
    setCategoryFilters(categoryFilters.map(cat => 
      cat.id === categoryId ? { ...cat, active: !cat.active } : cat
    ));
  };
  
  const activeCategories = categoryFilters
    .filter(cat => cat.active)
    .map(cat => cat.id);
  
  const filteredLocations = locations.filter(loc => 
    activeCategories.includes(loc.category) && 
    (searchQuery === '' || loc.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="map-explorer-wrapper">
      <div className="map-sidebar">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for a location..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categoryFilters.map(category => (
            <button 
              key={category.id}
              className={`category-filter ${category.active ? 'active' : ''}`}
              onClick={() => toggleCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="location-list">
          <h3 className="text-md font-semibold mb-2">Places ({filteredLocations.length})</h3>
          
          {filteredLocations.map(location => (
            <div 
              key={location.id}
              className={`location-item ${selectedLocation?.id === location.id ? 'selected' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="location-icon">{location.icon}</div>
              <div className="location-info">
                <div className="location-name">{location.name}</div>
                <div className="location-address">{location.address}</div>
                {location.rating && (
                  <div className="location-rating">
                    {[...Array(location.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="map-container">
        {/* This would typically be a map component like Google Maps */}
        <div className="map-placeholder">
          <div className="map-overlay">
            <span className="map-text">Interactive Map Here</span>
            <span className="map-description">Integrate with Google Maps or similar service</span>
          </div>
          
          {/* Simulate pins on map */}
          {filteredLocations.map(location => (
            <div 
              key={location.id}
              className={`map-pin ${location.category} ${selectedLocation?.id === location.id ? 'selected' : ''}`}
              style={{ 
                left: `${(location.coordinates.lng + 3) * 10}%`, 
                top: `${(location.coordinates.lat + 3) * 10}%` 
              }}
              onClick={() => setSelectedLocation(location)}
            >
              {location.icon}
            </div>
          ))}
        </div>
        
        {selectedLocation && (
          <div className="location-detail-panel">
            <div className="location-header">
              <h3>{selectedLocation.name}</h3>
              <button className="close-btn" onClick={() => setSelectedLocation(null)}>×</button>
            </div>
            <div className="location-content">
              <p className="location-description">{selectedLocation.description}</p>
              <p className="location-address">{selectedLocation.address}</p>
              
              <div className="direction-options">
                <h4>Get Directions</h4>
                <div className="direction-buttons">
                  <button className="direction-btn">
                    <span className="direction-icon">🚗</span>
                    <span className="direction-label">Drive</span>
                  </button>
                  <button className="direction-btn">
                    <span className="direction-icon">🚶</span>
                    <span className="direction-label">Walk</span>
                  </button>
                  <button className="direction-btn">
                    <span className="direction-icon">🚕</span>
                    <span className="direction-label">Taxi</span>
                  </button>
                </div>
              </div>
              
              {selectedLocation.category === 'stadium' && (
                <button className="action-btn">View Upcoming Matches</button>
              )}
              
              {selectedLocation.category === 'hotel' && (
                <button className="action-btn">Book Room</button>
              )}
              
              {selectedLocation.category === 'entertainment' && (
                <button className="action-btn">View Details</button>
              )}
              
              {selectedLocation.category === 'healthcare' && (
                <div className="healthcare-info">
                  <div className="emergency-contact">
                    <h4>Emergency Contact</h4>
                    <a href="tel:+254-20-123-4567" className="phone-link">+254-20-123-4567</a>
                  </div>
                  <button className="action-btn emergency-btn">Call Emergency Services</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapExplorer;