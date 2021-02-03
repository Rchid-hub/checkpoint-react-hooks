import React, { useState } from "react";

import Header from './Components/Header/Header'
import {MoviesGallery} from './Components/MoviesGallery';
import Trailer from './Components/Trailer'
import Main from "./Components/Main";
import { Route, Switch} from "react-router-dom";

import './App.css';


const App = () => {
  const [movies,setmovies]=useState(MoviesGallery);
  const [input,setInput]=useState("");
  const [rating,setrating]=useState(0);

  const AddAnewMovie=(x)=>{setmovies([...movies,x])}

  return (
    
    <div className="App">
      <Route exact path="/" render={(props)=>(<div>
        <Header setInput={setInput} rating={rating} setrating={setrating} />
        <Main {...props} movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(input.toLowerCase().trim()) &&
            el.rating >= rating
        )}
        AddAnewMovie={AddAnewMovie}/></div>)}/>

      <Route path="/Trailer/:id" render={(props)=>(<Trailer {...props} MoviesGallery={MoviesGallery}/>)}/>

    </div>

  )

}



export default App


