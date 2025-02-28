import React, { useEffect, useState } from 'react'
import instance from './instance';
import './Banner.css'

function Banner({fetchurl}) {
  // console.log(fetchurl);
  const image_base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState()
  const fetchData = async() =>{
    const {data} = await instance.get(fetchurl);
    // const result = await instance.get(fetchurl);
    console.log("api result");
    // console.log(data);
    // console.log(data.results[0]);
    // console.log("1");
    // const res = data.results[0]
    // console.log(res.backdrop_path);
  const res = data.results[Math.floor(data.results.length*Math.random())] // data.results[3/4/7/19]
    setMovies(res)
    
    
  }

  useEffect(()=>{
    fetchData()
    // setInterval(() =>{
      // fetchData()
    // },5000)

  },[])

  return (
   <>
   {/* <h2 style={{color:'red'}}>Banner</h2> */}
   <div style={{backgroundImage:`url(${image_base_url}${movies?.backdrop_path})`, height:'550px', backgroundSize:'100% 100%', backgroundAttachment:'fixed'}}>
    <div className='banner_content'>
      <h2 style={{color:'white'}}>{movies?.name}</h2>
      {/* <h2 style={{color:'white'}}>{movies?.original_name}</h2> */}
      <button className='btn btn-danger'>Play<i class="fa-solid fa-play ms-2"></i></button>
      <button className='btn btn-outline-light ms-3'>More info<i class="fa-solid fa-caret-down ms-2"></i></button>
      <p className='mt-2' style={{color:'white'}}>{movies?.overview?.slice(0,200)}...</p>
    </div>
   </div>
   </>
  )
}

export default Banner