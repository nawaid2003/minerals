import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MnO from "../images/mn02.png";
import MnO2 from "../images/mndioxide.png";
import FeedGrade from "../images/feedgrademno.png";

const Home = () => {
  const observerRef = useRef(null);

  const animateNumber = (element) => {
    if (element.classList.contains("animated")) return;

    element.classList.add("animated");
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target + "+";
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + "+";
      }
    }, 16);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("stat-card")) {
            animateNumber(entry.target.querySelector(".stat-number"));
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".stat-card, .fade-in-section");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const products = [
    {
      title: "Manganese Oxide Powder",
      image: MnO,
      link: "/products#oxide-powder",
    },
    {
      title: "Manganese Dioxide",
      image: MnO2,
      link: "/products#dioxide",
    },
    {
      title: "Manganese Oxide Feed Grade",
      image: FeedGrade,
      link: "/products#feed-grade",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Leading the Future of Mineral Resources
              </h1>
              <p className="hero-text">
                Sustainable mining solutions for a better tomorrow
              </p>
              <Link to="/about" className="hero-button">
                Learn More
              </Link>
            </div>
            <div className="hero-image-container">
              <img
                src="/api/placeholder/600/400"
                alt="Mining Operation"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-content fade-in-section">
              <h2 className="section-title">About Us</h2>
              <p className="about-text">
                Mahavir Minerals, located in Paonarkhari, Bhandara district,
                just 4 kilometers from the esteemed Dongri Buzurg Mine operated
                by MOIL. Established on 28th November 1994, we take pride in
                being pioneers in manganese oxide production.
              </p>
              <p className="about-text">
                Over the years, Mahavir Minerals has consistently delivered
                quality manganese oxide and now aspires to become a
                manufacturing powerhouse for various manganese-based compounds.
              </p>
              <Link to="/about" className="learn-more-button">
                Learn More
              </Link>
            </div>
            <div className="about-image-container fade-in-section">
              <img
                src="/api/placeholder/500/300"
                alt="Mining Facility"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="products-container">
          <h2 className="section-title text-center">Our Products</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card fade-in-section">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <Link to={product.link} className="learn-more-button">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="sustainability-section">
        <div className="sustainability-container">
          <div className="sustainability-grid">
            <div className="sustainability-image-container fade-in-section">
              <img
                src="/api/placeholder/500/300"
                alt="Sustainability Initiative"
                className="sustainability-image"
              />
            </div>
            <div className="sustainability-content fade-in-section">
              <h2 className="section-title">Environment & Sustainability</h2>
              <p className="sustainability-text">
                Despite the inherent challenges in manganese production, Mahavir
                Minerals prioritizes environmental responsibility. Situated
                strategically away from residential areas, our factory minimizes
                disturbance to nearby communities.
              </p>
              <p className="sustainability-text">
                A strong emphasis on regular machinery maintenance underscores
                our commitment to preventing air or sound pollution, reflecting
                our dedication to sustainable and eco-friendly practices in
                every facet of our operations.
              </p>
              <Link to="/sustainability" className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="highlights-section">
        <div className="highlights-container">
          <h2 className="highlights-title">Why Choose Mahavir Minerals?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="25">
                0+
              </div>
              <h3 className="stat-title">Years Experience</h3>
              <p className="stat-description">
                Industry-leading expertise in mineral resource management
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="100">
                0+
              </div>
              <h3 className="stat-title">Global Projects</h3>
              <p className="stat-description">
                Successfully completed projects across all continents
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="50">
                0+
              </div>
              <h3 className="stat-title">Countries Served</h3>
              <p className="stat-description">
                International presence with local expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
