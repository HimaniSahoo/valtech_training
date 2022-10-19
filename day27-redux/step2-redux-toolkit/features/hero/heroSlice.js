const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
    noOfHeroes : 0
};

const heroSlice = createSlice({
    name : "Hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=>{
            state.noOfHeroes++
        },
        removeHero : (state)=>{
            state.noOfHeroes--
        }

    }
})

module.exports = heroSlice.reducer;  // default export
module.exports.heroActions = heroSlice.actions;  // named export