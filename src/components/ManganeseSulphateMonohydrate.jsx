import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/ManganeseSulphateMonohydrate.scss";
import MnSO4 from "../images/mnso4.png"; // You'll need to add this image

const ManganeseSulphateMonohydrate = () => {
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
      Manganese Sulphate Monohydrate is a pale pink, free-flowing crystalline
      powder primarily used as a rich source of manganese in agricultural and
      industrial applications. It is widely valued for improving crop yield and
      livestock health.
    </motion.p>
  );

  const DesktopDescription = () => (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="desktop-description"
    >
      At Mahavir Mineral, we offer high-quality Manganese Sulphate Monohydrate—a
      pale pink, free-flowing crystalline powder primarily used as a rich source
      of manganese in agricultural and industrial applications. It is widely
      valued for improving crop yield and livestock health, and it also serves
      various roles in industrial processing. Manganese is a crucial
      micronutrient that enhances chlorophyll production in plants and supports
      enzyme activity in animals. Our product is formulated to meet
      international quality standards, ensuring optimal performance and
      consistency.
    </motion.p>
  );

  return (
    <div className="manganese-sulphate-monohydrate">
      <div className="hero-section">
        <motion.img
          src={MnSO4}
          alt="Manganese Sulphate Monohydrate"
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
            Manganese Sulphate Monohydrate
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="chemical-formula"
          >
            MnSO₄·H₂O
          </motion.p>
          {isMobile ? <MobileDescription /> : <DesktopDescription />}
        </div>
      </div>

      <div className="product-info-section">
        <h2>Product Specifications</h2>
        <div className="product-info-grid">
          <div className="product-info-item">
            <h3>Manganese Content</h3>
            <p>Minimum 31%</p>
          </div>
          <div className="product-info-item">
            <h3>Sulphur Content</h3>
            <p>Approximately 18%</p>
          </div>
          <div className="product-info-item">
            <h3>Appearance</h3>
            <p>Pale pink crystalline powder</p>
          </div>
          <div className="product-info-item">
            <h3>Solubility</h3>
            <p>100% water-soluble</p>
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
            <h3>Density</h3>
            <p>Approximately 1.2 t/m³</p>
          </div>
          <div className="product-info-item">
            <h3>Shelf Life</h3>
            <p>18–24 months</p>
          </div>
        </div>

        <div className="applications-section">
          <h2>Applications</h2>
          <div className="applications-grid">
            <div className="application-item">
              <h3>Soil & Foliar Fertilizer</h3>
              <p>
                Essential micronutrient fertilizer for enhancing chlorophyll
                production and plant growth
              </p>
            </div>
            <div className="application-item">
              <h3>Animal Feed Additive</h3>
              <p>
                Supports enzyme activity and metabolic functions in livestock
              </p>
            </div>
            <div className="application-item">
              <h3>Industrial Processing</h3>
              <p>Used in water treatment and various chemical formulations</p>
            </div>
          </div>
        </div>

        <p>
          At Mahavir Minerals, we maintain strict quality control to ensure our
          Manganese Sulphate Monohydrate meets international standards. The
          product is available in 25 kg / 50 kg HDPE bags with liner and should
          be stored in dry, sealed conditions for maximum shelf life.
        </p>
      </div>
    </div>
  );
};

export default ManganeseSulphateMonohydrate;
