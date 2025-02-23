import { useState } from "react";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Home.css";
import logoBanner from "./The Incredible Mewar!.png";
import arrowRight from "./arrow-right.png";
import arrowLeft from "./arrow-left.png";
import SliderMenu from "../Header/SliderMenu.jsx";

export default function Home(){
    const [LAttractindex, setLAttractindex] = useState(1);
    const [RAttractindex, setRAttractindex] = useState(3);

    function changeIndexLeft(){
        if(LAttractindex>1 && RAttractindex>3){
            setLAttractindex(LAttractindex-1);
            setRAttractindex(RAttractindex-1);
        }
    }
    function changeIndexRight(){
        if(LAttractindex>=1 && RAttractindex<5){
            setLAttractindex(LAttractindex+1);
            setRAttractindex(RAttractindex+1);
        }
    }
    const Attract = [
        {
            "id": 1,
            "name": "Chhittorgarh Fort",
            "image": "https://i.pinimg.com/736x/05/11/79/05117948a2a7153036c547f6734414a7.jpg"
        },
        {
            "id": 2,
            "name": "Kumbhalgarh Fort",
            "image": "https://i.pinimg.com/736x/fc/c2/df/fcc2dfa6c6de72b2db2bc62ea09ee5e6.jpg"
        },
        {
            "id": 3,
            "name": "Udaipur City Palace",
            "image": "https://i.pinimg.com/736x/3f/91/5d/3f915da54cea988a288766c123be003a.jpg"
        },
        {
            "id": 4,
            "name": "Bagore Ki Haveli",
            "image": "https://i.pinimg.com/236x/7e/a7/0c/7ea70c1cbf916de47e0345647b004c70.jpg"
        },
        {
            "id": 5,
            "name": "Rajsamand Lake",
            "image": "https://i.pinimg.com/474x/91/fc/56/91fc563cb7f4ebc382890ded4396db0d.jpg"
        }]
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
            <div className="attractions">
                {Attract.map((attraction) => (
                    attraction.id >= LAttractindex && attraction.id <= RAttractindex &&(
                        <div className="places" key={attraction.id}>
                            <img id="attractImg" src={attraction.image}></img>
                            <h3 id="attractName">{attraction.name}</h3>
                        </div>
                    )
                ))}
            </div>
            <div className="navigation">
                <Link to="/"><button onClick={()=>changeIndexLeft()}><img class="arrow" src={arrowLeft}></img></button></Link>
                <Link to="/"><button onClick={()=>changeIndexRight()}><img class="arrow" src={arrowRight}></img></button></Link>
            </div>
        </div>
        </>
    )

}