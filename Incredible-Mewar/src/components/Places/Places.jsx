import React from "react";
import "./Places.css";
import CardSlider from "./CardSlider";
import placesData from "./places";
import Palaces from "./palaces";
import Forts from "./forts";

export default function Places(){
    return(
        <>
        <div className="container2">
            <h1 id="wellcome">Incredible Places Of Mewar</h1>
        </div>
        <div className="container3" style={{ backgroundImage:'url("https://i.pinimg.com/originals/9a/f5/34/9af534474cdac84ee91ec51f1eb4bd71.png")'}}>
            <h1 id="heading">Must Visit Places</h1>
            <CardSlider Data={placesData} max={5}/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/e0/e1/cb/e0e1cba20f78e7d05a837c462d775001.jpg")'}}>
            <h1 id="heading">The GrandForts</h1>
            <CardSlider Data={Forts} max={5}/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/originals/e4/53/73/e453732c5c4a6383ad5768033035218e.jpg")'}}>
            <h1 id="heading">The Royal Palaces</h1>
            <CardSlider Data={Palaces} max={5}/>
        </div>
        </>
    )
}