import React from 'react';
import { NavLink }  from 'react-router-dom';
import '../components/styles/footer.css';
import logo from '../components/images/logo2.png';

const Footer = () => {
  return (
      <footer>
          <div className = "logo">
            <img src={logo} alt = "footer-logo" />
          </div>
          <p>&copy;
            2023 HealthCare. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
            <div className = "footer-container">
                <ul>
                  <li>  <NavLink to="/">Home</NavLink>  </li>
                  <li>  <NavLink to="/urgent-care">Urgent Care</NavLink>  </li>
                  <li>  <NavLink to="/facilities">Facilities</NavLink>  </li>
                  <li>  <NavLink to="/about">About</NavLink>  </li>
                  <li>  <NavLink to="/chart">Chart</NavLink>  </li>
                  <li>  <NavLink to="/physicians">Physicians</NavLink>  </li>
                  <li>  <NavLink to="/sign-in">Sign In</NavLink></li>
                  <li>  <NavLink to="/sign-up">Sign Up</NavLink></li>
                  <li>  <NavLink to="/reset-password">Reset Password</NavLink></li>
                </ul>
              </div>
              <p>HealthCare is a registered trademark of HealthCare. All rights reserved.</p>

        </footer>
  );
};

export default Footer;
