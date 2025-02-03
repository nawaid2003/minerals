import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/ManganeseOxidePowder.scss";
import MnO from "../images/mn02.png";

const ManganeseOxidePowder = () => {
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
      Manganese oxide, a chemical compound comprising manganese and oxygen,
      finds versatile applications. As proud pioneers, our manufacturing
      expertise covers a comprehensive range of grades and powder sizes
      essential for various industries. These applications include use in
      dry-cell batteries, plant nutrition, pesticides, ceramics, and glass
      pigments.
    </motion.p>
  );

  const DesktopDescription = () => (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="desktop-description"
    >
      Manganese oxide, a chemical compound comprising manganese and oxygen,
      finds versatile applications. As proud pioneers, our manufacturing
      expertise covers a comprehensive range of grades and powder sizes
      essential for various industries. These applications include use in
      dry-cell batteries, plant nutrition, pesticides, ceramics, and glass
      pigments. Beyond industrial uses, manganese oxide compounds contribute to
      geological processes and play a pivotal role in environmental redox
      reactions within soils and sediments. Explore our extensive selection of
      grades to meet the diverse needs of different sectors.
    </motion.p>
  );

  return (
    <div className="manganese-oxide-powder">
      <div className="hero-section">
        <motion.img
          src={MnO}
          alt="Manganese Oxide Powder"
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
            Manganese Oxide Powder
          </motion.h1>
          {isMobile ? <MobileDescription /> : <DesktopDescription />}
        </div>
      </div>
      <div className="product-info-section">
        <h2>Product Information</h2>
        <div className="product-info-grid">
          <div className="product-info-item">
            <h3>28-30% MnO</h3>
          </div>
          <div className="product-info-item">
            <h3>30-32% Mno</h3>
          </div>
          <div className="product-info-item">
            <h3>38-40% Mno</h3>
          </div>
          <div className="product-info-item">
            <h3>40-42% Mno</h3>
          </div>
          <div className="product-info-item">
            <h3>56-58% Mno</h3>
          </div>
          <div className="product-info-item">
            <h3>60-62% Mno</h3>
          </div>
        </div>
        <p>
          Nevertheless, if the provided specifications do not align with the
          customer's requirements, Mahavir Minerals is ready to customize the
          product accordingly. Factors like manganese, iron, silicon content,
          mesh size, can be adjusted to meet the specific requests of the
          customer.
        </p>
      </div>
    </div>
  );
};

export default ManganeseOxidePowder;
