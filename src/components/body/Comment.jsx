
import dateFormat from 'dateformat';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Comment = ({ comment }) => {
  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h6" className="text-primary">
          {comment.author}
        </CardTitle>
        <CardSubtitle tag="h7" className="text-muted mb-2">
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")};
        </CardSubtitle>
        <CardText className="mb-2">
          <strong>Rating:</strong> {comment.rating}
        </CardText>
        <CardText >{comment.comment}</CardText>
      </CardBody>
    </Card>
  );
};

export default Comment;
