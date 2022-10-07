import { Component } from "react";
//import PropTypes from "prop-types";

class ChildComp extends Component{

    state = {
        power : 0
    }

    increasePower = ()=>{
        this.setState({
            
                power : this.state.power + 1
            })
                 
        };
    
        setVersionTo100=()=>{
            this.setState({
                version : 100
            })
        };

   
    // }
    render(){
        return<div>
                <h2>Child Component | power is {this.state.power}</h2>
                <h2>Child Component | version is {this.state.version}</h2>
               <button onClick={this.increasePower}>Increase Power</button>  
               <button onClick={this.setVersionTo100}>Set version</button>  
            </div>
    }

}
export default ChildComp;