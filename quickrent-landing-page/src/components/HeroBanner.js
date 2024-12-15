// src/components/HeroBanner.js

import React from "react";
import "./HeroBanner.css"; // Styling file for the Hero section
import logo from "../assets/images/logo.jpeg"; // Correct relative path to logo
import Features from "./Features"; // Import the Features component
import GadgetListing from "./GadgetListing"; 
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const HeroBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-banner">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="QuickRent Logo" className="logo-img" />
          </div>
          <button className="signup-btn">Sign Up</button>
        </nav>
        <div className="hero-content">
          <h1>Explore the World of Gadget Rentals</h1>
          <p>Rent laptops, cameras, gaming consoles, and more at affordable prices.</p>
          <button className="cta-btn">Explore Rentals</button>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      <GadgetListing />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HeroBanner;
