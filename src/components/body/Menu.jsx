import { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";
import { Row, Col, Modal, ModalFooter,Button } from "reactstrap"; // Use Row and Col for better grid control

class Menu extends Component {
  state = {
    dishes: DISHES,
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
    const menu = this.state.dishes.map((dish) => {
      return (
        <Col md={4} sm={6} key={dish.id} className="mb-4"> {/* Use column sizing to create a responsive grid */}
          <MenuItem dish={dish} onSelectDish={() => this.onSelectDish(dish)} />
        </Col>
      );
    });

    const dishDetails = this.state.SelectedDish ? (
      <DishDetails dish={this.state.SelectedDish} />
    ) : null;

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

