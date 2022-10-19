const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
    noOfMovies : 0
};

const movieSlice = createSlice({
    name : "Movie",
    initialState : initialState,
    reducers : {
        addMovie : (state)=>{
            state.noOfMovies++
        },
        removeMovie : (state)=>{
            state.noOfMovies--
        }

    }
})

module.exports = movieSlice.reducer;  // default export
module.exports.movieActions = movieSlice.actions;  // named export