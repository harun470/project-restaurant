import React, { Component } from 'react'
import Bodyloading from './Bodyloading'



 class Home extends Component {
    render() {
        document.title= 'Burger King'
        return (
            <div>
                <Bodyloading />
            </div>
        )
    }
}

export default Home;
