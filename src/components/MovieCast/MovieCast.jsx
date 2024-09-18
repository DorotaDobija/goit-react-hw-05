import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCreaditsOfMovie } from "../../fechApi";
import css from './MovieCast.module.css'

export const MovieCast = () => {

const [movieCast, setMovieCast] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const { movieId} = useParams();


    useEffect(() => {
        const getCast = async () => {
        try {
            setLoading(true);
            const cast = await getCreaditsOfMovie(movieId);
            setMovieCast(cast);
    
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        
        }
        getCast()
    
    }, [movieId]);


    return (<>
        {loading && (<p>Loading... </p>)}
        {error && (<p>Something go wrong!</p>)}
        {movieCast.length > 0 ? (<ul>
            {movieCast.map(actor=><li key={actor.id} className={css.info_box}>
                <img className={css.actor_img} src={`https://image.tmdb.org/t/p/w1280/${actor.profile_path}`}></img>
                <p>{actor.name}</p>
                <p>Charakter: {actor.character}</p>
            </li>)}
        </ul>) :
        (<p>We dont have any information about movie cast !</p>)}</>)
}