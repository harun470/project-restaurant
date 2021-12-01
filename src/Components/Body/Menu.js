import React, { Component } from 'react'
import DISHES from '../../Data/Dishes.js'
import MenuItem from './MenuItem.js'
import DishDetails from './DishDetails.js'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes: DISHES ,
             selectedDish :null
        }
    }

    onDishSelect=(dish)=>{
        this.setState({
            selectedDish :dish
        })
    }
    
    render() {
        const menu= this.state.dishes.map(item=>{
            return(
                <MenuItem dish={item} key={item.id} dishSelect={()=>this.onDishSelect(item)} />
            )
        })

    
        let dishDetaile=null;
        if (this.state.selectedDish!=null){
            dishDetaile= <DishDetails dish={this.state.selectedDish} />
        }
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            {menu}
                        </div>
                        <div className='col-6'>
                            {dishDetaile}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
