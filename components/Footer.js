"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sidebar-footer">
      <h1>Get in Touch</h1>
      <p>📞 123-456-7890</p>
      <p>✉️ waymart@gmail.com</p>
      <div className="social-icons">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
