import { useState } from "react";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Home.css";
import logoBanner from "./The Incredible Mewar!.png";
import SliderMenu from "../Header/SliderMenu.jsx";
import CardSlider from "./CardSlider.jsx";
import CircleSlider from "./CircleSlider.jsx";
import Attract from "./Attraction.js";
import Maharanas from "./The Royal Legacy.js";

export default function Home(){
    return(
        <>
        <div className="container1">
                    <Link to="/"><img className="logoBanner" src={logoBanner}></img></Link>
        </div>
        <SliderMenu/>
        <div className="container2">
            <h1 id="wellcome">Welcome to Incredible Mewar</h1>
            <h3 id="slog">Discover the Timeless Glory of Rajasthan’s Crown Jewel</h3>
            <form className="search" method="post">
                <input id="searchBar" type="search"></input>
                <input id="searchButton" type="submit" value="Search"></input>
            </form>
        </div>
        <div className="container3">
                <h2 id="heading">ATTRACTIONS</h2>
                <h4 id="subheading">-- worth a thousand stories --</h4>
                <CardSlider Data={Attract} />
        </div>
        <div className="container4">
                <h2 id="heading">THE ROYAL LEGACY</h2>
                <h4 id="subheading">-- Stories of Courage & Kingship --</h4>
                <CircleSlider Data={Maharanas} />
        </div>
        </>
    )

}