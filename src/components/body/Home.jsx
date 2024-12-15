import  { Component } from 'react'
import Loading from './Loading';



class Home extends Component {

  render() {
    return (
      <div>
        <Loading />
      </div>
    )
  }
}


//Need to write this way if we use connect
export default Home;


