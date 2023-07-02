import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {addDetailMovies, getAllDetailMovie, removeMovie} from '../../redux/movies/movieSlice';
import "../MovieDetail/MovieDetail.scss"
const imageURl = "https://image.tmdb.org/t/p/w500"
const MovieDetail = () => {
    const {movieID} = useParams()
    const dispatch = useDispatch()
    const detailMovie = useSelector(getAllDetailMovie)
    console.log(movieID)
    console.log(detailMovie)
    useEffect(() => {
        const fetchDetailMovie = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=edc66d0e540d6a046f751b375367dde7&language=en-US`).catch((err) => {
                console.log("Error", err)
            })
            dispatch(addDetailMovies(response.data))
        }
        fetchDetailMovie() 
        return () => {
            dispatch(removeMovie())
        }
    }, [dispatch, movieID])
    return (
        <div className='movie__detail'>
        {Object.keys(detailMovie).length === 0 ? (
          <div>...Loading</div>
        ) : (
            <>
                <div className='movieRow__left'>
                    <div className='movie__title'>
                        <h1>{
                            detailMovie.original_title
                        }</h1>
                    </div>
                    <div className='movie__rating'>
                        <span>
                            Rating

                            <i className="fa-solid fa-star"></i>
                            : {
                            detailMovie.popularity
                        } </span>

                        <span>
                            Vote

                            <i className="fa-solid fa-thumbs-up"></i>
                            : {
                            detailMovie.vote_average
                        } </span>

                        <span>
                            Runtime
                            
                            <i className="fa-solid fa-film"></i>
                            : {
                            detailMovie.runtime
                        } </span>

                        <span>
                            Release Date
                            <i className="fa-solid fa-calendar"></i>
                            : {
                            detailMovie.release_date
                        } </span>
                    </div>
                    <div className='movie__story'>
                        <h2>{
                            detailMovie.overview
                        }</h2>
                    </div>
                    <div className='movie__info'>
                        <h2>More Info :</h2>
                        <a href={
                            detailMovie.homepage
                        }>
                            {
                            detailMovie.homepage
                        } </a>
                    </div>
                </div>
                <div className='movieRow__right'>
                    <img src={
                            `${imageURl}${
                                detailMovie.poster_path
                            }`
                        }
                        alt={
                            detailMovie.original_title
                        }/>
                </div>
            </>)}        
        </div>
    );
};

export default MovieDetail;
