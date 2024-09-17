import { useParams } from "react-router-dom";
import { getMovieDetails } from "../fechApi";
import { useEffect, useState } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";

export const MovieDetailsPage = () => {

const [movieDetails, setMovieDetails] = useState()
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const { movieId } = useParams();

const movieLocation = useLocation();
const backLinkHref = movieLocation.state ?? "/";

useEffect(() => {
    const getDetails = async () => {
    try {
        setLoading(true);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);

        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    
    }
    getDetails()

}, [movieId]);




    return (<>
    {loading && (<p>Loading... </p>)}
    {error && (<p>Something go wrong!</p>)}
    {movieDetails && (<div>
<Link to={backLinkHref}>Go back</Link>
<img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="" />
<div>
    <h2>{movieDetails.title} ({movieDetails.release_date.slice(0,4)})</h2>
    <p>User Score: {Math.floor((movieDetails.vote_average/10) * 100)}%</p>
    <h3>Overview:</h3>
    <p>{movieDetails.overview}</p>
    <h4>Genres:</h4>
    <p>{movieDetails.genres.map((genre => genre.name)).join(", ")}</p>
</div>
<p>Additional information :</p>
<ul>
<li><NavLink to='cast'> Cast </NavLink></li>
<li><NavLink to='reviews'> Reviews</NavLink></li>
</ul>
<Outlet />
    </div>)}
    </>
        )
}