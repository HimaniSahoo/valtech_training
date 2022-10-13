import { useContext } from "react";
import FamilyContext from "../context/family.context";

let ChildComp = ()=>{
    let grandgift = useContext(FamilyContext)
    return <div style={{border :"2px solid black", margin : "10px"}}>
        <h1>Child Component</h1>
        {/* <FamilyContext.Consumer>{(val)=><h3>Gift Received {val}</h3>}</FamilyContext.Consumer> */}
        <h2>{ grandgift }</h2>

       
        
    </div>
}
export default ChildComp;