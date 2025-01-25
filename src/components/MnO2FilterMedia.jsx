import React from "react";
import { motion } from "framer-motion";
import "../styles/MnO2FilterMedia.scss";
import Media from "../images/MediaMn.png";

const MnO2FilterMedia = () => {
  return (
    <div className="mno2-filter-media">
      <div className="hero-section">
        <motion.img
          src={Media}
          alt="MnO2 Filter Media"
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
            MnO2 Filter Media
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Manganese-enhanced filtration media utilizes manganese dioxide to
            improve water purification. This specialized media effectively
            oxidizes and captures impurities such as iron, manganese, and
            hydrogen sulfide as water passes through. Widely applied in
            residential, industrial, and municipal water treatment, it addresses
            issues of color, odor, and taste, ensuring the delivery of clean and
            clear water. With its catalytic properties, manganese-based
            filtration media stands as a reliable solution for enhancing water
            quality in various settings.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default MnO2FilterMedia;
