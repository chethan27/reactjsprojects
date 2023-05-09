import React, { useState } from 'react'

const index = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
         import('./movies').then((module) => {
            setMovies(module.default );
        })
    }
 
  return (
    <div>
        <button onClick={getMovies}>Get Movies</button>
        <span>{movies.length> 0 ?JSON.stringify({movies}) : null}</span>
    </div>
  )
}

export default index