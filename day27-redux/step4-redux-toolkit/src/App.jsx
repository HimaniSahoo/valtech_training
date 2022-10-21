import HeroView from "./features/hero/heroView";
import MovieView from "./features/movie/movieView";
import { Provider} from "react-redux";
import store from "./App/store";

const App = () =>{
        return <div>
            <h1> React Redux Toolkit</h1>
            <Provider store={store}>
                <HeroView/>
                <MovieView/>
            </Provider>
        </div>
}
export default App;
