import React from "react";
import { motion } from "framer-motion";
import "../styles/Products.scss";
import Header from "./Header";
import MnO from "../images/mn02.png";
import MnO2 from "../images/mndioxide.png";
import FeedGrade from "../images/feedgrademno.png";
import Ore from "../images/MnOre.png";
import Media from "../images/MediaMn.png";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className={`product-card ${product.order === "reverse" ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="product-image-container"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </motion.div>
      <div className="product-content">
        <motion.h2
          className="product-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          {product.title}
        </motion.h2>
        <motion.p
          className="product-description"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          {product.description}
        </motion.p>
        <motion.button
          className="learn-more-btn"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Products = () => {
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
    <motion.div
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Premium Quality Mineral Solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
