import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("page-transition");
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo-container" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
          <div className="desktop-menu">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/products" className="nav-link" onClick={handleLinkClick}>
              Products
            </Link>
            <Link to="/faq" className="nav-link" onClick={handleLinkClick}>
              FAQ
            </Link>
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
          <div className="mobile-menu-button-container">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
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
          <Link to="/" className="mobile-link" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="mobile-link" onClick={handleLinkClick}>
            About
          </Link>
          <Link
            to="/products"
            className="mobile-link"
            onClick={handleLinkClick}
          >
            Products
          </Link>
          <Link to="/faq" className="mobile-link" onClick={handleLinkClick}>
            FAQ
          </Link>
          <Link to="/contact" className="mobile-link" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
