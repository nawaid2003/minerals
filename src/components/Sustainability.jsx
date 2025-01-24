import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sustain from "../images/sustain.png";
import "../styles/Sustainability.scss";

const Sustainability = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="sustainability-page">
      <div className="sustainability-hero">
        <div className="sustainability-hero-content">
          <h1>Environment & Sustainability</h1>
          <p>Our Commitment to Responsible Mining and Manufacturing</p>
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
              <h2 className="section-title">Our Environmental Philosophy</h2>
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
            </div>
          </div>
        </div>
      </div>

      <div className="sustainability-initiatives">
        <div className="initiatives-container">
          <h2 className="section-title text-center">
            Our Key Sustainability Initiatives
          </h2>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <h3>Pollution Control</h3>
              <p>
                Advanced filtration and emission control systems to minimize
                environmental impact.
              </p>
            </div>
            <div className="initiative-card">
              <h3>Resource Efficiency</h3>
              <p>
                Implementing lean manufacturing practices to reduce waste and
                optimize resource consumption.
              </p>
            </div>
            <div className="initiative-card">
              <h3>Community Engagement</h3>
              <p>
                Active participation in local environmental and community
                development programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sustainability-commitment">
        <div className="commitment-container">
          <h2 className="section-title text-center">
            Our Long-Term Commitment
          </h2>
          <p className="commitment-text">
            We are committed to continuous improvement in our environmental
            practices, investing in technologies and processes that reduce our
            ecological footprint while maintaining the highest standards of
            product quality and industrial excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
