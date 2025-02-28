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
import Plans from "./Plans.js";
import FoodData from "./FoodData.js";

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
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/736x/c9/4b/70/c94b70ce84be5b0c0b16202f28634051.jpg")'}}>
                <h2 id="heading">ATTRACTIONS</h2>
                <h4 id="subheading">-- worth a thousand stories --</h4>
                <CardSlider Data={Attract} max={5} status="block"/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/736x/7e/ae/cc/7eaeccd7fc77855bdf1a835442e1e98c.jpg")'}}>
                <h2 id="heading">THE ROYAL LEGACY</h2>
                <h4 id="subheading">-- Stories of Courage & Kingship --</h4>
                <CircleSlider Data={Maharanas}/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/74/74/e3/7474e3188ae17cc7686ca4c75b3f37ac.jpg")'}}>
                <h2 id="heading">Taste of Tradition</h2>
                <h4 id="subheading" style={{fontWeight:700}}>-- Relish the Essence of Mewari Cuisine --</h4>
                <CardSlider Data={FoodData} max={5} status="block"/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/a0/02/6b/a0026b99fb59ab3f6bc8f18df3fffcba.jpg")'}}>
                <h2 id="heading">Timeless Trails</h2>
                <h4 id="subheading" style={{fontWeight:700}}>-- Designed for You --</h4>
                <CardSlider Data={Plans} max={3} status="none"/>
        </div>
        </>
    )

}