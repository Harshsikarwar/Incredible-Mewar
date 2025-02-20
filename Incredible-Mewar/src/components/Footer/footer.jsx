import { useState } from "react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./footer.css"

export default function Footer(){
    return(
        <>
        <div className="Bottom_bar">
        <h1 className="title">Incredible Mewar</h1>
            <nav className="menu">
                <ul className="optionsList">
                    <NavLink to="/">
                    <li className="options">Home</li>
                    </NavLink>
                    <NavLink to="/">
                    <li className="options">History</li>
                    </NavLink>
                    <NavLink to="/">
                    <li className="options">Forts</li>
                    </NavLink>
                    <NavLink to="/">
                    <li className="options">Palaces</li>
                    </NavLink>
                </ul>
                <ul className="optionsList2">
                    <NavLink to="/">
                    <li className="options">Wildlife</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="options">About</li>
                    </NavLink>
                    <li className="bottomLogout">Logout</li>
                </ul>
            </nav>
        </div>
        </>
    )

}