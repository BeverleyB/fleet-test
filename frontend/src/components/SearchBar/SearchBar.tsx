import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { searchMovie } from '../../services/http';
import { IMovie } from '../../interfaces/IMovie';

import './SearchBar.scss';

function SearchBar() {
    const [query, setQuery] = React.useState<string>('');
    const [movies, setMovies] = React.useState<IMovie[]>([]);

    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef(null);
    
    React.useEffect(() => {
        onSearchMovie();
    }, [query]);

    React.useEffect(() => {
        setQuery('');
        setMovies([]);
    }, [location.pathname]);

    React.useEffect(() => {
        window.addEventListener('click', onClickOutside);
        return () => {
          window.removeEventListener('click', onClickOutside);
        };
      }, []);


    async function onSearchMovie() {
        const searchResult = await searchMovie(query);
        setMovies(searchResult.results)
    }

    function onClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setQuery('');
          setMovies([]);
        }
    }

    return(
        <div id="SearchBar">
            <div className="logo" title='Home' onClick={() => navigate('/')}/>

            <div className="container-searchbar" ref={ref}>
                <input
                    type="text"
                    value={query}
                    placeholder="Search..."
                    className="search-bar"
                    onChange={(e) => setQuery(e.target.value)}
                />

            { movies.length >= 1 &&
                <ul className="search-list">
                    { movies.slice(0, 10).map(movie => 
                        <li className="finded-movie" onClick={() => navigate(`/movie/${movie.id}`)}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie poster" className="movie-pic" />
                            <h3 className="title-movie">{movie.title}</h3>
                        </li>
                    )}
                </ul>
            }
            </div>
        </div>
    );
}

export default SearchBar;