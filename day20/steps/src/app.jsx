import { Component } from "react";
import ChildComp from "./child.component";

class App extends Component{
   render(){
    return <div>
                <ChildComp title ="superman" power={1} version={4} > </ChildComp>
                {/* <ChildComp title ="ironman" power={2} version={7}> </ChildComp>
                <ChildComp title ="raone" power={3} version={8}> </ChildComp>
                 */}
        </div>
    
   }
} 
export default App;