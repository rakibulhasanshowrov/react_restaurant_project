
import { Navbar,NavbarBrand } from "reactstrap"
function NavigationComponent() {
  return (
    <div>
      <Navbar
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      React Restaurant
    </NavbarBrand>
  </Navbar>
    </div>
  )
}

export default NavigationComponent
