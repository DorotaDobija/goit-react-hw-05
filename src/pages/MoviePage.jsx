import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../fechApi";
import { MovieList } from "../components/MovieList";

export const MoviePage = () => {
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [searchParams, setSearchParams] = useSearchParams();
const [movies, setMovie] = useState([]);

const queryWord = searchParams.get("query")

useEffect(()=> {
    const searchMovie = async() => {
        try {
            setLoading(true)
            const movies = await getSearchMovies(queryWord);
            setMovie(movies)
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
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
        {loading && (<p>Loading... </p>)}
        {error && (<p>Something go wrong!</p>)}
        {queryWord && (<MovieList allMovies={movies} />)}
        </>
    )
}