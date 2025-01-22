import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.scss";
import Header from "./Header";
import MnO from "../images/mn02.png";
import MnO2 from "../images/mndioxide.png";
import FeedGrade from "../images/feedgrademno.png";
import Ore from "../images/MnOre.png";
import Media from "../images/MediaMn.png";

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
      title: "MANGANESE OXIDE POWDER",
      description:
        "Manganese Oxide (Feed Grade) is used as a trace mineral in Animal Feed & is also used as a fertilizer in the Agriculture Industry.",
      image: MnO,
      order: "normal",
    },
    {
      id: 2,
      title: "MANGANESE DIOXIDE",
      description:
        "Manganese Oxide (Chemical Grade) is used as a raw material for manufacturing Manganese salts such as Manganese Carbonate and Manganese Sulphate.",
      image: MnO2,
      order: "reverse",
    },
    {
      id: 3,
      title: "MANGANESE OXIDE FEED GRADE",
      description:
        "High-quality Manganese Dioxide for various industrial applications including battery manufacturing and chemical processes.",
      image: FeedGrade,
      order: "normal",
    },
    {
      id: 4,
      title: "MANGANESE ORE FINES",
      description:
        "Premium Manganese Sulphate for agricultural and industrial uses, ensuring optimal mineral supplementation.",
      image: Ore,
      order: "reverse",
    },
    {
      id: 5,
      title: "FILTER MEDIA MnO₂",
      description:
        "High-quality Manganese Dioxide for various industrial applications including battery manufacturing and chemical processes.",
      image: Media,
      order: "normal",
    },
  ];

  return (
    <div className="products-page">
      <Header />

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
