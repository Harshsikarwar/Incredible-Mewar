import React from "react";
import { useState } from "react";
import arrowRight from "./arrow-right.png";
import arrowLeft from "./arrow-left.png";

const CardSlider = ({Data, max, status, radius}) => {
    const [Lindex, setLindex] = useState(1);
    const [Rindex, setRindex] = useState(3);
    function changeIndexLeft(){
        if(Lindex>1 && Rindex>3){
            setLindex(Lindex-1);
            setRindex(Rindex-1);
        }
    }
    function changeIndexRight(){
        if(Lindex>=1 && Rindex<max){
            setLindex(Lindex+1);
            setRindex(Rindex+1);
        }
    }
    return(
        <>
            <div className="sliderContainer">
                {Data.map((data) => (
                    data.id >= Lindex && data.id <= Rindex &&(
                        <div className="card" key={data.id}>
                            <img id="cardImg" src={data.image} style={{borderRadius:radius}}></img>
                            <h3 id="cardName">{data.name}</h3>
                        </div>
                    )
                ))}
            </div>
            <div className="navigation" style={{display:status}}>
                <button onClick={()=>changeIndexLeft()}><img class="arrow" src={arrowLeft}></img></button>
                <button onClick={()=>changeIndexRight()}><img class="arrow" src={arrowRight}></img></button>
            </div>
        </>
    );
};
export default CardSlider;