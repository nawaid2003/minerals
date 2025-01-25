import React from "react";
import { motion } from "framer-motion";
import "../styles/MangneseDioxide.scss";
import MnO2 from "../images/mndioxide.png";

const MangneseDioxide = () => {
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
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Manganese Dioxide (MnO2) is a blackish or brown solid that occurs
            naturally as the mineral pyrolusite. It is widely used, particularly
            as a depolarizer in dry-cell batteries, due to its ability to
            facilitate electrochemical reactions.
          </motion.p>
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
