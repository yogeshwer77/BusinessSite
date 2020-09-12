import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props){
    return(
            <div className="col-md-4 col-10 max-auto content-left">
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                              <p className="card-text">{props.text}</p>
                            <NavLink to="/Home" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                </div>
            </div>                            
    )
}

export default Card