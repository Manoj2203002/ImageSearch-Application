import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-logo">MyGallery</h2>
          <p className="footer-text">
            Discover beautiful images from around the world. Powered by Pixabay API.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><FaHome /> <Link to="/">Home</Link></li>
            <li><FaInfoCircle /> <Link to="/About">About</Link></li>
            <li><FaEnvelope /> <Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 MyGallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
