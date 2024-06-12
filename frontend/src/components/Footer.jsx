import React from "react";
import "./Footer.css";
import logo from "../assets/images/logo.png";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import paymentIcon from "../assets/images/payment-icons.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-wrapper">
          <div className="footer-row-1">
            <img src={logo} alt="logo" className="footer-logo" />
            <p>Savor the artistry where every dish is a culinary masterpiece</p>
          </div>
          <div className="footer-row-2">
            <h3>Useful Links</h3>
            <p>About Us</p>
          </div>
          <div className="footer-row-3">
            <h3>Contact Us</h3>
            <p>+27 72 713 4189</p>
            <p>support@jpitdev.co.za</p>
            <br />
            <p>
              1440 Block F, <br />
              Letlhabile, Brits, <br />
              0264
            </p>
          </div>
        </div>
        <div className="footer-icons">
          <Facebook />
        </div>
        <div className="copywrite">
          <img src={paymentIcon} alt="" />
          <p className="copywrite-info">
            Copyright &copy; 2024 JP IT Dev | All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
