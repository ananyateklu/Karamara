import React from "react";
import "./Home.css";
import Handbag1 from "../../assets/handbag1.png";
import Handbag2 from "../../assets/handbag2.png";
import Shoes1 from "../../assets/mensshoes1.png";
import Shoes2 from "../../assets/mensshoes2.png";
import Shoes3 from "../../assets/womansshoes1.png";

// MainBanner.js
const MainBanner = () => {
  return (
    <div className="main-banner">
      <h2>NEW ARRIVAL!</h2>
      <h3>ITALIAN WOMAN'S BAG</h3>
      <p>Stylish woman's bag hand made with real leather in Italy</p>
      <button>View Product</button>
    </div>
  );
};

const SecondaryBanner = () => {
  return (
    <div className="secondary-banner">
      {/* You can place content or additional images here */}
      <h4>Featured Item</h4>
      <p>Discover our latest collection...</p>
    </div>
  );
};


// DealsSection.js
const DealsSection = () => {
  const exampleProducts = [
    { id: 1, name: 'Nike Downshifter 12', price: '$ 60', image: Handbag1 },
    { id: 2, name: 'Compass Retrograde Hi...', price: '$ 80', image: Handbag2 },
    { id: 3, name: 'Adidas Superstar X LG...', price: '$ 120', image: Shoes1 },
    { id: 4, name: 'Adidas Superstar X LG...', price: '$ 90', image: Shoes2 },
    { id: 5, name: 'Adidas Superstar X LG...', price: '$ 140', image: Shoes3 },
    //... add more example products
  ];
  return (
    <div className="deals-section">
      <h3>Today Best Deals!</h3>
      <div className="deals-grid">
        {exampleProducts.map(product => (
          <div key={product.id} className="deal-item">
            <img src={product.image} alt={product.name} />
            <p className="item-name">{product.name}</p>
            <p className="item-price">{product.price}</p>
          </div>
        ))}
      </div>
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
       <div className="banner-container">
        <MainBanner />
        <SecondaryBanner />
      </div>
      <DealsSection />
      <BrandsSection />
    </div>
  );
};

export default HomePage;
