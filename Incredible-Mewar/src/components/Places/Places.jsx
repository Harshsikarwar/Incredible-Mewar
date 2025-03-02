import React from "react";
import "./Places.css";


export default function Places(){
    return(
        <>
        <div className="placesContainer1">
            <div className="placeSubcontain1">
                <div className="placeImages"></div>
                <div className="placesAbout">
                    <p id="aboutPlaces">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni suscipit vel sunt? Veniam expedita culpa, nisi, repellat consectetur ut alias eligendi explicabo dignissimos sequi praesentium magnam necessitatibus fugit harum!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aut perspiciatis vero laudantium, hic ullam molestiae voluptates itaque quidem unde doloribus veniam consequuntur id blanditiis eaque repudiandae ab, suscipit accusamus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae obcaecati dolorum ducimus enim ipsum veniam quisquam, quam autem saepe laudantium repellendus, sequi explicabo dolorem non! Voluptatem ipsum explicabo accusamus.
                    </p>
                </div>
            </div>
            <div className="bullitenInfo">
                <div className="Info">
                    <h3 id="infoTitle">Railway Stations</h3>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                </div>
                <div className="Info">
                    <h3 id="infoTitle">Airports</h3>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                    <h4 id="subInfo">info-1</h4>
                </div>
            </div>
        </div>
        </>
    )
}