import React, { useEffect, useState } from 'react'
import instance from './instance';
import './Row.css'

function Row({ title, fetchurl }) {
  // console.log("title");
  // console.log(title);
  // console.log(fetchurl);
  //it is a function
  const image_base_url = 'https://image.tmdb.org/t/p/original'
  const [allmovies, setAllMovies] = useState()
  const fetchData = async () => {
    const response = await instance.get(fetchurl);
    // console.log("api result");
    // console.log(response);
    setAllMovies(response.data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log("all movies", allmovies);

  return (
    <>
      <div className="row mt-3">
        <h4 className="mt-2">{title}</h4>
        <div className='movie_row'>
          {
            allmovies?.map(item => (
              <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt="" height={'200px'}/>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Row