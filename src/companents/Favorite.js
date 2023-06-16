import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectFavorite, selecttoplam } from '../request/slice';
import FavoriteMeal from './FavoriteMeal';

export default function Favorite() {

    const toplam = useSelector(selectFavorite);

    



  


  return (
<div className='row justify-content-center' style={{ marginLeft: "100px", overflowX: "auto" }}>
  <div className='row d-flex justify-content-center'>
    <div className='col-12'>
    <div className='row'>
  {toplam.map((item, index) => (
    <FavoriteMeal key={index} urun={item}></FavoriteMeal>
  ))}
</div>
    </div>
  </div>
</div>

  )
}
