import React from "react";
import { useState } from "react";
import arrowRight from "./arrow-right.png";
import arrowLeft from "./arrow-left.png";

const CircleSlider = ({Data, max=5, status}) => {
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
            <div className="legacy">
                {Data.map((data) => (
                    data.id >= Lindex && data.id <= Rindex &&(
                        <div id="place" className="royals" key={data.id}>
                            <img id="royalImg" src={data.image}></img>
                            <h3 id="royalName">{data.name}</h3>
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
export default CircleSlider;