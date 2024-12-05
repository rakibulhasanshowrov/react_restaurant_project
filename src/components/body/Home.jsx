import  { Component } from 'react'
import { connect } from 'react-redux';

//define function to get redux state
const mapStateToProps= state =>{
  //console.log("mapStateToprops:",state);
  return {
    dishes:state.dishes,
    sample:state.sample
  }
}

class Home extends Component {
  componentDidMount(){
  console.log("Home props:",this.props);
  this.props.dispatch({
    type:"TEST",
    str: "Rakib"
  })
  }

  componentDidUpdate(){
    console.log("Home props Updated:",this.props);
    
  }
  
    
  
  
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}


//Need to write this way if we use connect
export default connect(mapStateToProps)(Home);


