
import {Card,CardImgOverlay,CardImg,CardTitle} from 'reactstrap'
const MenuItem = ({dish}) => {
  
  
  return (
    <div>
  <Card inverse>
    <CardImg
      alt={dish.name}
      src={dish.image}
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        {dish.name}
      </CardTitle>
    </CardImgOverlay>
  </Card>
</div>
  )
}

export default MenuItem
