import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './Project1.css';

const Project1 = () => (
    <div className="project1-wrapper">
        {/* <ScrollToTop smooth color="#FFFFFF" /> */}
        <div className="projects-hero">
            <div className="projectsHero-col2">
                <h1 data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="projectsHero-heading" style={{ marginBottom: '10px'}}>WOMAN UP</h1>
                <h1 data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="projectsHero-heading" style={{ marginBottom: '20px'}}>FASHION EDITORIAL</h1>
            </div>
            <div className="projectsHero-col3">
                <Link className="link-items" to={'/projects/woman_up/development'}>
                    <h1 data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" className="development-heading">Graduation Collection - Development</h1>
                </Link>
            </div>
        </div>
        <div className="project1-body">
            <img className="project1-images" id="project1Image1" src={require('../../../images/woman_up/woman_up (1).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (2).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (3).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (4).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (5).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (6).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (7).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (8).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (9).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (10).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (11).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (12).jpeg')} />
            <img className="project1-images" src={require('../../../images/woman_up/woman_up (13).jpeg')} />
            <img className="project1-images" id="project1Image17" src={require('../../../images/woman_up/woman_up (14).jpeg')} />
        </div>
    </div>
);

export default Project1