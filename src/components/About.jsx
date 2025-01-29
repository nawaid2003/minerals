import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Facility from "../images/m5.jpg";
import Moil from "../images/moil.png";
import History from "../images/history.png";
import "../styles/About.scss";

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const About = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rect = parallaxRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          parallaxRef.current.style.transform = `translateY(${
            scrolled * 0.1
          }px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    // Animation for number counters
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 16);
    };

    // Observe achievement cards
    const achievementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
            const counter = entry.target.querySelector(".achievement-number");
            if (counter) animateCounter(counter);
          }, index * 200);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".achievement-card")
      .forEach((card) => achievementsObserver.observe(card));

    // Observe sections for fade-in
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const sections = [
      ".company-overview",
      ".leadership-showcase",
      ".heritage-showcase",
    ];

    sections.forEach((section) => {
      document
        .querySelectorAll(section)
        .forEach((el) => sectionObserver.observe(el));
    });
  }, []);

  const leadershipTeam = [
    {
      name: "Mr Chandrakant Goenka",
      position: "Director",
      experience:
        "As the founder of Mahavir Minerals, he steered the company through its formative years, and under his leadership, the company not only sustained itself but also experienced substantial growth.",
      image: "/api/placeholder/300/300",
      social: { whatsapp: "#" },
    },
    {
      name: "Mr Mukund Goenka",
      position: "Business Analyst, Marketing Manager",
      experience:
        "As the son of Mr. Chandrakant Goenka, he has assumed a pivotal role, leveraging his expertise gained from completing his master's in management at the University of Birmingham, England.",
      image: "/api/placeholder/300/300",
      social: { linkedin: "#" },
    },
  ];

  return (
    <div className="about-page">
      <Header />

      {/* Hero Section (Unchanged) */}
      <div className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">About Mahavir Minerals</h1>
          <p className="hero-subtitle">Leading Mineral Solutions Since 1990</p>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="company-overview">
        <div className="container-wrapper">
          <div className="overview-grid">
            <div className="overview-media">
              <img src={Facility} alt="Mahavir Minerals Facility" />
            </div>
            <div className="overview-content">
              <h2>About Us</h2>
              <p>
                Mahavir Minerals, located in Paonarkhari, Bhandara district,
                just 4 kilometers from the esteemed Dongri Buzurg Mine operated
                by MOIL. Established on 28/11/1994, we take pride in being
                pioneers in manganese oxide production.
              </p>
              <p>
                Over the years, Mahavir Minerals has consistently delivered
                quality manganese oxide and now aspires to become a
                manufacturing powerhouse for various manganese-based compounds.
                Our strategic vision involves expanding our product portfolio to
                include a range of manganese compounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-showcase">
        <div className="container-wrapper">
          <div className="achievements-grid">
            {[
              { value: 30, label: "Years Experience" },
              { value: 500, label: "Projects Completed" },
              { value: 50, label: "Countries Served" },
              { value: 100, label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number" data-target={stat.value}>
                  0
                </div>
                <div className="achievement-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="leadership-showcase">
        <div className="container-wrapper">
          <h2 className="leadership-title">Our Management</h2>
          <div className="leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="leader-profile">
                <div className="leader-image-wrapper">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-details">
                  <h3>{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                  <p className="leader-bio">{leader.experience}</p>
                  <div className="social-links">
                    {leader.social.linkedin && (
                      <a href={leader.social.linkedin} className="social-link">
                        <LinkedInIcon />
                      </a>
                    )}
                    {leader.social.whatsapp && (
                      <a href={leader.social.whatsapp} className="social-link">
                        <WhatsAppIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="heritage-showcase">
        <div className="container-wrapper">
          <h2 className="heritage-title">Association with MOIL</h2>
          <div className="heritage-grid">
            <div className="heritage-content">
              <h3>A Heritage of Collaboration and Entrepreneurship</h3>
              <p>
                Mahavir Minerals shares a rich heritage with MOIL, reaching back
                to Mohan Lalji Goenka, the late grandfather of Mr. Chandrakant
                Goenka and great-grandfather of Mr. Mukund Goenka. Engaged in
                business activities during the colonial period, he operated on
                the very site of Moil's present location, serving as a business
                ground controlled by the British.
              </p>
              <p>
                This longstanding association has transcended manganese-related
                businesses, extending into diverse engagements such as
                construction projects, wood supply, and various other ventures.
              </p>
            </div>
            <div className="heritage-gallery">
              <img
                src={Moil}
                alt="MOIL Facility"
                className="contemporary-image"
              />
              <img
                src={History}
                alt="Historical Photo"
                className="legacy-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
