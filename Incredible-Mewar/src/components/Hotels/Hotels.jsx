import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Hotels.css'
import arrowRight from "./arrow-right.png";
import arrowLeft from "./arrow-left.png";
import HotelData from './HotelsData'
import SliderMenu from "../Header/SliderMenu.jsx";

export default function Hotels(){
    const [details, setDetails] = useState('none')
    const [infoBg, setInfoBg] = useState('none')
    const [Lindex, setLindex] = useState(1);
    const [Rindex, setRindex] = useState(3);
    const showDetails=(hotelid, keyid)=>{
        let keyId=document.getElementById(keyid);
        let hotelId=document.getElementById(hotelid)
        if(details === "none"){
            setDetails("flex")
            setInfoBg("rgba(0, 0, 0, 0.596)")
        }
        else{
            setDetails("none")
            setInfoBg("none")
        }
        keyId.style.display=details
        keyId.style.transition="0.5s ease-in-out"
        hotelId.style.background=infoBg
        hotelId.style.transition="0.5s ease-in-out"
    }
    function changeIndexLeft(){
        if(Lindex>1 && Rindex>3){
            setLindex(Lindex-1);
            setRindex(Rindex-1);
        }
    }
    function changeIndexRight(){
        if(Lindex>=1 && Rindex<5){
            setLindex(Lindex+1);
            setRindex(Rindex+1);
        }
    }
    return(
        <>
        <SliderMenu/>
        <div className='container3' style={{marginTop:"90px", backgroundImage:"url('https://i.pinimg.com/1200x/5d/38/18/5d3818d60c34740260922ddcff5f55f1.jpg')"}}>
            <h1 id="hotelTitle">Experience Royal Hospitality in Mewar</h1>
            <div className='hotelContainer'>
                {HotelData.map((data)=>(
                    data.id >= Lindex && data.id <= Rindex &&(
                    <div id='hotelData' className='hotelData' key={data.id} style={{backgroundImage:"url("+data.image+")"}}>
                        <div id={data.id} className='hotelInfo'>
                            <b id={data.id + "key"} class="key">
                                location<p id="pair">{data.location}</p>
                                rent<p id="pair">{data.rent}</p>
                                rating<p id="pair">{data.rating}</p>
                                speciality<p id="pair">{data.speciality}</p>
                            </b>
                        </div>
                        <h3 id="hotelName">{data.name}</h3>
                        <button id="detailBtn" onClick={()=>showDetails(data.id, data.id + "key")}>Details</button>
                    </div>)
                ))
                }
            </div>
            <div className="navigation">
                <button onClick={()=>changeIndexLeft()}><img class="arrow" src={arrowLeft}></img></button>
                <button onClick={()=>changeIndexRight()}><img class="arrow" src={arrowRight}></img></button>
            </div>
        </div>
        </>
    )
}