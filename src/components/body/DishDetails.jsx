
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments'
const DishDetails = ({dish}) => {
  return (
    <div>
      <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={dish.image}
      style={{
        height: '100%',
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {dish.name}
      </CardTitle>
      <CardText>
        {dish.description}
        
      </CardText>
      <CardText >
        {dish.price}/-
      </CardText>
      <hr />
      <LoadComments comments={dish.comments} key={dish.id} />
    </CardBody>
  </Card>
    </div>
  )
}

export default DishDetails
