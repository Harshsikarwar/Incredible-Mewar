import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"
import burger from "./burger-bar.png"
import SliderMenu from "./SliderMenu.jsx"

export default function Header(){
    const [sidemenu, setmenu]=useState("none");
    return(
        <>
        <div className="headerBar">
            <nav className="headerNav">
            <h1 className="headerTitle">Incredible Mewar</h1>
                <ul className="headerList">
                    <NavLink to="/">
                    <li className="headerOptions">Home</li>
                    </NavLink>
                    <NavLink to="/history">
                    <li className="headerOptions">History</li>
                    </NavLink>
                    <NavLink to="/places">
                    <li className="headerOptions">Places</li>
                    </NavLink>
                    <NavLink to="/history">
                    <li className="headerOptions">Hotels</li>
                    </NavLink>
                    <NavLink to="/history">
                    <li className="headerOptions">Travels</li>
                    </NavLink>
                    <li className="logout">Logout</li>
                    <Link to="/">
                    <button id="sidebtn" class="burger_menu" onClick={()=>{
                        if(sidemenu == "none"){
                            let slide=document.getElementById("sidemenu");
                            slide.style.display="block";
                            setmenu("block");
                        }
                        else{let slide=document.getElementById("sidemenu");
                            slide.style.display="none";
                            setmenu("none")}}}>
                        <img className="burger_menuImg" src={burger}></img>
                    </button>
                    </Link>
                </ul>
            </nav>
        </div>
        </>
    )

}