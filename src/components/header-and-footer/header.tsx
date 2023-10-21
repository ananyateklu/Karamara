import { useState } from 'react';
import Logo from '../../assets/Karamara.png'
import avatar from '../../assets/avatar.png'
import './header.css'

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <CartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
      <div className="navbar">
        <img src={Logo} alt='logo' className="mainLogo"></img>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-info" onClick={toggleCart}>
          <img src="https://img.icons8.com/color/48/shopping-cart--v1.png" alt="shopping-cart--v1" /> <p>0 items</p>
        </div>
        <div className='user-info'>
          <img src={avatar} alt='user' className='avatar'></img><p>John Anderson</p>
        </div>
        <div className="burger-icon" onClick={toggleSidebar}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
    </>
  );
};

type SideBarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

type CartSidebarProps = {
  isOpen: boolean;
  toggleCart: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <div className="close-icon" onClick={toggleSidebar}>X</div>
      <div className='user-info-side'>
        <img src={avatar} alt='user' className='avatar'></img>
        <p>John Anderson</p>
      </div>
      <ul className='sidebar-links'>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, toggleCart }) => {
  const placeholderItems = ['Item 1', 'Item 2', 'Item 3']; // Placeholder items
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
      <div className="close-icon" onClick={toggleCart}>X</div>
      <h3>Shopping Cart</h3>
      <ul>
        {placeholderItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;