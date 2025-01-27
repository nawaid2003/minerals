import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./Header";
import { Link } from "react-router-dom";
import MnO from "../images/mn02.png";
import MnO2 from "../images/mndioxide.png";
import FeedGrade from "../images/feedgrademno.png";
import Ore from "../images/MnOre.png";
import Media from "../images/MediaMn.png";
import "../styles/Products.scss";

const products = [
  {
    id: 1,
    title: "MANGANESE OXIDE POWDER",
    description:
      "Manganese Oxide (Feed Grade) is used as a trace mineral in Animal Feed & is also used as a fertilizer in the Agriculture Industry.",
    image: MnO,
    order: "normal",
    link: "/ManganeseOxidePowder",
  },
  {
    id: 2,
    title: "MANGANESE DIOXIDE",
    description:
      "Manganese Oxide (Chemical Grade) is used as a raw material for manufacturing Manganese salts such as Manganese Carbonate and Manganese Sulphate.",
    image: MnO2,
    order: "reverse",
    link: "/MangneseDioxide",
  },
  {
    id: 3,
    title: "MANGANESE OXIDE FEED GRADE",
    description:
      "High-quality Manganese Dioxide for various industrial applications including battery manufacturing and chemical processes.",
    image: FeedGrade,
    order: "normal",
    link: "/ManganeseOxideFeedGrade",
  },
  {
    id: 4,
    title: "MANGANESE ORE FINES",
    description:
      "Premium Manganese Sulphate for agricultural and industrial uses, ensuring optimal mineral supplementation.",
    image: Ore,
    order: "reverse",
    link: "/ManganeseOreFines",
  },
  {
    id: 5,
    title: "FILTER MEDIA MnO₂",
    description:
      "High-quality Manganese Dioxide for various industrial applications including battery manufacturing and chemical processes.",
    image: Media,
    order: "normal",
    link: "/MnO2FilterMedia",
  },
];

const ProductCard = ({ product, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`product-card ${product.order === "reverse" ? "reverse" : ""}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <motion.div className="product-image-container" whileHover="hover">
        <motion.img
          variants={imageVariants}
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="image-overlay">
          <motion.div
            className="overlay-content"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            <span>View Details</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="product-content"
        initial={{ opacity: 0, x: product.order === "reverse" ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <Link to={product.link || "#"}>
          <motion.button
            className="learn-more-btn"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#001f3f",
              boxShadow: "0 5px 15px rgba(0,31,63,0.3)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            Explore More
            <span className="btn-arrow">→</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header />

      <motion.div
        className="hero-section"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Our Premium Products
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Discover Our Range of High-Quality Mineral Solutions
          </motion.p>
        </div>
      </motion.div>

      <div className="products-section">
        <div className="products-container">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
