import React from 'react';
import Logo from '../../assets/Karamara.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt='logo' className="footerLogo" />
     
      <div className="footer-contact">
        <p>Email: support@karamara.com</p>
        <p>Phone: +1 (612) 743-7243</p>
      </div>
      {/* <div className="footer-social">
        <img src="path_to_facebook_icon.png" alt="Facebook" />
        <img src="path_to_twitter_icon.png" alt="Twitter" />
        <img src="path_to_instagram_icon.png" alt="Instagram" />
      </div> */}
      <div className="footer-copyright">
   <div className="footer-links">
        <ul>
          <li>© 2023 Karamara. All rights reserved.</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
