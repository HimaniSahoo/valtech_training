import { useDispatch, useSelector } from "react-redux";
import { addHero, removeHero, setHero } from "./heroSlice";

let HeroView = ()=>{
    const noOfHeroes = useSelector(state => state.hero.noOfHeroes);
    const dispatch = useDispatch();
    return <div>
            <h3> Number of hero is: {noOfHeroes}</h3>
            <button onClick={()=>dispatch( addHero())}>Add Hero</button>
            <button onClick={()=>dispatch( removeHero())}>Remove Hero</button>
            <button onClick={()=>dispatch( setHero(10))}>Set Hero</button>
        </div>
}

export default HeroView;