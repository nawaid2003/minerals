import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("page-transition");
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo-container">
            <img
              src="/api/placeholder/150/50"
              alt="Logo"
              className="logo-image"
            />
          </Link>
          <div className="desktop-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
          <div className="mobile-menu-button-container">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg
                className="menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
          <Link to="/" className="mobile-link">
            Home
          </Link>
          <Link to="/about" className="mobile-link">
            About
          </Link>
          <Link to="/products" className="mobile-link">
            Products
          </Link>
          <Link to="/faq" className="mobile-link">
            FAQ
          </Link>
          <Link to="/contact" className="mobile-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
