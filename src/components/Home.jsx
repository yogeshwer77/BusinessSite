import React from 'react'
import img1 from "../images/img1svg.svg";
import Common from './Common';

function Home(){
    return(
        <div>
        <Common name="Grow your business with " visit="/Service" imgsrc={img1} btnname="Get Started"></Common>
        </div>
    )
}

export default Home