import { Component } from "react";
import MenuItem from "./MenuItem"; 
import DishDetails from "./DishDetails";
import { Row, Col, Modal, ModalFooter,Button } from "reactstrap"; // Use Row and Col for better grid control
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actionTypes"
const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment:(dishId,rating,author,comment) => dispatch({
      type:actionTypes.ADD_COMMENT,
      payload:{
        dishId:dishId,
        author:author,
        rating:rating,
        comment:comment,
      }
    }),
    //Now we can pass Other dispatch  function as a object after that 
    // so thats how it is now organized  way of dispatching function
  }
}
class Menu extends Component {
  state = {
    SelectedDish: null,
    modalOpen:false,
  };

  onSelectDish = (dish) => {
    this.setState({
      SelectedDish: dish,
      modalOpen:true,
    });
  };


  toggleModal= ()=>{
    this.setState({
      modalOpen:!this.state.modalOpen,
    })
  }

  render() {
    document.title='Menu'
    const menu = this.props.dishes.map((dish) => {
      return (
        <Col md={4} sm={6} key={dish.id} className="mb-4"> {/* Use column sizing to create a responsive grid */}
          <MenuItem dish={dish} onSelectDish={() => this.onSelectDish(dish)} />
        </Col>
      );
    });

    let dishDetails = null;

    if (this.state.SelectedDish) {
      const comments = this.props.comments.filter(comment => {
        return comment.dishId === this.state.SelectedDish.id;
      });
      dishDetails = <DishDetails dish={this.state.SelectedDish} comments={comments} addComment={this.props.addComment} />;
    }


    return (
      <div className="container">
        <div className="row">
          {menu} {/* Display the menu items as grid columns */}
          <Modal isOpen={this.state.modalOpen} >{dishDetails}
            <ModalFooter>
              <Button color='primary' onClick={this.toggleModal}>close</Button>
            </ModalFooter>
          </Modal>
        </div>
        
      </div>
    );
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Menu);

