import React, { Component } from 'react'
import MenuItem from './MenuItem.js'
import DishDetails from './DishDetails.js'
import { Button, CardColumns, Modal, ModalBody,ModalFooter } from 'reactstrap'
import {connect} from 'react-redux'
import { addComment, fetchDishes } from '../../redux/actionCreator.js'
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
        fetchDishes:()=>dispatch(fetchDishes())
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
    }
    
    render() {
        document.title= 'Menu'
        if(this.props.dishes.isLoading){
            return(
                <Bodyloading />
            )
            
        }else{
            const menu= this.props.dishes.dishes.map(item=>{
                return(
                    <MenuItem dish={item} key={item.id} dishSelect={()=>this.onDishSelect(item)} />
                )
            })
    
        
            let dishDetaile=null;
            if (this.state.selectedDish!=null){
                const comments= this.props.comments.filter(comment=>{
                    return comment.dishId===this.state.selectedDish.id
                })
                dishDetaile= <DishDetails comments={comments} addComment={this.props.addComment} dish={this.state.selectedDish} />
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