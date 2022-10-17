import { Outlet } from "react-router-dom";

function BatmanComp(){
    return (
        <div>
            <h1>Batman Component</h1>
            <Outlet/>
        
        </div>
    )
}
export default BatmanComp;