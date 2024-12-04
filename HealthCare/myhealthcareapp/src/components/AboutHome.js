import React from "react";
import "./Styles/Header.css";
import "../components/Styles/AboutHome.css"
import { NavLink } from 'react-router-dom';

import NameofImage from "../Components/Assets/adrian-and-mario.png"


const AboutHome = () => {
    return(
<section className = "about">
    <div className = "text-container">
        <h1>Nene's little</h1>
        <h2>About</h2>
        <p>paragraph</p>
    </div>
    <div>
        <img alt="mememe" src ={NameofImage}></img>
    </div>

</section>
    )
}

export default AboutHome;