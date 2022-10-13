import { useReducer, useRef } from "react"

let UseReducerComp =()=>{
    let fname = useRef();
    let lname = useRef();
    let cname = useRef();
    //let [firstname, setFirstname] = useState("")
    let reducerFun = (state, action)=>{
        switch(action.type){
            case "UPDATE_FIRSTNAME" :
                //return {...state, firstname : "Bruce"}
                return {...state, firstname : action.payload}
            case "UPDATE_LASTNAME" :
                //return {...state, lastname : "Bruce"}
                return {...state, lastname : action.payload}
            case "UPDATE_CITYNAME" :
               // return {...state, cityname : "Bruce"}
                return {...state, cityname : action.payload}
            default :
                return state    
        }
    }
    let [state, dispatch] = useReducer(reducerFun,{firstname : "", lastname : "", city : ""})
    return <div>
        <h1>hook reducer</h1>
        <input type="text" ref={ fname }/>
        {/* <button onClick={()=>dispatch({type: "UPDATE_FIRSTNAME"})}>Set First name</button> */}
        <button onClick={()=>dispatch({type: "UPDATE_FIRSTNAME", payload: fname.current.value})}>Set First name</button>
        <h4>First Name: {state.firstname}</h4>
        <input type="text" ref={ lname }/>
        {/* <button onClick={()=>dispatch({type: "UPDATE_LASTNAME"})}>Set First name</button> */}
        <button onClick={()=>dispatch({type: "UPDATE_LASTNAME", payload: lname.current.value})}>Set Last name</button>
        <h4>Last Name: {state.lastname}</h4>
        <input type="text" ref={ cname }/>
        {/* <button onClick={()=>dispatch({type: "UPDATE_CITYNAME"})}>Set First name</button> */}
        <button onClick={()=>dispatch({type: "UPDATE_CITYNAME", payload: cname.current.value})}>Set City name</button>
        <h4>City Name: {state.cityname}</h4>
    </div>
}
export { UseReducerComp }