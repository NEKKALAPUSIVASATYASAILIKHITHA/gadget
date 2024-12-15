// src/components/Features.js

import React from "react";
import "./Features.css"; // Make sure to create a CSS file for styling the Features section

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose QuickRent?</h2>
      <div className="feature-cards">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon">🎮</div> {/* You can use emojis or icon libraries like FontAwesome */}
          <h3>Wide Variety of Gadgets</h3>
          <p>Rent laptops, cameras, gaming consoles, and more.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon">💰</div> {/* Example emoji */}
          <h3>Affordable Pricing</h3>
          <p>Rent high-quality gadgets at competitive prices.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon">🚚</div> {/* Example emoji */}
          <h3>Quick Delivery</h3>
          <p>Fast and reliable delivery to your doorstep.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
