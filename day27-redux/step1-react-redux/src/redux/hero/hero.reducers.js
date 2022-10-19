import { ADD_HERO, REMOVE_HERO } from "./hero.type"

const heroInitialState ={
    noOfHeros : 0
}

let heroReducer = (state = heroInitialState, action)=>{
    switch(action.type){
        case ADD_HERO : return { ...state, noOfHeros : state.noOfHeros + 1}
        case REMOVE_HERO : return { ...state , noOfHeros : state.noOfHeros - 1}
        default : return state
    }
}

export { heroReducer };