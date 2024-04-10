import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { DefaultMovie, IMovie } from '../../interfaces/IMovie';
import { getMovieById } from '../../services/http';

import './MovieDetail.scss';

interface IGenre {
    id: number,
    name: string
}

interface IProduction {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

function MovieDetail() {
    const [movie, setMovie] = React.useState<IMovie>(DefaultMovie);

    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        getMovie();
    }, [location.pathname]);
    
    async function getMovie() {
        const movieId = location.pathname.split('/').pop();
        if (movieId) {
            const movieDetail = await getMovieById(parseInt(movieId));
            if (typeof movieDetail === 'boolean') return;
            setMovie(movieDetail);
        } else {
            navigate('/');
        }
    }

    return(
        <div id="MovieDetail">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Poster Movie" className="movie-pic" />
            
            <div className="container-right">
                <div className="title">{movie.title} <span className="date">({movie.release_date})</span></div>
                { movie.tagline &&
                    <div className='tagline'>{movie.tagline}</div>
                }
                
                <div className="note"><span className="star" />{movie.vote_average.toFixed(1)}</div>

                <div className="categories">
                    {   movie.genres.map((genre: IGenre) =>
                        <div key={genre.id} className="genre">{genre.name}</div>
                    )}
                </div>

                <div className="production-companies">Production :  
                    {   movie.production_companies.map((production: IProduction) =>
                        <span key={production.id} className="production"> {production.name}</span>
                    )}
                </div>
                <div className="description">{movie.overview}</div>
            </div>

        </div>
    );
}

export default MovieDetail;