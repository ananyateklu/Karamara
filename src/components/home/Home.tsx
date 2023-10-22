import React from "react";
import "./Home.css";
import Handbag1 from "../../assets/handbag1.png";
import Handbag2 from "../../assets/handbag2.png";
import Shoes1 from "../../assets/mensshoes1.png";
import Shoes2 from "../../assets/mensshoes2.png";
import Shoes3 from "../../assets/womansshoes1.png";
import Mens1 from "../../assets/mens1.png";
import Womans1 from "../../assets/womans1.png";
import Floatbag from "../../assets/womansb1.png";
import Tie1 from "../../assets/tie1.png";

// MainBanner.js
const MainBanner = () => {
  return (
    <div className="main-banner">

      <h3>ITALIAN WOMAN'S BAG</h3>
      <p>Stylish woman's bag hand made with real leather in Italy</p>
      <button>View Products</button>
    </div>
  );
};

const SecondaryBanner = () => {
  return (
    <div className="secondary-banner">
      {/* You can place content or additional images here */}
      <h3>MEN'S SHOES</h3>
      <p>Discover our latest collection...</p>
    </div>
  );
};


// DealsSection.js
const DealsSection = () => {
  const exampleBestDeals = [
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
        {exampleBestDeals.map(product => (
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
const ProductsSection = () => {
  const exampleProducts = [
    { id: 1, name: "Men's Apparel", image: Mens1 },
    { id: 2, name: "Women's Apparel", image: Womans1 },
    { id: 3, name: "Women's Bag", image: Floatbag },
    { id: 4, name: "Men's Tie", image: Tie1 },
    //... add more example products
  ];
  return (
    <div className="products-section">
      <div className="products-grid">
        {exampleProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
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
      <ProductsSection />
    </div>
  );
};

export default HomePage;
