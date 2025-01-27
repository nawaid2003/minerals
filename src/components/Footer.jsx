import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";
import logo from "../images/logo.png";

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
              src={logo}
              alt="Logo"
              className="footer-logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.p className="footer-tagline" variants={itemVariants}>
              Leading the future of sustainable mineral resources
            </motion.p>
          </motion.div>

          <motion.div className="footer-links-section" variants={itemVariants}>
            <motion.h4 className="footer-heading" variants={itemVariants}>
              Quick Links
            </motion.h4>
            <motion.ul className="footer-links-list" variants={itemVariants}>
              {[
                { to: "/contact", text: "Contact" },
                { to: "/faq", text: "FAQ" },
                { to: "/sustainability", text: "Sustainability" },
                { to: "/terms", text: "Terms & Condition" },
                { to: "/privacy", text: "Privacy Policy" },
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Link to={link.to} className="footer-link">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="footer-social-section" variants={itemVariants}>
            <motion.h4 className="footer-heading" variants={itemVariants}>
              Connect With Us
            </motion.h4>
            <motion.div className="social-links" variants={itemVariants}>
              {[
                { Icon: LinkedinIcon, href: "#linkedin", name: "LinkedIn" },
                { Icon: TwitterIcon, href: "#twitter", name: "Twitter" },
                { Icon: FacebookIcon, href: "#facebook", name: "Facebook" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <social.Icon className="social-icon" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-contact-section"
            variants={itemVariants}
          >
            <motion.h4 className="footer-heading" variants={itemVariants}>
              Contact Info
            </motion.h4>
            <motion.p
              className="contact-info"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              Paonarkhari - Tumsar, Bhandara District - 441912 India
            </motion.p>
            <motion.p
              className="contact-info"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              mahavirminerals12@gmail.com
            </motion.p>
            <motion.p
              className="contact-info"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              +91 983 4447 544
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
