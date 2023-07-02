import React from 'react'
import "../MovieCard/MovieCard.scss"
import {Link} from 'react-router-dom'
const imageURl = "https://image.tmdb.org/t/p/w500"
function MovieCard({data}) {
    return (
        <div className='card__item'>
            <Link to={`/movie/${data.id}`}>
                <div className='card__inner'>
                    <div className='card__top'>
                        <img src={
                                `${imageURl}${
                                    data.poster_path
                                }`
                            }
                            alt={
                                data.title
                            }/>
                    </div>

                    <div className='card__bottom'>
                        <div className='card__info'>
                            <h4>{
                                data.title
                            }</h4>
                            <p>{
                                data.release_date
                            }</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
