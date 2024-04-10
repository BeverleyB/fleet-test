import React from 'react';
import { getAllMovies } from '../../services/http';
import { IMovie } from '../../interfaces/IMovie';
import { useNavigate } from 'react-router-dom';

import './MoviesList.scss';
  
function MoviesList() {
    const [movies, setMovies] = React.useState<IMovie[]>([]);

    const navigate = useNavigate();

    React.useEffect(() => {
        getMovies();
    }, []);
    
    async function getMovies() {
        const movies = await getAllMovies();
        if (typeof movies === 'boolean') return;
        setMovies(movies.results);
    }

    return(
        <div id="MoviesList">
            <ul className="list">
                { movies.map((movie: IMovie) =>
                    <li className="item-movie" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                        <img className="movie-pic" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie poster" />
                        <div className="container-info">
                            <div className="note"><span className="star" />{movie.vote_average.toFixed(1)}</div>
                            <h2 className="movie-title">{movie.title}</h2>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default MoviesList;
