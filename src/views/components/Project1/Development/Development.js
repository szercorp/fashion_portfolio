import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './Development.css';

const Development = () => (
    <div className="development-wrapper">
        <ScrollToTop smooth color="#FFFFFF" />
        <div className="projects-hero">
            <div className="projectsHero-col2">
                <h1 className="projectsHero-heading">African Wanderers</h1>
            </div>
        </div>
        <div className="development-body">
            <img className="development-images" src={require('../../../../images/woman_up/development/development (1).jpeg')} alt="development-image1" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (2).jpeg')} alt="development-image9" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (3).jpeg')} alt="development-image8" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (4).jpeg')} alt="development-image2" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (5).jpeg')} alt="development-image14" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (6).jpeg')} alt="development-image3" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (7).jpeg')} alt="development-image4" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (8).jpeg')} alt="development-image5" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (9).jpeg')} alt="development-image6" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (10).jpeg')} alt="development-image7" />
            <img className="development-images" src={require('../../../../images/woman_up/development/development (11).jpeg')} alt="development-image10" />
        </div>
    </div>
);

export default Development