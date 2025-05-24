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
import ManganeseOreFines from "./components/ManganeseOreFines";
import ManganeseOxideFeedGrade from "./components/ManganeseOxideFeedGrade";
import ManganeseOxidePowder from "./components/ManganeseOxidePowder";
import MangneseDioxide from "./components/MangneseDioxide";
import MnO2FilterMedia from "./components/MnO2FilterMedia";
import ManganeseSulphateMonohydrate from "./components/ManganeseSulphateMonohydrate";
import ZincSulphateMonohydrate from "./components/ZincSulphateMonohydrate";
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <>
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
          <Route path="/ManganeseOreFines" element={<ManganeseOreFines />} />
          <Route
            path="/ManganeseOxideFeedGrade"
            element={<ManganeseOxideFeedGrade />}
          />
          <Route
            path="/ManganeseOxidePowder"
            element={<ManganeseOxidePowder />}
          />
          <Route path="/MangneseDioxide" element={<MangneseDioxide />} />
          <Route path="/MnO2FilterMedia" element={<MnO2FilterMedia />} />
          <Route
            path="/ManganeseSulphateMonohydrate"
            element={<ManganeseSulphateMonohydrate />}
          />
          <Route
            path="/ZincSulphateMonohydrate"
            element={<ZincSulphateMonohydrate />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
