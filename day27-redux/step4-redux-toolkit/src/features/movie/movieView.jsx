import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie, setMovie } from "./movieSlice";

let MovieView = ()=>{
    const noOfMovies = useSelector(state => state.movie.noOfMovies);
    const dispatch = useDispatch();
    return <div>
            <h3> Number of movies is : {noOfMovies}</h3>
            <button onClick={()=>dispatch( addMovie())}>Add Movie</button>
            <button onClick={()=>dispatch( removeMovie())}>Remove Movie</button>
            <button onClick={()=>dispatch( setMovie(15))}>Set Movie</button>
        </div>
}

export default MovieView;