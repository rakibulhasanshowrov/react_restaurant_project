import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <Card
      inverse
      style={{
        cursor: 'pointer',
        marginBottom: '1rem', // Proper spacing between the cards
      }}
      onClick={() => onSelectDish(dish)}
    >
      <CardImg
        alt={dish.name}
        src={dish.image}
        style={{
          opacity: 0.7, // Slight opacity for the image overlay effect
          objectFit: 'cover', // Ensure the image covers the entire area
          height: '200px', // Fixed height for better card uniformity
        }}
        width="100%"
      />
      <CardImgOverlay>
        <CardTitle tag="h5" className="text-center text-white">
          {dish.name}
        </CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default MenuItem;

