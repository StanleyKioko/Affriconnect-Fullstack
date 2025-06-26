import React, { useState } from 'react';

const HealthcareFacilities = () => {
  const [activeType, setActiveType] = useState('all');
  
  const facilityTypes = [
    { id: 'all', name: 'All Facilities' },
    { id: 'hospital', name: 'Hospitals' },
    { id: 'clinic', name: 'Clinics' },
    { id: 'pharmacy', name: 'Pharmacies' },
    { id: 'emergency', name: 'Emergency Centers' }
  ];
  
  const facilities = [
    {
      id: 1,
      name: 'Kenyatta National Hospital',
      type: 'hospital',
      description: 'Largest referral and teaching hospital in Kenya',
      image: 'https://via.placeholder.com/300x150',
      location: '4.2 km from Nyayo Stadium',
      contact: '+254-20-2726300'
    },
    {
      id: 2,
      name: 'Nairobi Hospital',
      type: 'hospital',
      description: 'Private hospital offering comprehensive medical services',
      image: 'https://via.placeholder.com/300x150',
      location: '3.5 km from Nyayo Stadium',
      contact: '+254-20-2845000'
    },
    {
      id: 3,
      name: 'Aga Khan University Hospital',
      type: 'hospital',
      description: 'Teaching hospital with international standards',
      image: 'https://via.placeholder.com/300x150',
      location: '6 km from Kasarani Stadium',
      contact: '+254-20-3662000'
    },
    {
      id: 4,
      name: 'Goodlife Pharmacy',
      type: 'pharmacy',
      description: '24-hour pharmacy with multiple branches',
      image: 'https://via.placeholder.com/300x150',
      location: '2 km from Nyayo Stadium',
      contact: '+254-719-229111'
    },
    {
      id: 5,
      name: 'AAR Health Services',
      type: 'clinic',
      description: 'Outpatient services and emergency care',
      image: 'https://via.placeholder.com/300x150',
      location: '3.8 km from Kasarani Stadium',
      contact: '+254-20-2861000'
    }
  ];
  
  const filteredFacilities = activeType === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.type === activeType);
  
  return (
    <div className="healthcare-facilities">
      <h2 className="text-xl font-semibold mb-4">Healthcare Facilities</h2>
      
      <div className="facility-types mb-4">
        {facilityTypes.map(type => (
          <button
            key={type.id}
            className={`facility-type-btn ${activeType === type.id ? 'active' : ''}`}
            onClick={() => setActiveType(type.id)}
          >
            {type.name}
          </button>
        ))}
      </div>
      
      <div className="facility-grid">
        {filteredFacilities.map(facility => (
          <div className="facility-card" key={facility.id}>
            <img src={facility.image} alt={facility.name} className="facility-image" />
            <div className="facility-info">
              <h3 className="facility-name">{facility.name}</h3>
              <p className="facility-description">{facility.description}</p>
              <div className="facility-meta">
                <div className="facility-location">{facility.location}</div>
                <div className="facility-contact">{facility.contact}</div>
              </div>
              <button className="action-btn mt-2">Get Directions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareFacilities;