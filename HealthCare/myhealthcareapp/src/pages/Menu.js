import React from "react";
import { NavLink } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"



const Menu = () => {
    return (
        <>
        <div>
            <Header />
            <h1>Menu</h1>
            <div class="menu-container">
                <div class="section">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
            <Footer />
        </>
    )
}

    export default Menu;