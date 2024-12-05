import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Row, Col, Modal, ModalFooter,Button } from "reactstrap"; // Use Row and Col for better grid control
import { connect } from "react-redux";

const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments
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
      dishDetails = <DishDetails dish={this.state.SelectedDish} comments={comments} />;
    }


    return (
      <div className="container">
        <div className="row">
          {menu} {/* Display the menu items as grid columns */}
          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>{dishDetails}
            <ModalFooter>
              <Button color='primary' onClick={this.toggleModal}>close</Button>
            </ModalFooter>
          </Modal>
        </div>
        
      </div>
    );
  }
}

export default  connect(mapStateToProps)(Menu);

