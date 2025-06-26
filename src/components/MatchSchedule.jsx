import React, { useState } from 'react';

const MatchSchedule = () => {
  const [activeDate, setActiveDate] = useState('all');
  
  const matchDates = [
    { id: 'all', label: 'All Matches' },
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'july2', label: 'July 2' },
    { id: 'july3', label: 'July 3' },
    { id: 'july4', label: 'July 4' },
    { id: 'july5', label: 'July 5' },
  ];
  
  const matches = [
    {
      id: 1,
      time: '15:00',
      team1: { name: 'Kenya', flag: 'https://via.placeholder.com/32' },
      team2: { name: 'Nigeria', flag: 'https://via.placeholder.com/32' },
      venue: 'Kasarani Stadium, Nairobi',
      date: 'today'
    },
    {
      id: 2,
      time: '18:00',
      team1: { name: 'Ghana', flag: 'https://via.placeholder.com/32' },
      team2: { name: 'Senegal', flag: 'https://via.placeholder.com/32' },
      venue: 'Nyayo Stadium, Nairobi',
      date: 'today'
    },
    {
      id: 3,
      time: '15:00',
      team1: { name: 'Cameroon', flag: 'https://via.placeholder.com/32' },
      team2: { name: 'Egypt', flag: 'https://via.placeholder.com/32' },
      venue: 'Kasarani Stadium, Nairobi',
      date: 'tomorrow'
    },
    {
      id: 4,
      time: '18:00',
      team1: { name: 'Morocco', flag: 'https://via.placeholder.com/32' },
      team2: { name: 'Ivory Coast', flag: 'https://via.placeholder.com/32' },
      venue: 'Nyayo Stadium, Nairobi',
      date: 'tomorrow'
    },
  ];
  
  const filteredMatches = activeDate === 'all' 
    ? matches 
    : matches.filter(match => match.date === activeDate);
  
  return (
    <div className="match-schedule">
      <h2 className="text-xl font-semibold mb-4">AFCON 2027 Match Schedule</h2>
      
      <div className="date-filter">
        {matchDates.map(date => (
          <button 
            key={date.id}
            onClick={() => setActiveDate(date.id)}
            className={`date-pill ${activeDate === date.id ? 'active' : ''}`}
          >
            {date.label}
          </button>
        ))}
      </div>
      
      <div className="match-list">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <div className="match-card" key={match.id}>
              <div className="match-time">
                <div className="match-time-value">{match.time}</div>
                <div className="match-time-label">EAT</div>
              </div>
              
              <div className="match-teams">
                <div className="team">
                  <img src={match.team1.flag} alt={match.team1.name} className="team-flag" />
                  <span className="team-name">{match.team1.name}</span>
                </div>
                
                <span className="match-versus">vs</span>
                
                <div className="team">
                  <img src={match.team2.flag} alt={match.team2.name} className="team-flag" />
                  <span className="team-name">{match.team2.name}</span>
                </div>
                
                <div className="match-venue">{match.venue}</div>
              </div>
              
              <div className="match-actions">
                <button className="action-btn">Details</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-matches">No matches scheduled for this date</div>
        )}
      </div>
    </div>
  );
};

export default MatchSchedule;