import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FiltredbyName(props) {
    return (
        <div>

            <div></div>
            <div className="card" style={{ width: "18rem", height: "500px", overflow: "hidden" }}>
                <img src={props.urun.strMealThumb} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.urun.strMeal}</h5>
                    <p className="card-text">{props.urun.strMeal}</p>
                    <NavLink to={`/Detail/${props.urun.idMeal}`} className="btn btn-warning">DETAIL</NavLink>
                </div>
            </div>
            
            
            </div>
    )
}