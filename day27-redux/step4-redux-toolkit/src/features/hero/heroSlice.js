//const createSlice = require("@reduxjs/toolkit").createSlice;
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    noOfHeroes : 0
};

const heroSlice = createSlice({
    name : "hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=>{
            state.noOfHeroes++
        },
        removeHero : (state)=>{
            state.noOfHeroes--
        },
        setHero : (state, action)=>{
            state.noOfHeroes = action.payload
        }

    }
})

export default heroSlice.reducer;
export const {addHero, removeHero, setHero} = heroSlice.actions
