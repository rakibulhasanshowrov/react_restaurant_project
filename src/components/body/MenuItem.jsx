
import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap'
const MenuItem = ({ dish, onSelectDish }) => {


  return (
    <div>
      <Card inverse style={{padding:10,margin:10,cursor:'pointer'}} onClick={() =>onSelectDish(dish)}>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            opacity:0.5,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5" className='text-center text-black'>
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem
