import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/About.scss";

const About = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Parallax Effect
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
    // Story Text Animation
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".story-text")
      .forEach((element) => storyObserver.observe(element));

    // Stats Cards Animation
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

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
              const counter = entry.target.querySelector(".counter");
              if (counter) animateCounter(counter);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".stat-card")
      .forEach((card) => statsObserver.observe(card));

    // Team Cards Animation
    document.querySelectorAll(".team-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 300 + index * 200);
    });
  }, []);

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      experience: "20+ years of experience in mineral industry leadership",
      image: "/api/placeholder/300/300",
    },
    // Add more team members as needed
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title story-text">About Mahavir Minerals</h1>
          <p className="hero-subtitle story-text">
            Leading Mineral Solutions Since 1990
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="overview-section">
        <div className="overview-container">
          <div className="overview-grid">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Founded with a vision to revolutionize the mineral industry,
                Mahavir Minerals has grown to become a global leader in mineral
                processing and distribution. Our core values of Quality and
                Impeccable Customer Service have earned us the trust of clients
                in over 50 countries.
              </p>
              <p className="story-paragraph">
                With decades of experience and a commitment to sustainability,
                we continue to lead innovation in the industry, setting new
                standards for quality and environmental responsibility.
              </p>
            </div>
            <div className="parallax">
              <img
                ref={parallaxRef}
                src="/api/placeholder/600/400"
                alt="Company History"
                className="parallax-image"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            {[
              { value: 30, label: "Years Experience" },
              { value: 500, label: "Projects Completed" },
              { value: 50, label: "Countries Served" },
              { value: 100, label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="counter" data-target={stat.value}>
                  0
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <h2 className="team-title">Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-inner">
                  <div className="team-card-front">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-position">{member.position}</p>
                  </div>
                  <div className="team-card-back">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-experience">
                      {member.experience}
                    </p>
                    <div className="social-links">
                      <a href="#" className="social-link">
                        LinkedIn
                      </a>
                      <a href="#" className="social-link">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
