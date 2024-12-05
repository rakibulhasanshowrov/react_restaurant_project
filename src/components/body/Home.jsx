import  { Component } from 'react'
import { connect } from 'react-redux';

//define function to get redux state
const mapStateToProps= state =>{
  console.log("mapStateToprops:",state);
  return {
    dishes:state.dishes
  }
}

class Home extends Component {
  componentDidMount(){
  console.log("Home State:",this.state);
  console.log("Home props:",this.props);
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


