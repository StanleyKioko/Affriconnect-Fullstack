import React, { useState } from 'react';

const HotelFinder = () => {
  const [activeStadium, setActiveStadium] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  
  const stadiums = [
    { id: 'all', name: 'All Stadiums' },
    { id: 'kasarani', name: 'Kasarani Stadium' },
    { id: 'nyayo', name: 'Nyayo Stadium' },
    { id: 'mombasa', name: 'Mombasa Stadium' },
    { id: 'eldoret', name: 'Kipchoge Keino Stadium' }
  ];
  
  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget ($)' },
    { id: 'mid', name: 'Mid-Range ($$)' },
    { id: 'luxury', name: 'Luxury ($$$)' }
  ];
  
  const hotels = [
    {
      id: 1,
      name: 'Safari Park Hotel & Casino',
      stadium: 'kasarani',
      priceCategory: 'luxury',
      description: 'Luxury hotel with conference facilities and multiple restaurants',
      image: 'https://via.placeholder.com/300x150',
      distance: '3.5km from Kasarani Stadium',
      price: '$$$'
    },
    {
      id: 2,
      name: 'Trademark Hotel',
      stadium: 'kasarani',
      priceCategory: 'mid',
      description: 'Upscale hotel with modern amenities in Village Market area',
      image: 'https://via.placeholder.com/300x150',
      distance: '5km from Kasarani Stadium',
      price: '$$'
    },
    {
      id: 3,
      name: 'Villa Rosa Kempinski',
      stadium: 'nyayo',
      priceCategory: 'luxury',
      description: 'Premier 5-star hotel with luxury amenities',
      image: 'https://via.placeholder.com/300x150',
      distance: '4km from Nyayo Stadium',
      price: '$$$'
    },
    {
      id: 4,
      name: 'Ibis Styles Hotel',
      stadium: 'nyayo',
      priceCategory: 'budget',
      description: 'Affordable comfort close to the stadium',
      image: 'https://via.placeholder.com/300x150',
      distance: '2.5km from Nyayo Stadium',
      price: '$'
    },
    {
      id: 5,
      name: 'The Boma Hotel',
      stadium: 'kasarani',
      priceCategory: 'mid',
      description: 'Elegant comfort with excellent service',
      image: 'https://via.placeholder.com/300x150',
      distance: '4.3km from Kasarani Stadium',
      price: '$$'
    }
  ];
  
  const filteredHotels = hotels.filter(hotel => {
    const matchesStadium = activeStadium === 'all' || hotel.stadium === activeStadium;
    const matchesPrice = priceRange === 'all' || hotel.priceCategory === priceRange;
    return matchesStadium && matchesPrice;
  });
  
  return (
    <div className="hotel-finder">
      <h2 className="text-xl font-semibold mb-4">Find Accommodation Near Stadiums</h2>
      
      <div className="filter-container glass-morphism mb-4 p-4">
        <div className="filter-section">
          <label className="filter-label">Stadium:</label>
          <div className="filter-options">
            {stadiums.map(stadium => (
              <button
                key={stadium.id}
                className={`filter-btn ${activeStadium === stadium.id ? 'active' : ''}`}
                onClick={() => setActiveStadium(stadium.id)}
              >
                {stadium.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <label className="filter-label">Price Range:</label>
          <div className="filter-options">
            {priceRanges.map(range => (
              <button
                key={range.id}
                className={`filter-btn ${priceRange === range.id ? 'active' : ''}`}
                onClick={() => setPriceRange(range.id)}
              >
                {range.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredHotels.length > 0 ? (
        <div className="hotel-grid">
          {filteredHotels.map(hotel => (
            <div className="hotel-card glass-morphism" key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <div className="hotel-header">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <span className="hotel-price">{hotel.price}</span>
                </div>
                <p className="hotel-description">{hotel.description}</p>
                <p className="hotel-distance">{hotel.distance}</p>
                <button className="action-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">No hotels match your selected criteria</div>
      )}
    </div>
  );
};

export default HotelFinder;