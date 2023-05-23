import React, { useEffect, useState } from 'react'
import { getMeal, getfiltredMeal, getrandomMeal, getsearchedMeal } from '../request/home'
import Filtred from './Filtred'
import FiltredbyName from './FiltredbyName'

export default function Home() {

  const [meal, setmeal] = useState({})
  const [filtredMeal, setfiltredMeal] = useState([])
  const [SearchedMeal, setSearchedMeal] = useState([])
  const [RandomMeal, setRandomMeal] = useState([])
  const [attr, setattr] = useState(false)
  const [key, setkey] = useState()


  useEffect(() => {


    getMeal().then((res) => { setmeal(res.meals[0]) })
    getrandomMeal().then((res) => { setRandomMeal(res.meals[0]) })



  }, [])



  const tıkla = (text) => {
    setattr(true)
    getfiltredMeal(text).then((res) => { setfiltredMeal(res.meals) })
    console.log(text);
  }


  const ara = (text) => {
    setattr(true)
    getsearchedMeal(text).then((res) => { setSearchedMeal(res.meals) })
    console.log(text);

  }




  return (

    <div>


      <div className='row'>

        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" style={{ height: "300px", objectFit: 'cover' }} alt="" />

      </div>

      <form className="" style={{ width: "500px", margin: "auto", marginTop: "25px" }} role="search">
        <button className='btn btn-warning mb-2' style={{ marginLeft: "220px",color:"black",backgroundColor:"yellow",fontFamily: 'fantasy' }} onClick={(e) => {
          e.preventDefault()
          ara(key)
        }}>Search</button>
        <input type="search" className="form-control form-control-dark text-bg-dark " placeholder="search for recipes" aria-label="Search" style={{color:"black",backgroundColor:"yellow"}} onChange={(e) => {
          setkey(e.target.value)
        }} />
      </form>



      <div className=' mt-5 ' style={{ overflow: 'auto', margin: "auto" }}>
        <div className='row'>
          <div className='col d-flex'>
            {attr && SearchedMeal != null && SearchedMeal.map((item) => {
              return <FiltredbyName urun={item} />;
            })}
          </div>
        </div>
      </div>

        

        <div className='row justify-content-center mt-3' style={{ boxSizing: 'border-box' }}>
  <div className="card" style={{ width: "35rem", height: "660px", backgroundColor: "white", borderRadius: "50px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
      <img src={RandomMeal.strMealThumb} className="img-fluid" alt="..." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div className="card-body" style={{ textAlign: 'center', zIndex: 1 }}>
      <h5 className="card-title" style={{ color: "black",fontSize:"30px",fontFamily:'monospace',fontWeight:'bold'  }}>{RandomMeal.strMeal}</h5>
      <p className="card-text">{}</p>
    </div>
  </div>
</div>


      <div id='categori' className='container mx-auto mb-3 mt-4' style={{ textAlign: 'center', }}>
        <h4 style={{ fontSize: "50px", fontFamily: 'cursive' }}>Categories</h4>
      </div>


      <div className="container">
        <div className="row justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button id='a' type="button" className="btn btn-dark me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("a");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Pork</button>
            <button id='b' type="button" className="btn btn-warning me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("b");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Dessert</button>
            <button id='c' type="button" className="btn btn-success me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("c");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Vegan</button>
            <button id='d' type="button" className="btn btn-danger me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("d");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Beef</button>
            <button id='e' type="button" className="btn btn-primary me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("e");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Breakfast</button>
            <button id='f' type="button" className="btn btn-info me-2" style={{ borderRadius: "10px" }} onClick={(e) => {
              const buttonElement = document.getElementById("f");
              const buttonText = buttonElement.innerText;
              tıkla(buttonText)
            }}>Seafood</button>
          </div>
        </div>
      </div>

      <div className='mt-5' style={{ overflow: 'auto', margin: "auto" }}>
        <div className='row'>
          <div className='col d-flex'>
            {attr && filtredMeal.map((item,index) => {
              return <Filtred key={index} urun={item} />;
            })}
          </div>
        </div>
      </div>

      


    </div>
  )
}
