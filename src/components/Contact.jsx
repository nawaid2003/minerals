import React, { useEffect, useState } from "react";
import Header from "./Header";
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
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

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

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <h1>Get in Touch</h1>
          <p>We're here to help with your mineral needs</p>
        </div>
      </div>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        {/* Contact Details Card */}
        <div className="contact-card">
          <h2>Contact Details</h2>
          <div className="contact-info">
            <h3>Mukund Goenka</h3>
            <p>mahavirminerals12@gmail.com</p>
            <p>+91 983 4447 544</p>
          </div>

          <div className="address-section">
            <h3>Office Address</h3>
            <p>
              63 Shivaji Nagar Plot No 63 Near Lad Square
              <br />
              Paonarkhari - Tumsar, Bhandara District -441912
            </p>
          </div>

          <div className="address-section">
            <h3>Factory Address</h3>
            <p>Paonarkhari - Tumsar, Bhandara District -441912</p>
          </div>

          <div className="image-grid">
            <img src="/api/placeholder/400/300" alt="Office" />
            <img src="/api/placeholder/400/300" alt="Factory" />
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" required />
              </div>
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email address *</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Mobile Number *</label>
              <input type="tel" required />
            </div>

            <div className="form-group">
              <label>Comments *</label>
              <textarea required></textarea>
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
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

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
