import { useEffect } from "react";

let UseEffectComp = (props)=> {
    let power = props.state.power;
    let version = props.state.version
    useEffect(()=>{
        return console.log("component was mounted or updated")
    },[])
    useEffect(()=>{
        return console.log("component was unmounted ")
    },[props.state.power])
    
    return <div>
                <h2>UseEffect Hook</h2>
                <h3>Power is : { power }</h3>
              <h3>Version is : { version }</h3>
                {/*   <h3>Rating is : { props.rating }</h3> */}
            </div>
}
export  { UseEffectComp };