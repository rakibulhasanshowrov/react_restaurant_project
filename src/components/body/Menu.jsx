import { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import DishDetails from "./DishDetails";
import { Row, Col, Modal, ModalFooter,Button } from "reactstrap"; // Use Row and Col for better grid control

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments:COMMENTS,
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
    const menu = this.state.dishes.map((dish) => {
      return (
        <Col md={4} sm={6} key={dish.id} className="mb-4"> {/* Use column sizing to create a responsive grid */}
          <MenuItem dish={dish} onSelectDish={() => this.onSelectDish(dish)} />
        </Col>
      );
    });

    let dishDetails = null;

    if (this.state.SelectedDish) {
      const comments = this.state.comments.filter(comment => {
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

export default Menu;

