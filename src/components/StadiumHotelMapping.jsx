import React from 'react';

/**
 * @typedef {Object} HotelInfo
 * @property {string} name
 * @property {number} stars
 * @property {string} description
 * @property {string} distance
 * @property {string} priceRange
 * @property {string[]} amenities
 * @property {string} imageUrl
 */

/**
 * @typedef {Object} StadiumInfo
 * @property {string} name
 * @property {string} location
 * @property {string} capacity
 * @property {{title: string, date: string}[]=} upcomingEvents
 * @property {HotelInfo[]} nearbyHotels
 */

const stadiumData = [
  {
    name: "Moi International Sports Centre, Kasarani",
    location: "Nairobi",
    capacity: "60,000",
    upcomingEvents: [
      {title: "AFCON Qualifier: Kenya vs Ghana", date: "July 5, 2025"},
      {title: "Rugby Sevens Tournament", date: "July 15-16, 2025"}
    ],
    nearbyHotels: [
      {
        name: "Safari Park Hotel & Casino",
        stars: 5,
        description: "Luxury hotel with conference facilities and multiple restaurants",
        distance: "3.5km from stadium",
        priceRange: "$$$-$$$$",
        amenities: ["Pool", "Spa", "Free WiFi", "Restaurant", "Fitness Center", "Conference Facilities"],
        imageUrl: "https://example.com/safari-park.jpg"
      },
      {
        name: "Trademark Hotel",
        stars: 4,
        description: "Upscale hotel with modern amenities in Village Market area",
        distance: "5km from stadium",
        priceRange: "$$$-$$$$",
        amenities: ["Pool", "Free WiFi", "Restaurant", "Bar", "Fitness Center"],
        imageUrl: "https://example.com/trademark.jpg"
      }
    ]
  },
  {
    name: "Nyayo National Stadium",
    location: "Nairobi",
    capacity: "30,000",
    upcomingEvents: [
      {title: "Kenya Premier League Final", date: "July 20, 2025"}
    ],
    nearbyHotels: [
      {
        name: "Villa Rosa Kempinski",
        stars: 5,
        description: "Premier 5-star hotel with luxury amenities",
        distance: "4km from stadium",
        priceRange: "$$$$",
        amenities: ["Pool", "Spa", "Free WiFi", "Multiple Restaurants", "Fitness Center", "Business Center"],
        imageUrl: "https://example.com/kempinski.jpg"
      },
      {
        name: "Nairobi Serena Hotel",
        stars: 5,
        description: "Upscale hotel with pan-African inspired design",
        distance: "3.2km from stadium",
        priceRange: "$$$-$$$$",
        amenities: ["Pool", "Spa", "Free WiFi", "Restaurant", "Business Center"],
        imageUrl: "https://example.com/serena.jpg"
      }
    ]
  }
  // Add more stadiums here
];
const StadiumHotelMapping = () => {
  return (
    <div className="stadium-hotel-container">
      <h2 className="text-2xl font-semibold mb-2">Stadium & Accommodation Finder</h2>
      <p className="text-gray-600 mb-4">Find premium accommodations near major sporting venues</p>
      
      {stadiumData.map((stadium, index) => (
        <div key={index} className="stadium-card glass-morphism mb-4">
          <div className="stadium-header">
            <h3 className="text-xl font-semibold">{stadium.name}</h3>
            <div className="stadium-meta">
              <span className="text-sm text-gray-600">Location: {stadium.location}</span>
              <span className="text-sm text-gray-600">Capacity: {stadium.capacity}</span>
            </div>
          </div>
          
          {stadium.upcomingEvents && (
            <div className="upcoming-events mb-3">
              <h4 className="text-sm font-semibold text-green-600">Upcoming Events</h4>
              <ul className="event-list">
                {stadium.upcomingEvents.map((event, eventIndex) => (
                  <li key={eventIndex} className="event-item">
                    <span>{event.title}</span>
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="hotels-list">
            <h4 className="text-sm font-semibold">Nearby Accommodations</h4>
            <div className="hotels-grid">
              {stadium.nearbyHotels.map((hotel, hotelIndex) => (
                <div key={hotelIndex} className="hotel-card">
                  <div className="hotel-image" style={{backgroundImage: `url(${hotel.imageUrl})`}}>
                    <div className="hotel-rating">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="hotel-info">
                    <h5 className="hotel-name">{hotel.name}</h5>
                    <p className="hotel-description">{hotel.description}</p>
                    <p className="hotel-distance">{hotel.distance}</p>
                    <div className="hotel-amenities">
                      {hotel.amenities.slice(0, 4).map((amenity, i) => (
                        <span key={i} className="amenity-tag">{amenity}</span>
                      ))}
                      {hotel.amenities.length > 4 && <span className="amenity-more">+{hotel.amenities.length - 4}</span>}
                    </div>
                    <div className="hotel-footer">
                      <span className="hotel-price">{hotel.priceRange}</span>
                      <button className="action-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StadiumHotelMapping;