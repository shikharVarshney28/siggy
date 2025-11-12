import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestuarntId = () => {
    let {id} = useParams();
    console.log(id);
    let [arr,setArr] = useState([]);
    useEffect(()=>{getData()},[])
    async function getData(){
        let res = axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        console.log(res);
    }
  return (
    <div>arr : {arr}</div>
  )
}

export default RestuarntId