import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DisplayCards = (props) => {
  
  return (
    <>
    <div className='flex justify-between flex-wrap'>
      {
        props.arr.map((items)=>{
            return (
            <Link to={`/restaurant/${items.info.id}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-2 rounded-2 overflow-hidden flex flex-col m-2">
              <figure className=" h-60">
              <img
                className="w-full h-full object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.info.cloudinaryImageId}`}
                alt={items.info.name}
              />
              </figure>
              <div className="m-3">
              <h1 className="text-2xl font-bold">{items.info.name}</h1>
              <h1 className="text-gray-500">{items.info.avgRating}</h1>
              <h1 className="font-bold">{items.info.cuisines[0]}</h1>
              <h1 className="font-bold">{items.info.locality}</h1>
              </div>
            </div>
            </Link>
            )
        })
      }
    </div>
    </>
  )
}

export default DisplayCards