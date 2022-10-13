//import { useState } from "react"

import GrandParentComp from "./component/grandparent.component";
import useValtech from "./context/hooks/useValtech";

//import { UseEffectComp } from "./component/useEffectComp";
//import { UseReducerComp } from "./component/useReducerComp";

 
let App = ()=> {
   /*  
   let [power, setPower] = useState(0);
    let [version, setVersion] = useState(0);
    let [rating, setRating] = useState(0); 
    */
    //let [state, setState] = useState({ power: 0, version : 0, rating : 0});
     let msg = useValtech(1)
    return <div>
          {/* <h1>Welcome to your life | Power is { state.power } | Version is : { state.version } | Rating : { state.rating }</h1>
                <input type="range" onChange={()=> setState({...state, power: state.power+1})} />
                <br />
                <input type="range" onChange={()=> setState({...state, version : state.version+1} )} />
                <br />
                <input type="range" onChange={()=> setState({...state, rating: state.rating+1} )} />
                <UseEffectComp state={state}/>
                <UseEffectComp state={state}/>
                <UseEffectComp state={state}/>
                <UseReducerComp/> */}
                  <h1>{msg}</h1>
                <GrandParentComp/>
            </div>
}
export default App


 

 
