import React from "react";
import { motion } from "framer-motion";
import "../styles/ManganeseOxidePowder.scss";
import MnO from "../images/mn02.png";

const ManganeseOxidePowder = () => {
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
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Manganese oxide, a chemical compound comprising manganese and
            oxygen, finds versatile applications. As proud pioneers, our
            manufacturing expertise covers a comprehensive range of grades and
            powder sizes essential for various industries.
          </motion.p>
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
