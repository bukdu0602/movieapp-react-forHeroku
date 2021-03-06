import React, { useState, useEffect } from "react";
import { API_TOKEN } from '../globals/globals';
import { Link, useNavigate } from 'react-router-dom';
import noPoster from "../images/no-movie-poster.jpg"


const PageHome = ({ sort }) => {
    
    const [moviesData, setMoviesData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                  }
            });
            const moviesData = await res.json();
            const first12Movies = moviesData.results.splice(0,12); 
            setMoviesData(first12Movies);
          }
      
          fetchMovies();

    }, [sort]);

    function gotClicked(e){
        e.preventDefault();
        const item = e.target.value
        navigate(item, { replace: true });
    }
    function clicked(movieId){
        navigate(`individual/${movieId}`, { replace: true });
    }

    return (
        <section className="home-page">
            <div className="sortMenu">
            <label htmlFor="myList"></label>
            <select id="myList" name="myList" onChange={gotClicked}>
                <option value="">Select</option>
                <option value="/sort/popular">Popular</option>
                <option value="/sort/top-rated">Top Rated</option>
                <option value="/sort/now-playing">Now Playing</option>
                <option value="/sort/upcoming">Upcoming</option>
            </select>
            </div>
        
        <nav className="nav-sort">
          
        </nav>
        <div className="cards">
            {moviesData !== null && 
                moviesData.map((movie, idForCss) =>
                    <div className="card" key={movie.id} onClick={() => clicked(movie.id)}>
                        <div className="posterImage"  >
                            {movie.poster_path !== null ?
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt={movie.title} />:
                            <img src={noPoster} alt="No Images"></img>
                            }
                        </div>
                        <div className="movieInfo">
                            <h3>{`Title: ${movie.title}`}</h3>
                            <p>{`Released date: ${movie.release_date}`}</p>
                            <p>{`Rating: ${movie.vote_average}`}</p>
                            {movie.overview.length > 80 ? <p>{movie.overview.substring(0, 80)} . . .</p> : <p>{movie.overview}</p>}
                            <Link to={`/individual/${movie.id}`}> More Info </Link>
                        </div>
                    </div>
                    
            )}
        </div>
        </section>
    )

};

export default PageHome;