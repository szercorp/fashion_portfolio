import React from 'react';
import './Project3.css';

const Project3 = () => (
  <div className="project3-wrapper">
    <div className="projects-hero">
      <div className="projectsHero-col2">
        <h1 className="projectsHero-heading" style={{ marginBottom: '10px' }}>
          BLACK PANTHER
        </h1>
        <h1 className="projectsHero-heading">COLLECTION A/W 2019</h1>
      </div>
    </div>
    <div className="project3-body">
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (1).jpg')}
        alt="project3-image1"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (2).jpg')}
        alt="project3-image2"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (3).jpg')}
        alt="project3-image3"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (4).jpg')}
        alt="project3-image4"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (5).jpg')}
        alt="project3-image5"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (6).jpg')}
        alt="project3-image6"
      />
      <img
        className="project3-images"
        src={require('../../../../../assets/images/black_panther/black_panther (7).jpg')}
        alt="project3-image7"
      />
    </div>
  </div>
);

export default Project3;
