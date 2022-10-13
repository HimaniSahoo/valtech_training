import ChildComp from "./child.component";

let ParentComp = ()=>{
    return <div style={{border :"2px solid black"}}>
        <h1>Parent Component</h1>
        <ChildComp/>
    </div>
}
export default ParentComp;