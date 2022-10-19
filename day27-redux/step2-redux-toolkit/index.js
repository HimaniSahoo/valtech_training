const store = require("./app/store");
const heroActions = require("./features/hero/heroSlice").heroActions;
const movieActions = require("./features/movie/movieSlice").movieActions;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState());
})
 
console.log("Hero")
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.removeHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
console.log("Movie")
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.removeMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.removeMovie());
 
unsubscribe();
