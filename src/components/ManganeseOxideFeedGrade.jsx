// ManganeseOxideFeedGrade.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/ManganeseOxideFeedGrade.scss";
import FeedGrade from "../images/feedgrademno.png";

const ManganeseOxideFeedGrade = () => {
  return (
    <div className="manganese-oxide-feed-grade">
      <div className="hero-section">
        <motion.img
          src={FeedGrade}
          alt="Manganese Oxide Feed Grade"
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
            Manganese Oxide Feed Grade
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Manganese is an essential micronutrient for animals, playing a
            crucial role in various physiological functions. It serves as a
            valuable source of manganese, a crucial trace element necessary for
            the well-being of livestock and poultry. This feed-grade supplement
            ensures that animals receive an optimal level of manganese to
            support various physiological functions, including bone development,
            enzyme activation, reproduction, and overall metabolic processes.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Nevertheless, if the provided specifications do not align with the
            customer's requirements, Mahavir Minerals is ready to customize the
            product accordingly.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="characteristics-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Physical Characteristics</h2>
        <table className="characteristics-table">
          <tbody>
            <tr>
              <td>Odour</td>
              <td>Odourless</td>
            </tr>
            <tr>
              <td>Fluidity</td>
              <td>Free flowing fine powder</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Greenish Brown</td>
            </tr>
            <tr>
              <td>Particle Size</td>
              <td>100 or 200 mesh (95-100% passing, Or as per requirement)</td>
            </tr>
            <tr>
              <td>Specific Gravity</td>
              <td>4 to 4.5 Toxicity Non - Hazardous</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <motion.div
        className="specifications-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
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
              <td>Manganese (Mn)</td>
              <td>60-62%</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Manganese Oxide (MnO)</td>
              <td>78% Min</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Iron as Fe</td>
              <td>7% Max</td>
            </tr>
            <tr>
              <td>04</td>
              <td>Silica as SiO2</td>
              <td>7% Max</td>
            </tr>
            <tr>
              <td>05</td>
              <td>Alumina Al2O3</td>
              <td>4% Max</td>
            </tr>
            <tr>
              <td>06</td>
              <td>Manganese Dioxide (MnO2)</td>
              <td>2% Max</td>
            </tr>
            <tr>
              <td>07</td>
              <td>Lead (Pb)</td>
              <td>100 ppm Max</td>
            </tr>
            <tr>
              <td>08</td>
              <td>Arsenic (As)</td>
              <td>100 ppm Max</td>
            </tr>
            <tr>
              <td>09</td>
              <td>Cadmium (Cd)</td>
              <td>10 ppm Max</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Mercury (Hg)</td>
              <td>0.1 ppm max</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Dioxin</td>
              <td>NIL (not present)</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Density</td>
              <td>1.80-1.90 kg/dm³</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Shelf life</td>
              <td>3 years</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Solubility</td>
              <td>Water insoluble/ Acid soluble</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Packing</td>
              <td>
                Packed in HDPE/PP bags(25/50 kg bags, 1000/1250 kgs big bags)
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default ManganeseOxideFeedGrade;
