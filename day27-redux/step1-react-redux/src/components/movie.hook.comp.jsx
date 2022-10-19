import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux";

let MovieHookComp = ()=>{
    const noOfMoviesHook = useSelector(state => state.movies.noOfMovies);
    const dispatch = useDispatch();
    return <div>
            <h2> Movie Component</h2>
            <h3> Total Movies Recruited : {noOfMoviesHook}</h3>
            <button onClick={()=>dispatch( addMovie())}>Add Movie</button>
            <button onClick={()=>dispatch( removeMovie())}>Remove Movie</button>
        </div>
}

// const mapStateToProps = (state)=>{
//     return{
//         noOfHeros : state.heroes.noOfHeros
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         addHero : ()=> dispatch( addHero()),
//         removeHero : ()=> dispatch( removeHero())
//     }
// }
export default MovieHookComp;