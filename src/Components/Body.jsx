import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
import DisplayCards from './DisplayCards'

const Body = () => {
  let [arr,setarr] = useState([])
  let originalData;
    useEffect(()=>{
        getData();

    },[]);
    function topRatings(){
      let TopRatings = arr.filter((items) => items.info.avgRating >= 4.0);
      setarr(TopRatings);
    }
    function resetRating(){
      getData();
    }
    async function getData(){
        let res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let restaurants = res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setarr(restaurants);
        originalData = restaurants
        console.log(originalData);
    }
  return (
    
    <>
    
    <div className='m-15'>
        <div className='text-2xl font-bold'>Restaurants with online food delivery in Mathura</div>
        <button className='border-2 rounded p-3 btn-btn-primary m-2 text-xl font-bold' onClick={topRatings}>Ratings 4.0+</button>
        <button className='border-2 rounded p-3 btn-btn-primary m-2 text-xl font-bold' onClick={resetRating}>Reset</button>
        <DisplayCards arr={arr}/>
    </div>
    </>
  )
}

export default Body