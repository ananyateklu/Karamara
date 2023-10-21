import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header-and-footer/header";
import Footer from "./components/header-and-footer/footer";

// Import the necessary components/pages
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* ... add more routes as necessary */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
