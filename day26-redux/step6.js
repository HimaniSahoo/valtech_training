//action type is a constant name
//action creater is a function that returns the action object
//initial state is the initial value of the store object
//reducer is a function which has switch cases to call functions based on action type
//store is an object that stores all shared states of your application
//subscribe / unsubscribe to listen to the changes of the store
// dispatch is a method that can take action object

const redux = require("redux");
const logger = require("redux-logger").createLogger; //redux-logger has a method called createLogger

let createStore = redux.legacy_createStore;
let combineReducers = redux.combineReducers;
let bindActionCreators = redux.bindActionCreators;
let applyMiddleware = redux.applyMiddleware;

// action
const ADDHERO = "ADDHERO"
const REMOVEHERO = "REMOVEHERO"
const SETHERO = "SETHERO"

const ADDMOVIE = "ADDMOVIE"
const REMOVEMOVIE = "REMOVEMOVIE"
const SETMOVIE = "SETMOVIE"

// ACTION CREATOR
let addheros = function(){
    return{
        type : ADDHERO
      
    }
}
let removeheros = function(){
    return{
        type : REMOVEHERO
    }
}
let setheros = function(num){
    return{
        type : SETHERO,
        payload : num
    }
}
let addmovies = function(){
    return{
        type : ADDMOVIE
    }
}
let removemovies = function(){
    return{
        type : REMOVEMOVIE
    }
}
let setmovies = function(num){
    return{
        type : SETMOVIE,
        payload : num
    }
}


//Initital state
let initialHeroState = {
    NoOfHeroes : 0,
    
};
let initialMovieState = {
   NoOfMovies : 0,
};

//reducer
let heroReducer = (state = initialHeroState, action)=>{
    switch(action.type){
        case ADDHERO : return {...state, NoOfHeroes : state.NoOfHeroes +1};
        case REMOVEHERO : return {...state, NoOfHeroes : state.NoOfHeroes -1};
        case SETHERO : return {...state, NoOfHeroes : action.payload};
        default  : return state;
    }
}
let movieReducer = (state = initialMovieState, action)=>{
    switch(action.type){
        case ADDMOVIE : return {...state, NoOfMovies : state.NoOfMovies +1};
        case REMOVEMOVIE : return {...state, NoOfMovies : state.NoOfMovies -1};
        case SETMOVIE : return {...state, NoOfMovies : action.payload};
        default  : return state;
    }
}

//STORE
let rootReducer = combineReducers({
    heroes : heroReducer,
    movies : movieReducer
})

let store = createStore(rootReducer, applyMiddleware(logger()))

//SUBSCRIBE
// let unsubscribe = store.subscribe(()=>console.log("subscribed", store.getState()));
store.subscribe(function(){});
//DISPATCH

console.log(store.getState())

let action = bindActionCreators({addheros, removeheros, setheros, addmovies, removemovies, setmovies}, store.dispatch)

action.addheros()
action.addheros()
action.removeheros()
action.setheros(7)
action.addmovies()
action.addmovies()
action.addmovies()
action.removemovies()
action.setmovies(8)

console.log(store.getState())