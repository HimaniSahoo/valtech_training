import { useState } from "react";
import FamilyContext from "../context/family.context";
import ParentComp from "./parent.component";

let GrandParentComp = ()=>{
    let [gift, updateGift] = useState(0)
    return <div style={{border :"2px solid black" , margin: "10px"}}>
        <h1>Grand Parent Component</h1>
        <button onClick={()=>updateGift(Math.round(Math.random() * 10000))}>Update the gift</button>
        <FamilyContext.Provider value={gift}>
            <ParentComp/>
            {/* <CousinComp/> */}
        </FamilyContext.Provider>
        
    </div>
}
export default GrandParentComp;