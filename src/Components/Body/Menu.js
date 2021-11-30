import React, { Component } from 'react'
import DISHES from '../../Data/Dishes.js'
import MenuItem from './MenuItem.js'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes: DISHES
        }
    }
    
    render() {
        const menu= this.state.dishes.map(item=>{
            return(
                <MenuItem dish={item} key={item.id} />
            )
        })
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            {menu}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
