import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MnO from "../images/mn02.png";
import MnO2 from "../images/mndioxide.png";
import FeedGrade from "../images/feedgrademno.png";
import Facility from "../images/m1.jpg";
import Ore from "../images/MnOre.png";
import Media from "../images/MediaMn.png";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import "../styles/Home.scss";
import Sustain from "../images/sustain.png";
import { motion } from "framer-motion";

const ParallaxBackground = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [m1, m2, m3, m4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parallax-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`parallax-image ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="overlay" />
    </div>
  );
};

const Home = () => {
  const observerRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const navigate = useNavigate();

  // Utility function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

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
        element.textContent = target === 1994 ? target : target + "+";
        clearInterval(timer);
      } else {
        element.textContent =
          Math.floor(current) + (target === 1994 ? "" : "+");
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

  const handleLearnMoreScroll = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productscase = [
    {
      title: "Manganese Oxide Powder(MnO)",
      image: MnO,
      link: "/products#oxide-powder",
    },
    {
      title: "Manganese Dioxide(MnO₂)",
      image: MnO2,
      link: "/products#dioxide",
    },
    {
      title: "Manganese Oxide Feed Grade",
      image: FeedGrade,
      link: "/products#feed-grade",
    },
    {
      title: "MANGANESE ORE FINES",
      image: Ore,
      link: "/products#ore-fines",
    },
    {
      title: "FILTER MEDIA MnO₂",
      image: Media,
      link: "/products#filter-media",
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <ParallaxBackground />
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                The Trusted Pioneers of Manganese Excellence
              </h1>
              <button onClick={handleLearnMoreScroll} className="hero-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={aboutSectionRef} className="about-section">
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
              <Link
                to="/about"
                className="learn-more-button"
                onClick={() => handleNavigation("/about")}
              >
                Learn More
              </Link>
            </div>
            <div className="about-image-container fade-in-section">
              <img
                src={Facility}
                alt="Mining Facility"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="productscase-section">
        <div className="productscase-container">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h2>

          <motion.div
            className="productscase-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {productscase.map((product, index) => (
              <motion.div
                key={index}
                className="productscase-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="productscase-image-wrapper">
                  <div className="productscase-image-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="productscase-image"
                    />
                  </div>
                  <div className="productscase-overlay">
                    <Link
                      to={product.link}
                      className="learn-more-button"
                      onClick={() => handleNavigation(product.link)}
                    >
                      Explore Product
                    </Link>
                  </div>
                </div>
                <div className="productscase-content">
                  <h3 className="productscase-title">{product.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/products"
              className="view-all-button"
              onClick={() => handleNavigation("/products")}
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="sustainability-section">
        <div className="sustainability-container">
          <div className="sustainability-grid">
            <div className="sustainability-image-container fade-in-section">
              <img
                src={Sustain}
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
              <Link
                to="/sustainability"
                className="learn-more-button"
                onClick={() => handleNavigation("/sustainability")}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <div className="highlights-container">
          <h2 className="highlights-title">Why Choose Mahavir Minerals?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="30">
                0+
              </div>
              <h3 className="stat-title">Years Experience</h3>
              <p className="stat-description">
                Industry-leading expertise in mineral resource management
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="1994">
                0
              </div>
              <h3 className="stat-title">Since Our Journey Began</h3>
              <p className="stat-description">
                Pioneering manganese oxide production with unwavering commitment
                to quality
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="10">
                0+
              </div>
              <h3 className="stat-title">Diverse Industrial Application</h3>
              <p className="stat-description">
                Our comprehensive range of manganese products can be used across
                more than ten industries worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
