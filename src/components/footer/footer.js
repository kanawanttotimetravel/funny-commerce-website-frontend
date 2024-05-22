import React from "react";
import "./footer-style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#">Drakon</a>
          <p>144 Xuân Thủy Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <form action="#">
            <input
              className="email-input"
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button type="submit" className="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 Drakon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
