import React from 'react';
import {useSelector} from 'react-redux';
import {getAllHorrorMovies, getAllMovies, getAllSearchMovie} from '../../redux/movies/movieSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from '../MovieCard/MovieCard';
import { settings } from '../../common/settings';
import "../MovieListing/MovieListing.scss"
const MovieListing = () => {    
    const moviesList = useSelector(getAllMovies)
    const HororMoviesList = useSelector(getAllHorrorMovies)
    const SearchMovieList = useSelector(getAllSearchMovie)
    console.log("Movies:", moviesList)
    const renderMovie = moviesList.map((movie, index) => {
        return (
            <MovieCard key={index}
                data={movie}/>
        )
    })

    const renderMovieHorror = HororMoviesList.map((movie, index) => {
        return (
            <MovieCard key={index}
                data={movie}/>
        )
    })

    const renderSearchMovie = SearchMovieList.map((movie, index) => {
        return (
            <MovieCard key={index}
                data={movie}/>
        )
    })
    return (
        <div className='movie__list'>
            <div className='movie__container'>
                <h1>Search</h1>
                <div className='movieSearch__lists'>                   
                    <>{renderSearchMovie}</>
                </div>
            </div>

            <div className='movie__container'>
                <h1>Action</h1>
                <div className='movieAction__lists'>
                    <Slider {...settings}>
                        {renderMovie}</Slider>
                </div>
            </div>

            <div className='movie__container'>
                <h1>Horror</h1>
                <div className='movieHorror__lists'>
                    <Slider {...settings}>
                        {renderMovieHorror} </Slider>
                </div>
            </div>

        </div>


    );
};

export default MovieListing;
