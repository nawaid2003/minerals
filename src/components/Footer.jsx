import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-section">
            <img
              src="/api/placeholder/150/50"
              alt="Mahavir Minerals Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">
              Leading the future of sustainable mineral resources
            </p>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-social-section">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-heading">Contact Info</h4>
            <p className="contact-info">info@mahavironeerals.com</p>
            <p className="contact-info">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
