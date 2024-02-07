import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addTrailerKey: (state, action) => {
            state.trailerVideo = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        } 
    }
})

export const { addNowPlayingMovies, addTrailerKey } = movieSlice.actions
export default movieSlice.reducer