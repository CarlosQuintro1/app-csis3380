import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-section-title">About Us</h3>
          <p className="footer-section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <p className="footer-section-content">123 Main Street<br />Vancouver, BC 10001<br />Email: info@pepefinance.com<br />Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className="footer-section-content">
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/home?lang=en">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-text">Copyright &copy; {new Date().getFullYear()}
          Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;