import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import "../styles/LegalPages.scss";

const TermsAndConditions = () => {
  return (
    <motion.div
      className="legal-page terms-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="legal-content-container">
        <motion.h1
          className="legal-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Terms and Conditions
        </motion.h1>

        <div className="legal-sections">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these
              Terms and Conditions and all applicable laws and regulations.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2>2. Use of the Website</h2>
            <p>
              This website is provided for informational purposes only. You
              agree not to use it for any unlawful or prohibited activities.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2>3. Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos, and
              images, is the property of Mahavir Minerals and is protected by
              intellectual property laws.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2>4. Privacy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy.
              Please review it to understand our practices.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2>5. Limitation of Liability</h2>
            <p>
              Mahavir Minerals is not liable for any direct, indirect,
              incidental, consequential, or punitive damages arising out of your
              access to or use of this website.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. It is your responsibility to review them periodically.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at{" "}
              <a href="mailto:mahavirminarals12@gmail.com">
                mahavirminarals12@gmail.com
              </a>
              .
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
