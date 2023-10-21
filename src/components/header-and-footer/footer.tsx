import React from 'react';
import Logo from '../../assets/Karamara.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt='logo' className="footerLogo" />
      <div className="footer-links">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>Email: support@karamara.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className="footer-social">
        {/* Replace these with your own social media icons */}
        <img src="path_to_facebook_icon.png" alt="Facebook" />
        <img src="path_to_twitter_icon.png" alt="Twitter" />
        <img src="path_to_instagram_icon.png" alt="Instagram" />
      </div>
      <div className="footer-copyright">
        <p>© 2023 Karamara. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
