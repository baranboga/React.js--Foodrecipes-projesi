import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getrandomMealbyid } from '../request/home';
import YouTube from 'react-youtube';
import { useDispatch } from 'react-redux';
import { increment } from '../request/slice';

export default function Detail() {
  const [meal, setMeal] = useState({});
  const param = useParams();
  const [videoId, setVideoId] = useState('');
  const dispatch = useDispatch();
  let navigate=useNavigate();

  useEffect(() => {
    getrandomMealbyid(param.id).then((res) => {
      setMeal(res.meals[0]);
      setVideoId(getVideoIdFromUrl(res.meals[0].strYoutube));
    });
  }, []);

  function getVideoIdFromUrl(url) {
    const videoIdRegex = /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/v\/|https:\/\/www.youtube.com\/watch\?v=)([^#\&\?\n<>\'\" ]{11})/i;
    const match = url.match(videoIdRegex);
    if (match && match.length > 1) {
      return match[1];
    } else {
      return null;
    }
  }

  const opts = {
    width: '800',
    height: '420',
  };

  return (
    <div>
      <div className='row mt-3'>
        <div className='col-12'>
          <div className='col-6 d-flex justify-content-end align-items-center ' style={{ borderRadius: '5px', backgroundColor: 'black' }}>
            <h1 className='mx-3' style={{ color: 'white' }}>
              {meal.strMeal}
            </h1>
          </div>
        </div>
      </div>

      <div className='container py-4'>
        <div className='p-1  bg-body-tertiary rounded-3 pb-5'>
          <div className='container-fluid py-1'>
            <button
              className='btn btn-primary btn-lg'
              style={{ backgroundColor: 'black', color: 'yellow' }}
              type='button'
              onClick={() => {
  
                dispatch(increment(meal))
                navigate("/favorite")


              }}
            >
              Add to Favorites
            </button>
          </div>
        </div>

        <div className='row align-items-md-stretch'>
          <div className='col-md-6'>
            <div className='card h-50'>
              <img src={meal.strMealThumb} className='card-img-bottom img-fluid' alt='...' style={{ height: '600px' }} />
            </div>
          </div>
          <div className='col-md-6' style={{ boxSizing: 'border-box' }}>
            <div className='h-auto p-5 bg-body-tertiary border rounded-3'>
              <h2 style={{fontFamily:'cursive'}}>{meal.strMeal}</h2>
              <p style={{fontFamily:'cursive'}}>{meal.strInstructions}</p>
            </div>
          </div>
        </div>

        <div className='row justify-content-center mt-4'>
          <div className='d-flex justify-content-center'>
            {videoId && <YouTube videoId={videoId} opts={opts} />}
          </div>
        </div>
      </div>
    </div>
  );
}
