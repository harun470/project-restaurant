import React, { Component } from 'react'
import MenuItem from './MenuItem.js'
import DishDetails from './DishDetails.js'
import { Alert, Button, CardColumns, Modal, ModalBody,ModalFooter } from 'reactstrap'
import {connect} from 'react-redux'
import { addComment, fetchDishes,fetchComments } from '../../redux/actionCreator.js'
import Bodyloading from './Bodyloading.js'



const mapStateToProps=(state)=>{
    return{
        dishes : state.dishes,
        comments :state.comments
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        addComment:(dishId,author,rating,comment)=>dispatch(addComment(dishId,author,rating,comment)),
        fetchDishes:()=>dispatch(fetchDishes()),
        fetchComments:()=>dispatch(fetchComments())
    }
}


 class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
             selectedDish :null,
             modalOPen :false
        }
    }

    onDishSelect=(dish)=>{
        this.setState({
            selectedDish :dish,
            modalOPen : !this.state.modalOPen
        })
    }

    toggleModal=()=>{
        this.setState({
            modalOPen : !this.state.modalOPen
        })
    }

    componentDidMount(){
        this.props.fetchDishes()
        this.props.fetchComments()
    }
    
    render() {
        document.title= 'Menu'
        if(this.props.dishes.isLoading){
            return(
                <Bodyloading />
            )
            
        }else if(this.props.dishes.errMess!=null){
            return(
            <Alert color='danger'>{this.props.dishes.errMess}</Alert>
            )
        }else{
            const menu= this.props.dishes.dishes.map(item=>{
                return(
                    <MenuItem dish={item} key={item.id} dishSelect={()=>this.onDishSelect(item)} />
                )
            })
    
        
            let dishDetaile=null;
            if (this.state.selectedDish!=null){
                const comments= this.props.comments.comments.filter(comment=>{
                    return comment.dishId===this.state.selectedDish.id
                })
                dishDetaile= <DishDetails commentsIsLoading={this.props.comments.isLoading} comments={comments} addComment={this.props.addComment} dish={this.state.selectedDish} />
            }
            return (
                
               
                    <div className='container'>
                        <div className='row'>
    
                          <CardColumns>
                              {menu}
                          </CardColumns> 
    
                          <Modal isOpen={this.state.modalOPen} >
                              <ModalBody>
                                  {dishDetaile}
                              </ModalBody>
                              
                              <ModalFooter >
                                  <Button color='primary' onClick={this.toggleModal}>
                                      close
                                  </Button>
                              </ModalFooter>
                          </Modal> 
                        
                        </div>
                    </div>
              
               
            )
        }
        }
        
}
export default connect(mapStateToProps,mapDispatchToProps) (Menu);