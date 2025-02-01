import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Sustain from "../images/sustain.png";
import "../styles/Sustainability.scss";

const Sustainability = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // In your animations, add a check for mobile devices
  const isMobile = window.innerWidth <= 768;

  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 }, // Reduced movement on mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" },
    },
  };

  // Reduce scale animations on mobile
  const scaleIn = {
    hidden: { scale: isMobile ? 0.9 : 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="sustainability-page">
      <motion.div
        className="sustainability-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="sustainability-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Environment & Sustainability
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Commitment to Responsible Mining and Manufacturing
          </motion.p>
          <motion.div
            className="hero-decoration"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>

      <div className="sustainability-section" ref={ref}>
        <div className="sustainability-container">
          <motion.div
            className="sustainability-grid"
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              className="sustainability-image-container"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-overlay" />
              <img
                src={Sustain}
                alt="Sustainability Initiative"
                className="sustainability-image"
              />
            </motion.div>
            <motion.div className="sustainability-content" variants={fadeInUp}>
              <h2 className="section-title">Our Environmental Philosophy</h2>
              <p className="sustainability-text">
                Despite the inherent challenges in manganese production, Mahavir
                Minerals prioritizes environmental responsibility. Situated
                strategically away from residential areas, our factory minimizes
                disturbance to nearby communities.
              </p>
              <p className="sustainability-text">
                A strong emphasis on regular machinery maintenance underscores
                our commitment to preventing air or sound pollution, reflecting
                our dedication to sustainable and eco-friendly practices in
                every facet of our operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="sustainability-initiatives"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="initiatives-container">
          <motion.h2 className="section-title text-center" variants={fadeInUp}>
            Our Key Sustainability Initiatives
          </motion.h2>
          <div className="initiatives-grid">
            {[
              {
                title: "Pollution Control",
                description:
                  "Advanced filtration and emission control systems to minimize environmental impact.",
              },
              {
                title: "Resource Efficiency",
                description:
                  "Implementing lean manufacturing practices to reduce waste and optimize resource consumption.",
              },
              {
                title: "Community Engagement",
                description:
                  "Active participation in local environmental and community development programs.",
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                className="initiative-card"
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-decoration" />
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="sustainability-commitment"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="commitment-container">
          <h2 className="section-title text-center">
            Our Long-Term Commitment
          </h2>
          <p className="commitment-text">
            We are committed to continuous improvement in our environmental
            practices, investing in technologies and processes that reduce our
            ecological footprint while maintaining the highest standards of
            product quality and industrial excellence.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Sustainability;
