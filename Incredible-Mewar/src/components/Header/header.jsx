import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"
import burger from "E:\\webdevelopment projects\\Incredible-Mewar\\Incredible-Mewar\\src\\Images\\menu-burger.png"

export default function Header(){
    const [sidemenu, setMenu]=useState("none");
    return(
        <>
        <div className="headerBar">
            <nav className="headerNav">
            <h1 className="headerTitle">Incredible Mewar</h1>
                <ul className="headerList">
                    <NavLink to="/">
                    <li className="headerOptions">Home</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="headerOptions">History</li>
                    </NavLink>
                    <NavLink>
                    <li className="headerOptions">Forts</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="headerOptions">Palaces</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="headerOptions">Hotels</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="headerOptions">Wildlife</li>
                    </NavLink>
                    <li className="logout">Logout</li>
                    <Link to="/">
                    <button id="sidebtn" class="burger_menu" onClick={()=>{
                        if(sidemenu == "none"){setMenu("block")}
                        else{setMenu("none")}}}>
                        <img className="burger_menuImg" src={burger}></img>
                    </button>
                    </Link>
                </ul>
            </nav>
        </div>

        <div id="sidemenu" class="sideBar" style={{display: sidemenu}}>
        <nav>
                <ul className="sideList">
                    <NavLink to="/">
                    <li className="sideOptions">Home</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li className="sideOptions">About</li>
                    </NavLink>
                    <li className="sideOptions">Logout</li>
                </ul>
            </nav>
        </div>
        </>
    )

}