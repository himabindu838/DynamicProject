import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, description, buttonText }) => {
  return (
    <section id="hero" className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </section>
  );
};

export default HeroSection;
