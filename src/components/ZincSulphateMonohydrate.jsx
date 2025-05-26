import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/ZincSulphateMonohydrate.scss";
import ZnSO4 from "../images/znso4.png"; // You'll need to add this image

const ZincSulphateMonohydrate = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MobileDescription = () => (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mobile-description"
    >
      Zinc Sulphate Monohydrate is a white, free-flowing crystalline powder
      widely used as a zinc supplement in agriculture and animal feed. It plays
      a vital role in enzyme function and protein synthesis, supporting healthy
      growth in both crops and livestock.
    </motion.p>
  );

  const DesktopDescription = () => (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="desktop-description"
    >
      At Mahavir Mineral, we offer high-quality Zinc Sulphate Monohydrate—a
      white, free-flowing crystalline powder widely used as a zinc supplement in
      agriculture and animal feed. It plays a vital role in enzyme function and
      protein synthesis, supporting healthy growth in both crops and livestock.
      Our product ensures consistent performance and reliable sourcing for
      various industry applications, meeting international quality standards for
      optimal results.
    </motion.p>
  );

  return (
    <div className="zinc-sulphate-monohydrate">
      <div className="hero-section">
        <motion.img
          src={ZnSO4}
          alt="Zinc Sulphate Monohydrate"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="hero-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Zinc Sulphate Monohydrate
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="chemical-formula"
          >
            ZnSO₄·H₂O
          </motion.p>
          {isMobile ? <MobileDescription /> : <DesktopDescription />}
        </div>
      </div>

      <div className="product-info-section">
        <h2>Product Specifications</h2>
        <div className="product-info-grid">
          <div className="product-info-item">
            <h3>Chemical Name</h3>
            <p>Zinc Sulphate Monohydrate</p>
          </div>
          <div className="product-info-item">
            <h3>CAS Number</h3>
            <p>7446-19-7</p>
          </div>
          <div className="product-info-item">
            <h3>HS Code</h3>
            <p>28332930</p>
          </div>
          <div className="product-info-item">
            <h3>Zinc Content</h3>
            <p>Minimum 33%</p>
          </div>
          <div className="product-info-item">
            <h3>Purity</h3>
            <p>Minimum 98%</p>
          </div>
          <div className="product-info-item">
            <h3>Appearance</h3>
            <p>White crystalline powder</p>
          </div>
          <div className="product-info-item">
            <h3>Solubility</h3>
            <p>Fully water-soluble</p>
          </div>
          <div className="product-info-item">
            <h3>pH (5% solution)</h3>
            <p>4.0 – 5.5</p>
          </div>
          <div className="product-info-item">
            <h3>Moisture Content</h3>
            <p>Maximum 1%</p>
          </div>
          <div className="product-info-item">
            <h3>Lead (Pb)</h3>
            <p>&lt; 10 ppm</p>
          </div>
          <div className="product-info-item">
            <h3>Cadmium (Cd)</h3>
            <p>&lt; 10 ppm</p>
          </div>
          <div className="product-info-item">
            <h3>Arsenic (As)</h3>
            <p>&lt; 5 ppm</p>
          </div>
        </div>

        <div className="applications-section">
          <h2>Applications</h2>
          <div className="applications-grid">
            <div className="application-item">
              <h3>Agriculture</h3>
              <p>
                As a micronutrient fertilizer to correct zinc deficiency in soil
                and crops, promoting healthy plant growth and improved yields
              </p>
            </div>
            <div className="application-item">
              <h3>Animal Nutrition</h3>
              <p>
                As a feed additive for improved metabolism and reproductive
                health in livestock, supporting overall animal wellbeing
              </p>
            </div>
            <div className="application-item">
              <h3>Industrial Uses</h3>
              <p>
                In water treatment, chemical synthesis, and various industrial
                processes requiring high-quality zinc compounds
              </p>
            </div>
          </div>
        </div>

        <p>
          At Mahavir Minerals, we maintain strict quality control to ensure our
          Zinc Sulphate Monohydrate meets international standards. The product
          is available in 25 kg / 50 kg HDPE bags with liner and has a shelf
          life of 18–24 months when stored in dry, cool conditions.
        </p>
      </div>
    </div>
  );
};

export default ZincSulphateMonohydrate;
