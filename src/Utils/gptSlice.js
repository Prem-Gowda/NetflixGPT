import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPT:false
    },
    reducers:{
        toogleGPt :(state,action)=>{

            state.showGPT = !state.showGPT
        }
    }
})

export const {toogleGPt}=gptSlice.actions

export default gptSlice.reducer