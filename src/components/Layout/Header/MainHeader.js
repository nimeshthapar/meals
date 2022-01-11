import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/istockphoto-1257849183-170667a-removebg-preview.png';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import './MainHeader.css';

const MainHeader = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  return (
    <>
      {showSideDrawer && (
        <SideDrawer onClose={() => setShowSideDrawer(false)}>
          <ul className="side-nav__items">
            <NavLinks side />
          </ul>
        </SideDrawer>
      )}
      <header className="header">
        <button className="ham-btn" onClick={() => setShowSideDrawer(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">
          <img src={logo} alt="meal-logo" />
          <Link to="/">MERN-MEALS</Link>
        </div>
        <nav className="nav">
          <ul className="nav-items">
            <NavLinks />
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default MainHeader;
