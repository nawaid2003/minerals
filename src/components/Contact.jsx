import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.scss";

const Contact = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    show: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll handler for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    // Office cards animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".office-card").forEach((card) => {
      observer.observe(card);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus({
        message: "Message sent successfully!",
        type: "success",
        show: true,
      });
      e.target.reset();
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
        show: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offices = [
    {
      name: "Australia Office",
      location: "Perth, WA",
    },
    {
      name: "Europe Office",
      location: "London, UK",
    },
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      content: "123 Mining Avenue\nResource City, RC 12345",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: "📧",
      title: "Email",
      content: "contact@mineraltech.com",
    },
  ];

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/api/placeholder/150/50" alt="MineralTech Logo" />
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <h1>Get in Touch</h1>
          <p>We're here to help with your mineral needs</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" className="form-input" required />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea className="form-input" rows="4" required></textarea>
                </div>
                {formStatus.show && (
                  <div className={`message ${formStatus.type} show`}>
                    {formStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  className={`submit-button ${loading ? "loading" : ""}`}
                  disabled={loading}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="info-container">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item">
                      <div className="contact-icon">{info.icon}</div>
                      <div>
                        <h3>{info.title}</h3>
                        <p>{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Offices */}
              <div className="offices-grid">
                {offices.map((office, index) => (
                  <div key={index} className="office-card">
                    <h3>{office.name}</h3>
                    <p>{office.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
};

export default Contact;
