import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import "../styles/LegalPages.scss";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="legal-page privacy-page"
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
          Privacy Policy
        </motion.h1>

        <div className="legal-sections">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>Contact Form Information Collection</h2>
            <p>
              When you use our contact form, we may collect the following
              information:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company Name</li>
              <li>Message (optional)</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2>How We Use the Information</h2>
            <p>
              We use the information collected through the contact form for the
              following purposes:
            </p>
            <ul>
              <li>Responding to your inquiries</li>
              <li>Providing information about our products or services</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2>Data Security</h2>
            <p>
              We are committed to ensuring that your information is secure. We
              have implemented suitable physical, electronic, and managerial
              procedures to safeguard and secure the information we collect
              online.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2>Cookies</h2>
            <p>We do not use cookies on our website.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2>Third-Party Resources</h2>
            <p>
              Our website utilizes third-party resources such as Bootstrap,
              Google Fonts, and Font Awesome for improved design and
              functionality. It's important to note that we have no control over
              the privacy practices or content of these third-party services.
              However, we have chosen reputable providers known for their
              commitment to user privacy and data security.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2>Your Consent</h2>
            <p>
              By using our website and submitting information through the
              contact form, you consent to the terms outlined in this Privacy
              Policy.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
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

export default PrivacyPolicy;
