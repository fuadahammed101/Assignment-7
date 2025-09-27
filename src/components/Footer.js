import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h4>CS — Ticket System</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column company">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>
          <div className="footer-column services">
            <h4>Services</h4>
            <ul>
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div className="footer-column information">
            <h4>Information</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div className="footer-column social">
            <h4>Social Links</h4>
            <ul className="social-links">
              <li className="social-link twitter">
                <span className="social-icon"></span>
                <span className="social-text">@CS — Ticket System</span>
              </li>
              <li className="social-link linkedin">
                <span className="social-icon"></span>
                <span className="social-text">@CS — Ticket System</span>
              </li>
              <li className="social-link facebook">
                <span className="social-icon"></span>
                <span className="social-text">@CS — Ticket System</span>
              </li>
              <li className="social-link email">
                <span className="social-icon"></span>
                <span className="social-text">support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p className="footer-copyright">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
