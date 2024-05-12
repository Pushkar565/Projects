import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <Link to="/">
          <img src="src/Pages/home-image/asos1.png" alt="ASOS Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">
            <h2>Women</h2>
          </Link>
          <Link to="/MenHome">
            <h2>Men</h2>
          </Link>
        </div>
        <input className="Nav-input-box" type="text" placeholder="Search..." />
        <div className="nav-icons">
          <Link to='/SignIn'>
          <img src="src/Pages/home-image/profile.jpg" alt="" />
          </Link>
          <Link >
            <img src="src/Pages/home-image/herart.png" alt="" />
          </Link>
          <Link to="/CartPage">
            <img src="src/Pages/home-image/brifcase.svg" alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
