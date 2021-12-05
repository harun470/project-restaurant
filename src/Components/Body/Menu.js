import React, { Component } from 'react'
import DISHES from '../../Data/Dishes.js'
import MenuItem from './MenuItem.js'
import DishDetails from './DishDetails.js'
import { Button, CardColumns, Modal, ModalBody,ModalFooter } from 'reactstrap'
import Comments from '../../Data/Comments'


export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes: DISHES ,
             comments :Comments,
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
    
    render() {
        document.title= 'Menu'
        const menu= this.state.dishes.map(item=>{
            return(
                <MenuItem dish={item} key={item.id} dishSelect={()=>this.onDishSelect(item)} />
            )
        })

    
        let dishDetaile=null;
        if (this.state.selectedDish!=null){
            const comments= this.state.comments.filter(comment=>{
                return comment.dishId===this.state.selectedDish.id
            })
            dishDetaile= <DishDetails comments={comments} dish={this.state.selectedDish} />
        }
        return (
            
           
                <div className='container'>
                    <div className='row'>

                      <CardColumns>
                          {menu}
                      </CardColumns> 

                      <Modal isOpen={this.state.modalOPen} onClick={this.toggleModal}>
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
