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
                        <NavLink to="/history">
                        <li className="sideOptions">History</li>
                        </NavLink>
                        <NavLink to="/places">
                        <li className="sideOptions">Places</li>
                        </NavLink>
                        <NavLink to="/hotels">
                        <li className="sideOptions">Hotels</li>
                        </NavLink>
                        <NavLink to="/hotels">
                        <li className="sideOptions">Travels</li>
                        </NavLink>
                        <li className="sideOptions">Logout</li>
                        
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SliderMenu;