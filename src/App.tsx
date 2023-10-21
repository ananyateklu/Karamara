import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/header-and-footer/header";

// Import the necessary components/pages
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* ... add more routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
