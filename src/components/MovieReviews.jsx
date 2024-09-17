import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getReviewsOfMovie } from "../fechApi";

export const MovieReviews= () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { movieId } = useParams()
    
   useEffect(()=> {
    const getMovieReviews = async() => {
        try {
            const reviews = await getReviewsOfMovie(movieId);
            setMovieReviews(reviews)
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    getMovieReviews() 
   }, [movieId])

console.log(movieReviews)
    return (<>
    {loading && (<p>Loading...</p>)}
    {error && (<p>Something go wrong!</p>)}
    {movieReviews.length > 0 ? (<ul>
        {movieReviews.map(review=><li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
        </li>)}
    </ul>) : (<p>We dont have any reviews for this !</p>)}
    </>)
}