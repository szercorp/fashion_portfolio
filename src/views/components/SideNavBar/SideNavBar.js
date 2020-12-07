import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './SideNavBar.css';
import icon from '../../../assets/images/menu.svg';

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div className="sideNavBar-wrapper">
        <Menu
          isOpen={this.state.isMenuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={
            <img style={{ height: '30px', width: '30px' }} src={icon} />
          }
        >
          <h1 className="sideNavBar-heading">Menu</h1>
          <Link
            onClick={() => this.closeMenu()}
            className="sideNavBar-link"
            to="/"
          >
            <li className="sideNavBar-item">Home</li>
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            className="sideNavBar-link"
            to="/about"
          >
            <li className="sideNavBar-item">About</li>
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            className="sideNavBar-link"
            to="/projects"
          >
            <li className="sideNavBar-item">Projects</li>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default SideNavBar;
