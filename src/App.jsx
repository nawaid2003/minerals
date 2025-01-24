import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Sustainability from "./components/Sustainability";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/Terms";
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
