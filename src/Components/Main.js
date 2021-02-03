import React from 'react'
import AddMovie from './AddMovie/AddMovie';
import MoviesList from "./MoviesList";
const Main = ({movies, AddAnewMovie}) => {
    return (
        <div>
            <MoviesList movies={movies}/>
            <AddMovie AddAnewMovie={AddAnewMovie} />
        </div>
    )
}

export default Main
