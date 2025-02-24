import React from "react";
import { useState } from "react";
import arrowRight from "./arrow-right.png";
import arrowLeft from "./arrow-left.png";
import Attract from "./Home_Data.js";
import Maharanas from "./Home_Data.js";

function CardSlider({Data}){
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
    return(
        <>
            <div className="attractions">
                {Data.map((attraction) => (
                    attraction.id >= LAttractindex && attraction.id <= RAttractindex &&(
                        <div id="place" className="places" key={attraction.id}>
                            <img id="attractImg" src={attraction.image}></img>
                            <h3 id="attractName">{attraction.name}</h3>
                        </div>
                    )
                ))}
            </div>
            <div className="navigation">
                <button onClick={()=>changeIndexLeft()}><img class="arrow" src={arrowLeft}></img></button>
                <button onClick={()=>changeIndexRight()}><img class="arrow" src={arrowRight}></img></button>
            </div>
        </>
    )
}

CardSlider.defaultProps = { Data: Attract };
CardSlider.defaultProps = { Data: Maharanas };
export default CardSlider;