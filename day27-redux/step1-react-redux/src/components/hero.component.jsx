import { Component } from "react";
import { connect } from "react-redux";
import { addHero, removeHero } from "../redux";

class HeroComp extends Component{
    render(){
        return <div>
            <h2> Hero Component</h2>
            <h3> Total Heroes Recruited : {this.props.noOfHeros}</h3>
            <button onClick={this.props.addHero}>Add Hero</button>
            <button onClick={this.props.removeHero}>Remove Hero</button>
        </div>
    }
}

const mapStateToProps = (state)=>{
    return{
        noOfHeros : state.heroes.noOfHeros
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addHero : ()=> dispatch( addHero()),
        removeHero : ()=> dispatch( removeHero())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroComp);