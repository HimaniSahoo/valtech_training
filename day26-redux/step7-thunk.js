let redux =require("redux");
//const { default : thunk } = require("redux-thunk");
let reduxThunk = require("redux-thunk").default
let createStore = redux.legacy_createStore;
let applyMiddleware = redux.applyMiddleware;
let axios = require("axios");

//action type is a constant name
//action creater is a function that returns the action object
//initial state is the initial value of the store object
//reducer is a function which has switch cases to call functions based on action type
//store is an object that stores all shared states of your application
//subscribe / unsubscribe to listen to the changes of the store
// dispatch is a method that can take action object

//ACTION
const AXIOS_USERS_REQUEST = "AXIOS_USERS_REQUEST";
const AXIOS_USERS_SUCCESS = "AXIOS_USERS_SUCCESS";
const AXIOS_USERS_ERROR = "AXIOS_USERS_ERROR";

//ACTION CREATER
let fetchUsers = ()=>{
    return{
        type : AXIOS_USERS_REQUEST
    }
}
let fetchUsersSuccess = (users)=>{
    return{
        type : AXIOS_USERS_SUCCESS,
        payload : users
    }
}
let fetchUsersError = (error)=>{
    return{
        type : AXIOS_USERS_ERROR,
        payload : error
    }
}

//INITIAL STATE
let initialState ={
    loading : false,
    error : '',
    users : []

}

//REDUCER
let reducer =(state = initialState , action)=>{
    switch(action.type){
        case AXIOS_USERS_REQUEST : return {
                                                ...state,
                                                loading : true,
                                                error : '',
                                                users : []
                                            }
        case AXIOS_USERS_SUCCESS : return {
                                                ...state,
                                                loading : false,
                                                error : '',
                                                users : action.payload
                                            }
        case AXIOS_USERS_ERROR : return {
                                                ...state,
                                                loading : false,
                                                error : action.payload,
                                                users : []
                                            }
        default : return state
    }
};

let thunkFetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsers())
    }
}
let thunkAjaxUsers = ()=>{
    return function(dispatch){
        axios
        .get("https://reqres.in/api/users?page=1")
        .then(res=>dispatch(fetchUsersSuccess(res.data.data)))
        .catch(error=>dispatch(fetchUsersError(error)))
    }
}

//STORE
let store = createStore(reducer, applyMiddleware(reduxThunk));



//SUBSCRIBE/ UNSUBSCRIBE
//let unsubscribe = store.subscribe(()=>console.log("subscribed", store.getState()));

store.subscribe(()=>{
    console.log(store.getState());
})


//DISPATCH
store.dispatch(thunkFetchUsers());
store.dispatch(thunkAjaxUsers());
