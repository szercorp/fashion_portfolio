import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => (
    <div className="footer-wrapper">
        <div className="footer-col2">
            <div className="socials-wrapper">
                <a href="https://www.facebook.com/elpida.livanou">
                    <div className="socialIcon-wrapper">
                        <FontAwesomeIcon
                            className="socials-icon"
                            icon={faFacebook}
                        />
                    </div>
                </a>
                <a href="https://www.instagram.com/elpidaliv/">
                    <div className="socialIcon-wrapper">
                        <FontAwesomeIcon
                            className="socials-icon"
                            icon={faInstagram}
                        />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/elpida-livanou-b67aba18a/">
                    <div className="socialIcon-wrapper">
                        <FontAwesomeIcon
                            className="socials-icon"
                            icon={faLinkedin}
                        />
                    </div>
                </a>
            </div>
            <p className="crafted-by">Handcrafted by Comets & Stars</p>
            <p className="rights">2020 - Elpida M. Livanou</p>
        </div>
    </div>
);

export default Footer