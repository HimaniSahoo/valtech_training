import { useNavigate } from 'react-router-dom';
function SupermanComp(){
    let batNav = useNavigate();
    let wonderNav = useNavigate();
    return (
        <div>
            <h1>Superman Component</h1>
            <button onClick={ ()=> batNav("/batman", { replace : true })}>Navigate to Batman</button>
            <button onClick={ ()=> wonderNav("/wonderwomen", { replace : true })}>Navigate to Wonder Woman</button>
        </div>
    );
}
export default SupermanComp;