import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => (
  <div className="projects-wrapper">
    <div className="projects-hero">
      <h1 className="projects-heading">Projects</h1>
    </div>
    <div className="projects-body">
      <div className="projects">
        <Link className="link-items" to={'/projects/woman_up'}>
          <div className="projects-inner" id="womanUp">
            <h3 className="hoverable-heading">
              WOMAN UP - GRADUATION COLLECTION
            </h3>
          </div>
          <h1 className="projects-number">#01</h1>
        </Link>
      </div>
      <div className="projects">
        <Link className="link-items" to={'/projects/tradernity'}>
          <div className="projects-inner" id="tradernity">
            <h3 className="hoverable-heading">
              TRADERNITY COLLECTION A/W 2018
            </h3>
          </div>
          <h1 className="projects-number">#02</h1>
        </Link>
      </div>

      <div className="projects">
        <Link className="link-items" to={'/projects/black_panther'}>
          <div className="projects-inner" id="panther">
            <h3 className="hoverable-heading">
              BLACK PANTHER COLLECTION A/W 2019
            </h3>
          </div>
          <h1 className="projects-number">#03</h1>
        </Link>
      </div>
      <div className="projects">
        <Link className="link-items" to={'/projects/chaos'}>
          <div className="projects-inner" id="chaos">
            <h3 className="hoverable-heading">CHAOTICS</h3>
          </div>
          <h1 className="projects-number">#04</h1>
        </Link>
      </div>
    </div>
  </div>
);

export default Projects;
