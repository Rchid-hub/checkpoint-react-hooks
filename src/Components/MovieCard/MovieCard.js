import React from 'react'
import Rate from '../Rate'
import './MovieCard.css'

const MovieCard = ({movie : {name, image, date, description, rating }}) => {

    return (
        <div className='container'>
          <div className="movieCard">
          <Rate rating={rating}/>
            <img width="300" src={image} alt='movie poster' />
                <h2>{name}</h2>
                  <p>{date}</p>
              <p>{description}</p>
              <h3>Watch Trailer</h3>
              </div>
                </div>
    )
}

export default MovieCard
