import React, { useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Faq.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  const faqData = [
    {
      question: "How to order with us?",
      answer:
        "Write to us for your need through the website inquiry form or directly through the email address provided.",
      category: "Orders",
    },
    {
      question: "Do you provide custom grades of your products?",
      answer:
        "Yes, we provide custom grades of products based on customer requirements.",
      category: "Products",
    },
    {
      question: "How does Mahavir Minerals assure the quality of its products?",
      answer:
        "We focus quality assurance by thorough testing and adhering to industry norms, guaranteeing natural minerals satisfy the highest requirements.",
      category: "Quality",
    },
    {
      question:
        "Does Mahavir Minerals offer tailored mineral solutions for specific industrial needs?",
      answer:
        "We provide customized mineral materials for industrial applications to fulfill our clients' specific needs.",
      category: "Products",
    },
    {
      question:
        "What is the order and delivery process for acquiring minerals from Mahavir?",
      answer:
        "Simply contact our sales staff to place an order. We prioritize timely processing and efficient delivery to meet your business objectives, while remaining transparent throughout the order fulfillment process.",
      category: "Orders",
    },
  ];

  useEffect(() => {
    setFilteredFaqs(
      faqData.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const categories = [...new Set(faqData.map((faq) => faq.category))];

  return (
    <div className="faq-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header"
        >
          <h1>How can we help?</h1>
          <p>Find answers to commonly asked questions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="search-bar"
        >
          <Search className="icon" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        <div className="categories">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="category"
            >
              <h2>{category}</h2>
              {filteredFaqs
                .filter((faq) => faq.category === category)
                .map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="faq-item"
                  >
                    <div>
                      <button
                        className={activeIndex === index ? "active" : ""}
                        onClick={() =>
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                      >
                        <span>{faq.question}</span>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="icon"
                        >
                          <ChevronDown />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="answer"
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
