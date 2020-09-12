import React from 'react';
import img1 from "../images/img1.svg";
import Common from './Common';
function About(){
    return(
        <div>
        <Common name="Welcome to About Page " visit="/Contect" imgsrc={img1} btnname="Contect Now"></Common>
        </div>
    )
}

export default About