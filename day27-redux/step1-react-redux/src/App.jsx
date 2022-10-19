import { Component } from "react";
import HeroComp from "./components/hero.component";
import MovieComp from "./components/movie.component";
import HeroHookComp from "./components/hero.hook.comp";
import MovieHookComp from "./components/movie.hook.comp";

class App extends Component{
    render(){
        return <div>
            <h1> Welcome Heroes</h1>
            <HeroComp/>
            <HeroHookComp/>
            <br/>
            <h1> Welcome Movies</h1>
            <MovieComp/>
            <MovieHookComp/>
            
        </div>
    }
}
export default App;
