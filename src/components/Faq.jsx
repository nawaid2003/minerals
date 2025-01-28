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
    },
    {
      question: "Do you provide custom grades of your products?",
      answer:
        "Yes, we provide custom grades of products based on customer requirements.",
    },
    {
      question: "How does Mahavir Minerals assure the quality of its products?",
      answer:
        "We focus quality assurance by thorough testing and adhering to industry norms, guaranteeing natural minerals satisfy the highest requirements.",
    },
    {
      question:
        "Does Mahavir Minerals offer tailored mineral solutions for specific industrial needs?",
      answer:
        "We provide customized mineral materials for industrial applications to fulfill our clients' specific needs.",
    },
    {
      question:
        "What is the order and delivery process for acquiring minerals from Mahavir?",
      answer:
        "Simply contact our sales staff to place an order. We prioritize timely processing and efficient delivery to meet your business objectives, while remaining transparent throughout the order fulfillment process.",
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
          transition={{ duration: 0.6 }}
          className="search-bar"
        >
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="faq-list"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="faq-item"
            >
              <button
                className={activeIndex === index ? "active" : ""}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="icon"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.25, delay: 0.15 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.25 },
                      },
                    }}
                    className="answer"
                  >
                    <div className="answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
