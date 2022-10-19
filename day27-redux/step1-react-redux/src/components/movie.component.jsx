import { Component } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../redux";

class MovieComp extends Component{
    render(){
        return <div>
            <h2> Movie Component</h2>
            <h3> Total Movies Recruited : {this.props.noOfMovies}</h3>
            <button onClick={this.props.addMovie}>Add Hero</button>
            <button onClick={this.props.removeMovie}>Remove Hero</button>
        </div>
    }
}

const mapStateToProps = (state)=>{
    return{
        noOfMovies : state.movies.noOfMovies
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addMovie : ()=> dispatch( addMovie()),
        removeMovie : ()=> dispatch( removeMovie())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieComp);