/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { Col, FormGroup, Label,Button, Alert } from 'reactstrap'
import { Form,Control,Errors,actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../redux/baseUrl';

const mapDispatchToProps=dispatch=>{
    return{
        resetFeedbackForm:()=>dispatch(actions.reset('feedback'))
    }
}

const required=(val)=>val&&val.length
const isNumber=(val)=> !isNaN(Number(val))
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contactus extends Component {

    state={
        alertShow:false,
        alertType:null,
        alertText:null
    }

    handleSubmit=(values)=>{
       axios.post(baseUrl+"feedback",values)
       .then(response=>response.status)
       .then(status=>{
           if (status===201){
                this.setState({
                    alertShow:true,
                    alertText:"submitted successfully",
                    alertType:'success'
                })
                setTimeout(()=>{
                    this.setState({
                        alertShow:false
                    })
                },2000)
           }
       })
       .catch(error=>{
           this.setState({
               alertShow:true,
               alertText:error.message,
               alertType:'danger'
           })
           setTimeout(()=>{
            this.setState({
                alertShow:false
            })
        },5000)
       })
        this.props.resetFeedbackForm()
        
    }
    render() {
        document.title= 'Contactus'
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                    </div>
                    <div className="col-12  col-md-7">
                        <Form model='feedback' onSubmit={(values)=>this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model= ".firstname" name="firstname" placeholder="First Name" 
                                    className='form-control'
                                     validators={{
                                         required
                                         }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".lastname"  placeholder="Last Name" className='form-control'
                                     validators={{
                                        required
                                        }} />

                                        <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum"  placeholder="Tel. number" 
                                    className='form-control'
                                    validators={{
                                        required,
                                        isNumber
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required, ",
                                            isNumber: "Invalid Number!",

                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email"  placeholder="Email" 
                                    className='form-control'
                                    validators={{
                                        required,
                                        validEmail
                                        }}/>

                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required, ",
                                            validEmail: "Invalid Email!",

                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox model=".agree"  />
                                             <strong>May we contact you!</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" className='form-control' >
                                        <option>Tel.</option>
                                        <option>Email.</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.text model=".message"  rows="12"
                                     className='form-control' 
                                     validators={{
                                        required
                                        }}/>

                                        <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                        }}
                                        />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                            
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(Contactus);


