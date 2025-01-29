import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Building,
  Factory,
  User,
} from "lucide-react";
import Header from "./Header";
import "../styles/Contact.scss";
import Office from "../images/office.jpg";
import FactoryPic from "../images/m1.jpg";

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

    // Get form data
    const formData = {
      first_name: e.target.elements.first_name.value,
      last_name: e.target.elements.last_name.value,
      company_name: e.target.elements.company_name.value,
      email: e.target.elements.email.value,
      mobile: e.target.elements.mobile.value,
      comments: e.target.elements.comments.value,
    };

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormStatus({
          message: "Message sent successfully!",
          type: "success",
          show: true,
        });
        e.target.reset();
      }
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
        show: true,
      });
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />

      <div className="hero-section">
        <div className="hero-container">
          <h1>Get in Touch</h1>
          <p>We're here to help with your mineral needs</p>
        </div>
      </div>

      <section className="contact-details-section">
        <div className="contact-card">
          <h2 className="section-title">
            <Building2 className="icon" />
            Contact Details
          </h2>

          <div className="contact-info">
            <div className="info-item">
              <User className="icon" />
              <div>
                <h3>Mukund Goenka</h3>
                <p>Contact Person</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="icon" />
              <div>
                <h3>Email</h3>
                <p>mahavirminerals12@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 983 4447 544</p>
              </div>
            </div>
          </div>

          <div className="address-section">
            <div className="address-header">
              <Building className="icon" />
              <h3>Office Address</h3>
            </div>
            <div className="address-content">
              <div className="address-line">
                <MapPin className="icon" />
                <p>63 Shivaji Nagar Plot No 63 Near Lad Square</p>
              </div>
              <div className="address-line">
                <MapPin className="icon" />
                <p>Paonarkhari - Tumsar, Bhandara District -441912</p>
              </div>
            </div>
          </div>

          <div className="address-section">
            <div className="address-header">
              <Factory className="icon" />
              <h3>Factory Address</h3>
            </div>
            <div className="address-content">
              <div className="address-line">
                <MapPin className="icon" />
                <p>Paonarkhari - Tumsar, Bhandara District -441912</p>
              </div>
            </div>
          </div>

          <div className="image-grid">
            <div className="image-container">
              <img src={Office} alt="Office" />
            </div>
            <div className="image-container">
              <img src={FactoryPic} alt="Factory" />
            </div>
          </div>
        </div>

        <div className="contact-card contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" name="first_name" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" name="last_name" required />
              </div>
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" name="company_name" />
            </div>

            <div className="form-group">
              <label>Email address *</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Mobile Number *</label>
              <input type="tel" name="mobile" required />
            </div>

            <div className="form-group">
              <label>Comments *</label>
              <textarea name="comments" required></textarea>
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
    </div>
  );
};

export default Contact;
