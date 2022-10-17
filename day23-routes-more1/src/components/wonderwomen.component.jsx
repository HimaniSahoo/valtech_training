import { useParams } from "react-router-dom";

function WonderWomenComp(){
    let params = useParams();
    return (
        <div>
            <h1>Wonder Women Component</h1>
            <h2>Quantity is : {Number(params.qty)+10 || 0}</h2>
        
        </div>
    );
}
export default WonderWomenComp;