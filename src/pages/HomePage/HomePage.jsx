import { useState, useEffect } from 'react';
import {MovieList} from '../../components/MovieList'
import css from './HomePage.module.css'
import { getTrendingMovies } from '../../fechApi';


export const HomePage = () => {

    const [movies, setMovies] = useState([]);


useEffect(()=> {
    const fetchMovies = async () => {
    const moviesFromFetch = await getTrendingMovies();
    setMovies(moviesFromFetch)
}
fetchMovies()
    }, [])

    return (
        <div>
            <p className={css.heading}>Trending today</p>
            {movies.length > 0 && ( <MovieList allMovies={movies}/>)}
        </div>

    )
}