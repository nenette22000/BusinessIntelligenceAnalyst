import React from "react";
import "./Styles/Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <header>
        <div className="header-container">
            <div>
            <NavLink to = "/">
                <div className="logo">
                <img src = { Logo } alt = "Little Lemon logo" />
                </div>
            </NavLink>
            </div>
                <nav className="header-nav-content">
                    <ul>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to ="/about">About</NavLink>
                        </li>
                        <li>
                        <NavLink to ="/menu">Menu</NavLink>
                        </li>
                        <li>
                        <NavLink to ="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
    </header>
    );
};

export default Header;