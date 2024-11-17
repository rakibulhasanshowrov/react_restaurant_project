import { useState } from "react"
import MenuItem from "./MenuItem"
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";


const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selctedDish, setSelectedDish] = useState(null);

  const onSelectDish = (dish) => {
    setSelectedDish(dish)
    console.log(selctedDish);
    
  }

  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} onSelectDish={onSelectDish} />
  })

 
  const dishDetails= selctedDish? <DishDetails dish={selctedDish} />: null
  return (
    <div className='container'>
      <div className="row">
        <div className="col-5">
          {menu}
        </div>
        <div className="col-7">
          {dishDetails}
        </div>

      </div>

    </div>
  )
}

export default Menu
