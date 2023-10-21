import React from "react";
import "./Home.css";

// MainBanner.js
const MainBanner = () => {
  return (
    <div className="main-banner">
      <h2>New Arrival!</h2>
      <p>Description...</p>
      <button>View Product</button>
    </div>
  );
};

// DealsSection.js
const DealsSection = () => {
  return (
    <div className="deals-section">
      <h3>Today Best Deals</h3>
      {/* Map over your products array and render each product */}
    </div>
  );
};

// BrandsSection.js
const BrandsSection = () => {
  return (
    <div className="brands-section">
      <h3>Some of The Amazing Brand</h3>
      {/* Map over your brands array and render each brand */}
    </div>
  );
};


const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <DealsSection />
      <BrandsSection />
    </div>
  );
};

export default HomePage;
