import React, { useState } from 'react';

const EntertainmentVenues = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Venues' },
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'nightlife', name: 'Nightlife' },
    { id: 'shopping', name: 'Shopping' },
    { id: 'culture', name: 'Cultural Sites' }
  ];
  
  const venues = [
    {
      id: 1,
      name: 'Carnivore Restaurant',
      category: 'restaurants',
      description: 'Famous for game meat and traditional barbecue',
      image: 'https://via.placeholder.com/300x150',
      location: '3.5 km from Kasarani Stadium',
      rating: 4.7
    },
    {
      id: 2,
      name: 'Brew Bistro & Lounge',
      category: 'nightlife',
      description: 'Craft beers and evening entertainment',
      image: 'https://via.placeholder.com/300x150',
      location: '2.8 km from Nyayo Stadium',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Two Rivers Mall',
      category: 'shopping',
      description: 'Largest mall in East Africa with over 200 stores',
      image: 'https://via.placeholder.com/300x150',
      location: '8 km from Kasarani Stadium',
      rating: 4.3
    },
    {
      id: 4,
      name: 'Nairobi National Museum',
      category: 'culture',
      description: 'Discover Kenya\'s rich cultural and natural heritage',
      image: 'https://via.placeholder.com/300x150',
      location: '3 km from Nyayo Stadium',
      rating: 4.6
    },
    {
      id: 5,
      name: 'The Alchemist Bar',
      category: 'nightlife',
      description: 'Creative cocktails and live music',
      image: 'https://via.placeholder.com/300x150',
      location: '4 km from Nyayo Stadium',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Talisman Restaurant',
      category: 'restaurants',
      description: 'Eclectic international cuisine in a garden setting',
      image: 'https://via.placeholder.com/300x150',
      location: '5.2 km from Nyayo Stadium',
      rating: 4.8
    }
  ];
  
  const filteredVenues = activeCategory === 'all' 
    ? venues 
    : venues.filter(venue => venue.category === activeCategory);
  
  return (
    <div className="entertainment-venues">
      <h2 className="text-xl font-semibold mb-4">Entertainment & Dining Venues</h2>
      
      <div className="category-filter mb-4">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="facility-grid">
        {filteredVenues.map(venue => (
          <div className="facility-card" key={venue.id}>
            <img src={venue.image} alt={venue.name} className="facility-image" />
            <div className="facility-info">
              <h3 className="facility-name">{venue.name}</h3>
              <p className="facility-description">{venue.description}</p>
              <div className="facility-meta">
                <div className="facility-location">{venue.location}</div>
                <div className="facility-rating">★ {venue.rating}</div>
              </div>
              <button className="action-btn mt-2">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntertainmentVenues;