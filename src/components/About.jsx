import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Facility from "../images/m5.jpg";
import Moil from "../images/moil.png";
import History from "../images/history.png";
import Owner1 from "../images/owner1.png";
import Owner2 from "../images/owner2.png";
import Sustain from "../images/sustain.png";
import "../styles/About.scss";

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

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target === 1994 ? target : target + "+";
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 16);
    };

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
      ".environment-section",
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
      image: Owner1,
    },
    {
      name: "Mr Mukund Goenka",
      position: "Business Analyst, Marketing Manager",
      experience:
        "As the son of Mr. Chandrakant Goenka, he has assumed a pivotal role, leveraging his expertise gained from completing his master's in management at the University of Birmingham, England.",
      image: Owner2,
    },
  ];

  return (
    <div className="about-page">
      <Header />

      <div className="hero-section about-hero">
        <div className="hero-container">
          <h1 className="hero-title">About Mahavir Minerals</h1>
          <p className="hero-subtitle">Leading Mineral Solutions Since 1990</p>
        </div>
      </div>

      <div className="company-overview">
        <section className="content-section">
          <div className="container-wrapper">
            <div className="overview-grid">
              <div className="overview-media">
                <img src={Facility} alt="Mahavir Minerals Facility" />
              </div>
              <div className="overview-content">
                <h2>About Us</h2>
                <p>
                  Mahavir Minerals, located in Paonarkhari, Bhandara district,
                  just 4 kilometers from the esteemed Dongri Buzurg Mine
                  operated by MOIL. Established on 28/11/1994, we take pride in
                  being pioneers in manganese oxide production.
                </p>
                <p>
                  Over the years, Mahavir Minerals has consistently delivered
                  quality manganese oxide and now aspires to become a
                  manufacturing powerhouse for various manganese-based
                  compounds. Our strategic vision involves expanding our product
                  portfolio to include a range of manganese compounds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="achievements-showcase">
        <section className="content-section">
          <div className="container-wrapper">
            <div className="achievements-grid">
              {[
                { value: "30+", label: "Years Experience" },
                { value: "1994", label: "Since Our Journey Began" },
                { value: "10+", label: "Diverse Industrial Application" },
              ].map((stat, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-number" data-target={stat.value}>
                    {stat.value.replace("+", "")}
                  </div>
                  <div className="achievement-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <div className="environment-section fade-in-section">
        <div className="container-wrapper">
          <div className="environment-grid">
            <div className="environment-content">
              <h2 className="section-title">Environment & Sustainability</h2>
              <p className="environment-text">
                Despite the inherent challenges in manganese production, Mahavir
                Minerals prioritizes environmental responsibility. Situated
                strategically away from residential areas, our factory minimizes
                disturbance to nearby communities.
              </p>
              <p className="environment-text">
                A strong emphasis on regular machinery maintenance underscores
                our commitment to preventing air or sound pollution, reflecting
                our dedication to sustainable and eco-friendly practices in
                every facet of our operations.
              </p>
            </div>
            <div className="environment-image-container">
              <img
                src={Sustain}
                alt="Environmental Sustainability"
                className="environment-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
