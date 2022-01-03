import React, { Component } from 'react'




 class Home extends Component {
     componentDidMount(){
         console.log(this.props.history)
     }
    render() {
        document.title= 'Burger King'
        return (
            <div>
                
            </div>
        )
    }
}

export default Home;
