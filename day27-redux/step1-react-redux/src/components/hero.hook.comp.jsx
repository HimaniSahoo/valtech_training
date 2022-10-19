
import { useDispatch, useSelector } from "react-redux";
import { addHero, removeHero } from "../redux";

let HeroHookComp = ()=>{
    const noOfHerosHook = useSelector(state => state.heroes.noOfHeros);
    const dispatch = useDispatch();
    return <div>
            <h2> Hero Component</h2>
            <h3> Total Heroes Recruited : {noOfHerosHook}</h3>
            <button onClick={()=>dispatch( addHero())}>Add Hero</button>
            <button onClick={()=>dispatch( removeHero())}>Remove Hero</button>
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
export default HeroHookComp;