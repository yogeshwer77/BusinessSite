import React from 'react';
import { NavLink } from 'react-router-dom';
function Common(props){
    return(
        <div>
        <section id="header" className="mt-5 pt-5">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <h1>{props.name} 
        <strong className="brand-name">Business Assosiation</strong></h1>
        <h2 className="my-3">
        We are the team telented devloper website
        </h2>
        <div className="mt-3">
        <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
        </div>
        </div>        
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={props.imgsrc} className="img-fluid animated" alt="Home Page Image " />
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
    )
}

export default Common