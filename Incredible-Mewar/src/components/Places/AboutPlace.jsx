import React from "react";
import { useParams } from "react-router-dom";
import placesData from "./places";

export default function AboutPlaces(){
    const {username} = useParams();
    let img;
    let description;
    placesData.map((data)=>{
        if(username===data.name){
            img=data.image
            description=data.description
        }
    })
    
    return(
        <>
        <div className="placesContainer1">
            <div className="placeSubcontain1">
                <div className="placeImages">
                    <img id="imagesPlaces" src={img}></img>
                </div>
                <h3 id="heading" style={{color:"rgb(177, 41, 41)", marginLeft:"20px"}}>{username}</h3>
                <div className="Info">
                    <h3 id="infoTitle">Railway Stations</h3>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                </div>
                <div className="placesAbout">
                    <h3 id="infoTitle" style={{color:"rgb(177, 41, 41)", fontWeight:900}}>About</h3>
                    <p id="aboutPlaces">
                        {description}
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}