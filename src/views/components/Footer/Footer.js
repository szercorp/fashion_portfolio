import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer-wrapper">
    <div className="socials-wrapper">
      <a href="https://www.facebook.com/elpida.livanou">
        <h3 className="socials-heading">#facebook</h3>
      </a>
      <a href="https://www.instagram.com/elpidaliv/">
        <h3 className="socials-heading">#instagram</h3>
      </a>
      <a href="https://www.linkedin.com/in/elpida-m-livanou-b67aba18a/">
        <h3 className="socials-heading">#linkedin</h3>
      </a>
    </div>
    <div className="names-wrapper">
      <p className="crafted-by">Handcrafted by Comets & Stars</p>
      <p className="rights">2020@ - Elpida M. Livanou</p>
    </div>
  </div>
);

export default Footer;
