
import Comment from './Comment';
const LoadComments = ({comments}) => {
  const all_comments= comments.map((comment)=>{
      return <Comment comment={comment} key={comment.id} />
  })
  return (
    <div>
      Comments:
      {all_comments}
    </div>
  )
}

export default LoadComments
