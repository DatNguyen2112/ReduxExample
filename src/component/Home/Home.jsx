import React, { useEffect } from 'react'
import "../Home/Home.scss"
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovie, fetchHorrorMovie, fetchSearchMovie } from '../../redux/movies/movieSlice'
function Home() {
    const dispatch = useDispatch()
    const keyword = "Black"
    useEffect(() => {
        dispatch(fetchAsyncMovie())
        dispatch(fetchHorrorMovie())
        dispatch(fetchSearchMovie(keyword))
    }, [dispatch])
    return (
        <div className='Home'>
           <div className='HomeBanner__image'></div>
           <MovieListing />
        </div>
    )
}

export default Home
