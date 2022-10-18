//action type is a constant name
//action creater is a function that returns the action object
//initial state is the initial value of the store object
//reducer is a function which has switch cases to call functions based on action type
//store is an object that stores all shared states of your application
//subscribe / unsubscribe to listen to the changes of the store
// dispatch is a method that can take action object

const redux = require("redux");
let createStore = redux.legacy_createStore;

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
let adddmovies = function(){
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
let initialState = {
    NoOfHeroes : 0,
    NoOfMovies : 0
};

//reducer
let reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADDHERO : return {...state, NoOfHeroes : state.NoOfHeroes +1};
        case REMOVEHERO : return {...state, NoOfHeroes : state.NoOfHeroes -1};
        case SETHERO : return {...state, NoOfHeroes : action.payload};
        case ADDMOVIE : return {...state, NoOfMovies : state.NoOfMovies +1};
        case REMOVEMOVIE : return {...state, NoOfMovies : state.NoOfMovies -1};
        case SETMOVIE : return {...state, NoOfMovies : action.payload};
        default  : return state;
    }
}

//STORE
let store = createStore(reducer);

//SUBSCRIBE
let unsubscribe = store.subscribe(()=>console.log("subscribed", store.getState()));

//DISPATCH
store.dispatch(addheros());
store.dispatch(addheros());
store.dispatch(setheros(5));
store.dispatch(removeheros());
store.dispatch(addheros());
store.dispatch(addheros());
unsubscribe();
store.dispatch(addheros());
store.dispatch(addheros());
store.dispatch(adddmovies());
store.dispatch(removemovies());
store.dispatch(setmovies());
console.log(store.getState())

