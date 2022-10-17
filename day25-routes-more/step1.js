let redux =require("redux");
let createStore = redux.legacy_createStore;

//action type is a constant type of event
//action creater is a function that returns the action object
//initia l state is the initial value of the store object
//reducer is a function which has switch cases to call functions based on action type
//store is an object that stores all shared states of your application
//subscribe / unsubscribe to listen to the changes of the store
// dispatch is a method that can take action object

//ACTION
const ADDHERO = "ADDHERO";

//ACTION CREATER
let addhero = function(){
    return{
        type : ADDHERO
    }
}

//INITIAL STATE
let initialState ={
    numberOfHero : 0
}

//REDUCER
let reducer =(state = initialState , action)=>{
    switch(action.type){
        case ADDHERO : return {numberOfHero : state.numberOfHero + 1}
        default : return state
    }
};

//STORE
let store = createStore(reducer);

//SUBSCRIBE/ UNSUBSCRIBE
let unsubscribe = store.subscribe(()=>console.log("subscribed", store.getState()));


//DISPATCH
store.dispatch(addhero());
store.dispatch(addhero());
store.dispatch(addhero());
unsubscribe();
console.log("Unsubscribe")
store.dispatch(addhero());
store.dispatch(addhero());
console.log(store.getState());
