import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/MangneseDioxide.scss";
import MnO2 from "../images/mndioxide.png";

const MangneseDioxide = () => {
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
      Manganese Dioxide (MnO2) is a blackish or brown solid that occurs
      naturally as the mineral pyrolusite. It is widely used, particularly as a
      depolarizer in dry-cell batteries, due to its ability to facilitate
      electrochemical reactions.
    </motion.p>
  );

  const DesktopDescription = () => (
    <>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="desktop-description"
      >
        Manganese Dioxide (MnO2) is a blackish or brown solid that occurs
        naturally as the mineral pyrolusite. It is widely used, particularly as
        a depolarizer in dry-cell batteries, due to its ability to facilitate
        electrochemical reactions. Additionally, it serves as a catalyst in
        certain chemical processes and finds applications in pigments for
        ceramics and glass. It is also utilized in water treatment plants where
        granular MnO2 is employed to remove iron from water.
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="desktop-description"
      >
        At Mahavir Minerals, we offer a range of grades tailored to customer
        specifications, available in powder or granule sizes suited for specific
        applications. We can deliver materials with manganese dioxide (MnO2)
        content ranging from 60% to 90%.
      </motion.p>
    </>
  );

  return (
    <div className="manganese-dioxide">
      <div className="hero-section">
        <motion.img
          src={MnO2}
          alt="Manganese Dioxide"
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
            Manganese Dioxide
          </motion.h1>
          {isMobile ? <MobileDescription /> : <DesktopDescription />}
        </div>
      </div>

      <div className="specifications-section">
        <h2>Specifications</h2>
        <table className="specifications-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Classification</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Color</td>
              <td>Grey and Black</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Odour</td>
              <td>Odourless</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Fluidity</td>
              <td>Free Flowing</td>
            </tr>
            <tr>
              <td>04</td>
              <td>Density</td>
              <td>5.026 kg/d</td>
            </tr>
            <tr>
              <td>05</td>
              <td>Solubility</td>
              <td>Water Insoluble / Acid Insoluble</td>
            </tr>
            <tr>
              <td>06</td>
              <td>Particle Size</td>
              <td>As per your requirement (from 100 mesh to 300 mesh)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangneseDioxide;
