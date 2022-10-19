import { ADD_MOVIE, REMOVE_MOVIE } from "./movie.type"

const movieInitialState ={
    noOfMovies : 0
}

let movieReducer = (state = movieInitialState, action)=>{
    switch(action.type){
        case ADD_MOVIE : return { ...state, noOfMovies : state.noOfMovies + 1}
        case REMOVE_MOVIE : return { ...state , noOfMovies : state.noOfMovies - 1}
        default : return state
    }
}

export { movieReducer };