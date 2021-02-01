import React, { useState } from "react";

import Header from './Components/Header/Header'
import {MoviesGallery} from './Components/MoviesGallery';
import Main from "./Components/Main";
import './App.css';

const App = () => {
  const [movies,setmovies]=useState(MoviesGallery);
  const [input,setInput]=useState("");
  const [rating,setrating]=useState(0);

  const AddAnewMovie=(x)=>{setmovies([...movies,x])}

  return (
    <div className="App">
      <Header setInput={setInput} rating={rating} setrating={setrating} />
      <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(input.toLowerCase().trim()) &&
            el.rating >= rating
        )}
        AddAnewMovie={AddAnewMovie}
      />

      
    </div>
  )
}

export default App


