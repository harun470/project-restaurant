import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {Collapse, Navbar,NavbarBrand, NavItem,Nav,NavbarToggler} from 'reactstrap'


 class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen :false 
        }
    }

    navToggle=()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    

     render(){

        return (
            <div>
                <Navbar dark color='success' expand='sm'>
                    <div className='container'>
                       
                        <NavbarBrand href='/'>
                            Restaurant
                        </NavbarBrand>

                        <NavbarToggler onClick={this.navToggle}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Link to='/' className='nav-link active'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/menu' className='nav-link '>Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' className='nav-link '>Aboutus</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact' className='nav-link '>Contactus</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </div>
        )
     }
    
}

export default Navigation;