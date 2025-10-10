import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        nowPopular:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopular:(state,action)=>{
            state.nowPopular=action.payload
        },
        addTrailer:(state,action)=>{
            state.nowPlayingTrailer=action.payload

        }
    }
})

export const {addMovies,addTrailer,addPopular} = movieSlice.actions

export default movieSlice.reducer