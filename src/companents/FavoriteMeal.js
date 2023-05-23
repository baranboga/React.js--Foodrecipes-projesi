import React from 'react'

export default function FavoriteMeal(props) {
  return (
    <div className='col-4' style={{marginBottom:"100px"}} >
        <div className="card me-1 mt-4" style={{ width: "30rem", height: "550px", overflow: "hidden" }}>
                <img src={props.urun.strMealThumb} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" >{props.urun.strMeal}</h5>
                    <p className="card-text" ></p>
                </div>
            </div>
    </div>
  )
}
