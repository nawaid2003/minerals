import React from "react";
import { motion } from "framer-motion";
import "../styles/ManganeseOreFines.scss";
import Ore from "../images/MnOre.png";

const ManganeseOreFines = () => {
  return (
    <div className="manganese-ore-fines">
      <div className="hero-section">
        <motion.img
          src={Ore}
          alt="Manganese Ore Fines"
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
            Manganese Ore Fines
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Manganese ore fines refer to small particles or powdery material
            derived from manganese ore. These fines typically contain varying
            concentrations of manganese . Manganese ore fines are often utilized
            in metallurgical processes for the production of alloys. Mahavir
            Minerals can deliver ore fines with Mn content ranging from 18% to
            36%.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ManganeseOreFines;
