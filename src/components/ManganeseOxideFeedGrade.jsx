import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/ManganeseOxideFeedGradeEnhanced.scss"; // Changed file name to avoid conflicts
import FeedGrade from "../images/feedgrademno.png";

const ManganeseOxideFeedGradeEnhanced = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState("characteristics");
  const specificationsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to scroll to specifications section
  const scrollToSpecifications = () => {
    setActiveTab("specifications");

    if (specificationsRef.current) {
      specificationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const MobileDescription = () => (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mnfg-mobile-description"
    >
      Manganese is a crucial trace element for livestock nutrition, supporting
      bone development, enzyme activation, and metabolic processes. Custom
      specifications available upon request.Manganese oxide feed grade is
      carefully formulated to meet stringent quality standards for use in animal
      nutrition, promoting the health and productivity of livestock and
      contributing to the balanced diet essential for optimal animal husbandry.
    </motion.p>
  );

  const DesktopDescription = () => (
    <>
      <motion.div
        className="mnfg-content-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="mnfg-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.5C12.8284 6.5 13.5 5.82843 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5C10.5 5.82843 11.1716 6.5 12 6.5Z"
              fill="currentColor"
            />
            <path
              d="M19 11.5C19.8284 11.5 20.5 10.8284 20.5 10C20.5 9.17157 19.8284 8.5 19 8.5C18.1716 8.5 17.5 9.17157 17.5 10C17.5 10.8284 18.1716 11.5 19 11.5Z"
              fill="currentColor"
            />
            <path
              d="M16 15.5C16.8284 15.5 17.5 14.8284 17.5 14C17.5 13.1716 16.8284 12.5 16 12.5C15.1716 12.5 14.5 13.1716 14.5 14C14.5 14.8284 15.1716 15.5 16 15.5Z"
              fill="currentColor"
            />
            <path
              d="M12 20.5C12.8284 20.5 13.5 19.8284 13.5 19C13.5 18.1716 12.8284 17.5 12 17.5C11.1716 17.5 10.5 18.1716 10.5 19C10.5 19.8284 11.1716 20.5 12 20.5Z"
              fill="currentColor"
            />
            <path
              d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
              fill="currentColor"
            />
            <path
              d="M5 11.5C5.82843 11.5 6.5 10.8284 6.5 10C6.5 9.17157 5.82843 8.5 5 8.5C4.17157 8.5 3.5 9.17157 3.5 10C3.5 10.8284 4.17157 11.5 5 11.5Z"
              fill="currentColor"
            />
            <path
              d="M19 11C19 11 17.5 15 12 15C6.5 15 5 11 5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7C12 7 7 7.5 7 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7C12 7 17 7.5 17 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mnfg-desktop-description">
          Manganese is an essential micronutrient for animals, playing a crucial
          role in various physiological functions. It serves as a valuable
          source of manganese, a crucial trace element necessary for the
          well-being of livestock and poultry. This feed-grade supplement
          ensures that animals receive an optimal level of manganese to support
          various physiological functions, including bone development, enzyme
          activation, reproduction, and overall metabolic processes.
        </p>
      </motion.div>
      <motion.div
        className="mnfg-content-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="mnfg-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mnfg-desktop-description">
          Manganese oxide feed grade is carefully formulated to meet stringent
          quality standards for use in animal nutrition, promoting the health
          and productivity of livestock and contributing to the balanced diet
          essential for optimal animal husbandry. If the provided specifications
          do not align with your specific requirements, Mahavir Minerals is
          ready to customize the product accordingly.
        </p>
      </motion.div>
    </>
  );

  return (
    <div className="mnfg-container">
      <div className="mnfg-hero-section">
        <div className="mnfg-hero-background">
          <div className="mnfg-shape mnfg-shape-1"></div>
          <div className="mnfg-shape mnfg-shape-2"></div>
          <div className="mnfg-shape mnfg-shape-3"></div>
        </div>
        <motion.div
          className="mnfg-hero-image-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={FeedGrade}
            alt="Manganese Oxide Feed Grade"
            className="mnfg-hero-image"
          />
        </motion.div>
        <div className="mnfg-hero-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mnfg-title"
          >
            <span className="mnfg-title-highlight">Manganese Oxide</span>
            <br />
            Feed Grade
          </motion.h1>
          {isMobile ? <MobileDescription /> : <DesktopDescription />}
          <motion.div
            className="mnfg-cta-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/contact" className="mnfg-cta-button">
              Request Sample
            </Link>
            <button
              className="mnfg-cta-button mnfg-cta-secondary"
              onClick={scrollToSpecifications}
            >
              Specifications
            </button>
          </motion.div>
        </div>
      </div>

      {/* Desktop-only tab navigation */}
      {!isMobile && (
        <div className="mnfg-tabs-container">
          <div className="mnfg-tabs">
            <button
              className={`mnfg-tab ${
                activeTab === "characteristics" ? "active" : ""
              }`}
              onClick={() => setActiveTab("characteristics")}
            >
              Physical Characteristics
            </button>
            <button
              className={`mnfg-tab ${
                activeTab === "specifications" ? "active" : ""
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
          </div>
        </div>
      )}

      {/* Characteristics Section */}
      <motion.div
        className={`mnfg-characteristics-section ${
          !isMobile && activeTab !== "characteristics" ? "mnfg-hidden" : ""
        }`}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="mnfg-section-title">Physical Characteristics</h2>
        <div className="mnfg-card">
          <table className="mnfg-characteristics-table">
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
                <td>
                  100 or 200 mesh (95-100% passing, Or as per requirement)
                </td>
              </tr>
              <tr>
                <td>Specific Gravity</td>
                <td>4 to 4.5 Toxicity Non - Hazardous</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Specifications Section */}
      <motion.div
        ref={specificationsRef} // Add the ref here
        className={`mnfg-specifications-section ${
          !isMobile && activeTab !== "specifications" ? "mnfg-hidden" : ""
        }`}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="mnfg-section-title">Specifications</h2>
        <div className="mnfg-card">
          <table className="mnfg-specifications-table">
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
        </div>
      </motion.div>
    </div>
  );
};

export default ManganeseOxideFeedGradeEnhanced;
