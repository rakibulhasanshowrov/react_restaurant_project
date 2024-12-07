import { Component } from "react";
import { Form,Button,Input } from "reactstrap";
import { connect } from "react-redux";


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
    this.props.dispatch({
      type:"ADD_COMMENT",
      payload:{
        dishId:this.props.dishId,
        author:this.state.author,
        rating:this.state.rating,
        comment:this.state.comment,
      }
    })
    this.setState({
        author:"",
        ratings:"",
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
          <option >1</option>
          <option >2</option>
          <option >3</option>
          <option >4</option>
          <option >5</option>
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

export default connect()(CommentForm);