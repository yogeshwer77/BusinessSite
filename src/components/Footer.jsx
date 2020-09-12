import React from 'react'
import fb from '../images/fb.jpg'
import tw from '../images/tw.jpg'
import Insta from '../images/In.jpg'

const Footer= () =>{
return(
    <div className="col-10 col-md-12 card-footer bg-transparent border-primary my-5 justify">
    <footer className="bg-light">
    <p>
    2020 YogeshWer All Rights Reserved | Terms and Conditions
    </p>
    <div className="fb m-auto">
    <img src={fb}/>
    <img src={tw}/>
    <img src={Insta}/>
    </div>
    </footer>
    </div>
)    
}

export default Footer