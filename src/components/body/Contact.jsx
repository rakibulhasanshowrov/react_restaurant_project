import  { Component } from 'react'
import {Button,Form,FormGroup,Label,Input,Col} from 'reactstrap'
export default class Contact extends Component {

  constructor(props){
    super()
    this.state={
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contactType:'Tel.',
      message:'',

    }
    this.handleInputChange= this.handleInputChange.bind(this);
  }

  handleInputChange= (e) =>{
    const target= e.target.name
    const value=e.target.type =='checkbox' ? e.target.checked:e.target.value
    this.setState({
      [target]:value,
    })
  }


  handleSubmit= e =>{
    console.log(this.state);
    e.preventDefault()

  }

  render() {
    return (
      <div className='container' >
        <div className='row row-content' style={{paddingLeft:'20px',textAlign:"left"}}>
          <div className='col-12'>
            <h3>Send us your Feedback</h3>

          </div>
          <div className='col-12 col-md-7'>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor='firstname' md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                     <Input type='text' name='firstname' placeholder='First Name' value={this.state.firstname} onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup> 

                <FormGroup row>
                  <Label htmlFor='firstname' md={2}>
                    Last Name
                  </Label>
                  <Col md={10}>
                     <Input type='text' name='lastname' placeholder='Last Name' value={this.state.lastname} onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='telnum' md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                     <Input type='text' name='telnum' placeholder='Tel. Number' value={this.state.telnum} onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor='email' md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                     <Input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>

                
                <FormGroup row>
                  <Col md={{size: 6,offset:2}}>
                    <FormGroup check>
                      <Label check>
                        <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange}  />
                        <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 6,offset:2}}>
                    <Input type='select' name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                    <option value="">Tel.</option>
                    <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='message' md={2}>Your Feedback</Label>
                  <Col md={10}>
                  <Input type='textarea' name="message" value={this.state.message} rows='12' onChange={this.handleInputChange}>
                  </Input>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={{size: 10,offset:2}} >
                  <Button type='submit' color='primary'>Send Feedback</Button>
                  </Col>
                </FormGroup>

            </Form>  

          </div>
        </div>
      </div>
    )
  }
}
