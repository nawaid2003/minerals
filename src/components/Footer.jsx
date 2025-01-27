import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, MessageSquare, MapPin, Mail, Phone } from "lucide-react";
import "../styles/styles.scss";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-grid" variants={footerVariants}>
          <motion.div className="footer-logo-section" variants={itemVariants}>
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="footer-logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.p className="footer-tagline">
              Leading the future of sustainable mineral resources
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="footer-heading">Quick Links</motion.h4>
            <motion.div className="footer-links-list">
              {[
                { to: "/contact", text: "Contact" },
                { to: "/faq", text: "FAQ" },
                { to: "/sustainability", text: "Sustainability" },
                { to: "/terms", text: "Terms & Condition" },
                { to: "/privacy", text: "Privacy Policy" },
              ].map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Link to={link.to} className="footer-link">
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="footer-heading">Connect With Us</motion.h4>
            <motion.div className="social-links">
              <motion.a
                href="https://www.linkedin.com/company/mahavirminerals/"
                className="social-link"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
              >
                <LinkedinIcon />
              </motion.a>
              <motion.a
                href="#whatsapp"
                className="social-link"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
              >
                <MessageSquare />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 className="footer-heading">Contact Info</motion.h4>
            <motion.div>
              <motion.div className="contact-info" whileHover={{ scale: 1.05 }}>
                <MapPin className="icon" />
                <span>
                  Paonarkhari - Tumsar, Bhandara District - 441912 India
                </span>
              </motion.div>
              <motion.div className="contact-info" whileHover={{ scale: 1.05 }}>
                <Mail className="icon" />
                <span>mahavirminerals12@gmail.com</span>
              </motion.div>
              <motion.div className="contact-info" whileHover={{ scale: 1.05 }}>
                <Phone className="icon" />
                <span>+91 983 4447 544</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
