import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, MapPin, Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../styles/styles.scss";

library.add(faWhatsapp);

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
  const address = "Paonarkhari - Tumsar, Bhandara District - 441912 India";
  const email = "mahavirminerals12@gmail.com";
  const phone = "919834447544";

  const getGoogleMapsLink = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
  };

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

          <motion.div className="footer-section" variants={itemVariants}>
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

          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h4 className="footer-heading">Connect With Us</motion.h4>
            <motion.div className="social-links-container">
              <div className="social-links">
                <motion.a
                  href="https://www.linkedin.com/company/mahavirminerals/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                >
                  <LinkedinIcon size={24} />
                </motion.a>
                <motion.a
                  href={`https://wa.me/${phone}`}
                  className="social-link whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <motion.h4 className="footer-heading">Contact Info</motion.h4>
            <motion.div className="contact-info-container">
              <motion.a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="contact-icon" />
                <span className="contact-text">{address}</span>
              </motion.a>
              <motion.a
                href={`mailto:${email}`}
                className="contact-info-item"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="contact-icon" />
                <span className="contact-text">{email}</span>
              </motion.a>
              <motion.a
                href={`tel:${phone}`}
                className="contact-info-item"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="contact-icon" />
                <span className="contact-text">
                  {phone.replace(/(\d{2})(\d{4})(\d{4})/, "+$1 $2 $3")}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
