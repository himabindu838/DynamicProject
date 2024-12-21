import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const data = {
    heroSection: {
      title: "Welcome to Dynamic Website",
      description: "Explore dynamic content created using JSON.",
      buttonText: "Discover More",
    },
    services: [
      { title: "Web Development", description: "Building responsive websites." },
      { title: "App Development", description: "Creating mobile applications." },
      { title: "Digital Marketing", description: "Promoting your brand online." },
    ],
    contactForm: {
      fields: [
        { id: "name", type: "text", placeholder: "Your Name" },
        { id: "email", type: "email", placeholder: "Your Email" },
        { id: "message", type: "textarea", placeholder: "Your Message" },
      ],
    },
  };

  return (
    <>
      <Header />
      <HeroSection
        title={data.heroSection.title}
        description={data.heroSection.description}
        buttonText={data.heroSection.buttonText}
      />
      <Services services={data.services} />
      <ContactForm fields={data.contactForm.fields} />
      <Footer />
    </>
  );
};

export default App;
