import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap'



 class BodyCommentForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             author:'',
             rating:'',
             comment:''
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleInputChange=(event)=>{
        const name= event.target.name
        const value=event.target.value
        this.setState({
            [name] :value
        })
    }

    handleSubmit=(event)=>{
        
        this.props.addComment(this.props.dishId,this.state.author,this.state.rating,this.state.comment)
        /*this.props.dispatch({
            type : "ADD_COMMENT",
            payload:{
                dishId:this.props.dishId,
                author: this.state.author,
                rating: this.state.rating,
                comment:this.state.comment
            }
        })*/
        this.setState({
            
                author:'',
                rating:'',
                comment:''
           
        })
        event.preventDefault()
    }
    
    render() {
        return (
            <div>
               <Form onSubmit={this.handleSubmit}>
                   <Input type='text' name='author' placeholder='your name' value={this.state.author} onChange={this.handleInputChange} required />
                   <br/>
                   <Input type='select' name='rating' value={this.state.rating} onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                   </Input>
                   <br/>
                   <br/>
                   <Input type='textarea' name='comment' value={this.state.comment} onChange={this.handleInputChange} required />
                   <br/>
                   <Button type='submit'>Submit</Button>
               </Form> 
            </div>
        )
    }
}

export default BodyCommentForm