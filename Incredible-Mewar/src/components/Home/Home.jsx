import { useState } from "react";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Home.css";
import logo from "./CoatofArms1.png";
import intro from "./intro.mp4";

export default function Home(){
    return(
        <>
        <div className="container2">
            <Link to="/"><img className="logo" src={logo}></img></Link>
            <h1 id="wellcome">Welcome to Incredible Mewar</h1>
            <h3 id="slog">Discover the Timeless Glory of Rajasthan’s Crown Jewel</h3>
            <p id="intro">Nestled in the heart of Rajasthan, Mewar is a land of valor, 
                heritage, and breathtaking beauty. From the majestic palaces of 
                Udaipur to the historic forts of Chittorgarh, every corner of Mewar tells a 
                tale of bravery and grandeur. At Incredible Mewar, we bring you 
                closer to the soul of this regal land—its rich history, vibrant 
                culture, royal traditions, and architectural marvels. Whether you 
                seek to explore the legacy of the Sisodia dynasty, witness the 
                charm of Lake Pichola, or immerse yourself in the folk artistry 
                of Rajasthan, your journey begins here.
            </p>
        </div>
        </>
    )

}