import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../fechApi";
import { MovieList } from "../components/MovieList";

export const MoviePage = () => {

const [searchParams, setSearchParams] = useSearchParams();
const [movies, setMovie] = useState([]);

const queryWord = searchParams.get("query")

useEffect(()=> {
    const searchMovie = async() => {
        const movies = await getSearchMovies(queryWord);
        setMovie(movies)
    }
    searchMovie();
}, [queryWord])

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({query: form.elements.query.value})
    form.reset()
}

    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" name="query"/>
            <button type="submit">Search</button>
        </form>
        {queryWord && (<MovieList allMovies={movies} />)}
        </>
    )
}