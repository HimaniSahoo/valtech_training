// const heroActions = require("./features/hero/heroSlice").heroActions;
// const createSlice = require("@reduxjs/toolkit").createSlice;
//import {addHero} from "../hero/heroSlice";
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    noOfMovies : 0
};

const movieSlice = createSlice({
    name : "movie",
    initialState : initialState,
    reducers : {
        addMovie : (state)=>{
            state.noOfMovies++
        },
        removeMovie : (state)=>{
            state.noOfMovies--
        },
        setMovie : (state, action)=>{
            state.noOfMovies = action.payload
        }

    }
    // extraReducers : (builder) =>{
    //     builder.addCase(addHero, state =>{
    //         state.noOfMovies++
    //     })
    // }
    
})

// extraReducers :{
    //name of the slice followed by a / forward slash
//     ['Hero/addHero'] : (state)=>{
//         state.noOfMovies++
//     }
// }



export default movieSlice.reducer;
export const {addMovie, removeMovie, setMovie} = movieSlice.actions