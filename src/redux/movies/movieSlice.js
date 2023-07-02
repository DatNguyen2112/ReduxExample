import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from '../../APIs/axios'
import requests from "../../APIs/request";
const fetchURLAction = requests.fetchActionMovies
const fetchURLHorror = requests.fetchHorrorMovies
const fetchURLSearch = requests.fetchSearchMovie
const initialState = {
    movies: [],
    horrorMovies: [],
    detailMovie: [],
    searchMovie: []
}

export const fetchAsyncMovie = createAsyncThunk('movie/fetchAsyncMovie', async () => {
    const response = await instance.get(fetchURLAction)
        .catch((err) => {
            console.log("Error", err)
        });
    return response.data.results
})

export const fetchHorrorMovie = createAsyncThunk('movie/fetchHorrorMovie', async () => {
    const response = await instance.get(fetchURLHorror)
        .catch((err) => {
            console.log("Error", err)
        });
    return response.data.results
})

export const fetchSearchMovie = createAsyncThunk('movie/fetchSearchMovie', async (term) => {
    // const keyword = "Black"
    const response = await instance.get(`${fetchURLSearch}&query=${term}&language=en-US&page=1&include_adult=false`)
        .catch((err) => {
            console.log("Error", err)
        });
    return response.data.results
})




const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addDetailMovies: (state, {payload}) => {
            state.detailMovie = payload
        },
        removeMovie: (state) => {
            state.detailMovie = {}
        }
    },
    extraReducers : {
        [fetchAsyncMovie.pending] : () => {
            console.log('pending')
        },
        [fetchAsyncMovie.fulfilled] : (state, {payload}) => {
            console.log('FullFill Successfull')
            return {...state, movies: payload}
        },
        [fetchHorrorMovie.pending] : () => {
            console.log('pending')
        },
        [fetchHorrorMovie.fulfilled] : (state, {payload}) => {
            console.log('FullFill Successfull')
            return {...state, horrorMovies: payload}
        },
        [fetchAsyncMovie.rejected] : () => {
            console.log('rejected!!!')
        },
        [fetchSearchMovie.fulfilled] : (state, {payload}) => {
            console.log('FullFill Successfull')
            return {...state, searchMovie: payload}
        },
        [fetchSearchMovie.rejected] : () => {
            console.log('rejected!!!')
        },
    }
})

export const {addDetailMovies, removeMovie} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllHorrorMovies = (state) => state.movies.horrorMovies
export const getAllDetailMovie = (state) => state.movies.detailMovie
export const getAllSearchMovie = (state) => state.movies.searchMovie
export default movieSlice.reducer