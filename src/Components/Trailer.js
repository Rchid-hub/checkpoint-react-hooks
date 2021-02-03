import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css'


const Trailer = ({MoviesGallery, match}) => {
    const [Info,setInfo]=useState({});
    useEffect(()=>{
        setInfo(MoviesGallery.find((Inf)=>Inf.id===+match.params.id))
    },[])
    return (
        <div className="infoPage">
            <h1>{Info.name}</h1>
            <img width="300px" className="poster" src={Info.image} alt="movie poster"/>
            <h2>Description :<br/>{Info.description}</h2>
            <iframe width="800px" height="400px" title="trailer" className="teaser" src={Info.trailer}/>
            <Link to="/" ><button className="back">Go back</button></Link>
        </div>
    )
}

export default Trailer
