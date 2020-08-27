import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SideNavBar from '../SideNavBar/SideNavBar';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Project1 from '../Project1/Project1';
import Development from '../Project1/Development/Development';
import Project2 from '../Project2/Project2';
import Project3 from '../Project3/Project3';
import Project4 from '../Project4/Project4';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  // Function to go to top of the page when refreshing
  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     window.scrollTo(0, 0);
  //   }
  // }, [])

  return (
    <Router basename="/">
      <div className="app-wrapper">
      <SideNavBar />
        <NavBar />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/woman_up" exact component={Project1} />
          <Route path="/projects/woman_up/development" component={Development} />
          <Route path="/projects/tradernity" component={Project2} />
          <Route path="/projects/black_panther" component={Project3} />
          <Route path="/projects/chaos" component={Project4} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
