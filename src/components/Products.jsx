import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.scss";

const Products = () => {
  useEffect(() => {
    // Initial animations
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
      element.classList.add("visible");
    });

    // Product cards scroll animation
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

    document.querySelectorAll(".product-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      title: "MANGANESE OXIDE FEED GRADE",
      description:
        "Manganese Oxide (Feed Grade) is used as a trace mineral in Animal Feed & is also used as a fertilizer in the Agriculture Industry.",
      image: "/api/placeholder/300/300",
      order: "normal",
    },
    {
      id: 2,
      title: "MANGANESE OXIDE CHEMICAL GRADE",
      description:
        "Manganese Oxide (Chemical Grade) is used as a raw material for manufacturing Manganese salts such as Manganese Carbonate and Manganese Sulphate.",
      image: "/api/placeholder/300/300",
      order: "reverse",
    },
    {
      id: 3,
      title: "MANGANESE DIOXIDE",
      description:
        "High-quality Manganese Dioxide for various industrial applications including battery manufacturing and chemical processes.",
      image: "/api/placeholder/300/300",
      order: "normal",
    },
    {
      id: 4,
      title: "MANGANESE SULPHATE",
      description:
        "Premium Manganese Sulphate for agricultural and industrial uses, ensuring optimal mineral supplementation.",
      image: "/api/placeholder/300/300",
      order: "reverse",
    },
  ];

  return (
    <div className="products-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/api/placeholder/150/50" alt="Mahavir Minerals Logo" />
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
          <h1 className="hero-title fade-in">Our Products</h1>
          <p className="hero-subtitle fade-in">
            Premium Quality Mineral Solutions
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="products-container">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card ${
                product.order === "reverse" ? "reverse" : ""
              }`}
            >
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
