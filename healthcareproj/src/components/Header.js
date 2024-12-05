import React from 'react';
import '../components/styles/header.css';
import { NavLink }  from 'react-router-dom';
import logo from '../components/images/logo2.png';


const Header = () => {
  return (
    <header>
        <div className = "header-container">
          <nav>
            <ul>
              <li>  <NavLink to="/">Home</NavLink>  </li>
              <li>  <NavLink to="/urgent-care">Urgent Care</NavLink>  </li>
              <li>  <NavLink to="/facilities">Facilities</NavLink>  </li>
              <li>  <NavLink to="/about">About</NavLink>  </li>
              <li>  <NavLink to="/chart">Chart</NavLink>  </li>
              <li>  <NavLink to="/physicians">Physicians</NavLink>  </li>
            </ul>
          </nav>

          <div className="logo"> <img src={logo} alt="Logo" /> </div>

          <div className="buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>

      </div>
    </header>
  );
};
export default Header;
