import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import user from '../../image/user.jpg'
import logo from '../../image/logo.png'
import "../Header/Header.scss"
import { useDispatch } from 'react-redux';
import { fetchSearchMovie } from '../../redux/movies/movieSlice';
const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(term)
        dispatch(fetchSearchMovie(term))
        setTerm("")
    }


    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>


            <div className='search-banner'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={term}
                        placeholder='Search'
                        onChange={
                            (e) => setTerm(e.target.value)
                        }/>
                    <button type='submit'>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            <div className='user-image'>
                <img src={user}
                    alt='user'/>
            </div>
        </div>
    );
};

export default Header;
