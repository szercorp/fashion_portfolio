import React from 'react';
import './Home.css';

const Home = () => (
    <div className="home-wrapper">
        <div className="home-body">
            <img className="home-images" src={require('../../../images/home-backgrounds/home-images (1).jpeg')} alt="home-image1" />
            <img className="home-images" src={require('../../../images/home-backgrounds/home-images (2).jpeg')} alt="home-image2" />
            <img className="home-images" src={require('../../../images/home-backgrounds/home-images (3).jpeg')} alt="home-image3" />
            <img className="home-images" src={require('../../../images/home-backgrounds/home-images (4).jpeg')} alt="home-image4" />
            {/* <div className="home-row1">
                <img className="home-images" src={require('../../../images/home-backgrounds/home-images (1).jpeg')} alt="home-image1" />
                <img className="home-images" src={require('../../../images/home-backgrounds/home-images (2).jpeg')} alt="home-image2" />
            </div> */}
            {/* <div className="home-row2">
                <img style={{ objectFit: 'contain' }} className="home-images" src={require('../../../images/home-backgrounds/home-images (3).jpeg')} alt="home-image3" />
                <img className="home-images" src={require('../../../images/home-backgrounds/home-images (4).jpeg')} alt="home-image4" />
            </div> */}
        </div>
    </div>
);

export default Home