import { Component } from "react";
import { Form,Button,Input } from "reactstrap";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addComment:(dishId,rating,author,comment) => dispatch({
      type:"ADD_COMMENT",
      payload:{
        dishId:dishId,
        author:author,
        rating:rating,
        comment:comment,
      }
    }),
    //Now we can pass Other dispatch  function as a object after that 
    // so thats how it is now organized  way of dispatching function
  }
}
class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      author:"",
      rating:"",
      comment:""
    }
  }
  handleInputChange=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

  handleSubmit= (e) =>{

    //here we can see that the addcomment is in props 
    this.props.addComment(this.props.dishId,this.state.rating,this.state.author,this.state.comment);
    this.setState({
        author:"",
        rating:"",
        comment:""
      
    });
    e.preventDefault();

  }

  render(){
    
    
    return(
      <div> 
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
          <Input type="text" name="author" value={this.state.author} placeholder="Your name" onChange={(e)=>this.handleInputChange(e)} required />
          <br />
          <Input type="select" name="rating" value={this.state.ratings} onChange={(e)=>this.handleInputChange(e)}>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </Input>
          <br />
          <Input type="textarea" name='comment' value={this.state.comment} placeholder="Your Comment" onChange={(e)=>this.handleInputChange(e)} required></Input>
          <br />
          <Button type="submit"> Submit Comment</Button>
        </Form>

      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(CommentForm);