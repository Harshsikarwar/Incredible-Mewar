import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function SliderMenu(setMenu){
    return(
        <>
            <div id="sidemenu" class="sideBar" style={{display: setMenu}}>
                <nav>
                    <ul className="sideList">
                        <NavLink to="/">
                        <li className="sideOptions">Home</li>
                        </NavLink>
                        <NavLink to="/about">
                        <li className="sideOptions">History</li>
                        </NavLink>
                        <NavLink to="/">
                        <li className="sideOptions">Forts</li>
                        </NavLink>
                        <NavLink to="/about">
                        <li className="sideOptions">Palaces</li>
                        </NavLink>
                        <NavLink to="/">
                        <li className="sideOptions">Hotels</li>
                        </NavLink>
                        <NavLink to="/about">
                        <li className="sideOptions">Wildlife</li>
                        </NavLink>
                        <li className="sideOptions">Logout</li>
                        
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SliderMenu;