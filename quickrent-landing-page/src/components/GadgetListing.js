// src/components/GadgetListing.js

import React from "react";
import "./GadgetListing.css"; // Make sure to create a CSS file for styling

const GadgetListing = () => {
  // Sample gadget data (you can replace this with real data later)
  const gadgets = [
    { id: 1, name: "Laptop", description: "Rent the latest laptops for work or gaming.", icon: "💻" },
    { id: 2, name: "Camera", description: "Capture beautiful moments with high-quality cameras.", icon: "📸" },
    { id: 3, name: "Gaming Console", description: "Rent the latest gaming consoles for fun.", icon: "🎮" },
  ];

  return (
    <section className="gadget-listing">
      <h2>Our Featured Gadgets</h2>
      <div className="gadget-cards">
        {gadgets.map((gadget) => (
          <div key={gadget.id} className="gadget-card">
            <div className="gadget-icon">{gadget.icon}</div> {/* Changed to use emoji based on gadget type */}
            <h3>{gadget.name}</h3>
            <p>{gadget.description}</p>
            <button className="cta-btn">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GadgetListing;
