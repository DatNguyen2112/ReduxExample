import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./movies/movieSlice";
export const stores = configureStore({
    reducer: {movies : movieReducers}
})