import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({allMovies}) => {

const location = useLocation();

return (
    <ul>
        {allMovies.map((movie=>
        <div key={movie.id}>
            <li>
                <Link to={`/movie/${movie.id}`} state={location}>{movie.title}</Link>
            </li>
            </div>))}
    </ul>
)
}