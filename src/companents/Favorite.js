import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectFavorite, selecttoplam } from '../request/slice';
import FavoriteMeal from './FavoriteMeal';

export default function Favorite() {

    const toplam = useSelector(selectFavorite);

    



  


  return (
    <div>
        <div className='row justify-content-center'  style={{ marginLeft: "100px", overflowX: "auto" }}>
            <div className='row d-flex justify-content-center ' >
           
          {
            toplam.map((item)=>{
             return(
                <FavoriteMeal urun={item}></FavoriteMeal>
             )
            })
          }
          </div>
          </div>
    </div>
  )
}
