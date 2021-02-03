import React from 'react'
import Rate from '../Rate'
import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = ({movie : {name, image, date, description, rating, id }}) => {
    return (
      <Link style={{textDecoration:'none',color:'black'}} to={`/Trailer/${id}`}>
        <div className='container'>
          <div className="movieCard">
          <Rate rating={rating}/>
            <img width="300" src={image} alt='movie poster' />
                <h2>{name}</h2>
                  <p>{date}</p>
              <p>{description}</p>
              </div>
                </div>
                </Link> 

    )
}

export default MovieCard
