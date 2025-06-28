import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About AfriConnect</h3>
        <p>Your ultimate companion for AFCON tournament navigation and travel assistance across Africa.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="#">Stadium Finder</a>
        <a href="#">Visitor Center</a>
        <a href="#">Match Schedule</a>
        <a href="#">Hotel Finder</a>
      </div>
      
      <div className="footer-section">
        <h3>Support</h3>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
        <a href="#">Feedback</a>
        <a href="#">Privacy Policy</a>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AfriConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;