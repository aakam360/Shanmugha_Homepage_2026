// institutions.js
import React from "react";
import Footer from "../components/institutions/footer";
import HeaderThree from "../components/institutions/header-3";
import HeroSlider from "../components/institutions/hero-slider";
import InstitutionIntro from "../components/institutions/institution-intro";
import Sets from "../components/institutions/sets";
import Features from "../components/institutions/features";
import Aakam from "../components/institutions/aakam";
import AakamShine from "../components/institutions/aakamshine";
import NewsSection from "../components/institutions/NewsSection";

const Institutions = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <HeaderThree />
        <HeroSlider />
        <InstitutionIntro />
        <Sets />
        <Features />
        <Aakam />
        <AakamShine />
        <NewsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Institutions;
