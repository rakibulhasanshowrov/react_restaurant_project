import dateFormat from 'dateformat';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Comment = ({ comment }) => {
  return (
    <Card className="my-4 shadow-sm rounded border-light">
      <CardBody>
        {/* Author's name */}
        <CardTitle tag="h5" className="text-primary font-weight-bold mb-2">
          {comment.author}
        </CardTitle>

        {/* Date and Time */}
        <CardSubtitle tag="h6" className="text-muted mb-3">
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
        </CardSubtitle>

        {/* Rating */}
        <CardText className="mb-3">
          <strong className="text-dark">Rating:</strong> {comment.rating} / 5
        </CardText>

        {/* Comment Text */}
        <CardText className="text-secondary">
          {comment.comment}
        </CardText>

      </CardBody>
    </Card>
  );
};

export default Comment;

