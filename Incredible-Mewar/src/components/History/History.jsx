import React from 'react';
import "./History.css";
import CardSlider from './CardSlider.jsx';
import Maharanas from "./Maharanas.js";


export default function History(){
    return(
        <>
        <div className="container2">
            <h1 id="wellcome">The Greate History Of Mewar</h1>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/4e/54/ac/4e54ac9267a7af992f1c14eda478142b.jpg")'}}>
            <h3 id="heading">Maharanas Of Mewar</h3>
            <CardSlider Data={Maharanas} max={5}/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/4e/54/ac/4e54ac9267a7af992f1c14eda478142b.jpg")'}}>
            <h3 id="heading">Queens Of Mewar</h3>
            <CardSlider Data={Maharanas} max={5}/>
        </div>
        <div className="container3" style={{backgroundImage:'url("https://i.pinimg.com/1200x/4e/54/ac/4e54ac9267a7af992f1c14eda478142b.jpg")'}}>
            <h3 id="heading">Big Events</h3>
            <CardSlider Data={Maharanas} max={5}/>
        </div>
        </>
    )
}