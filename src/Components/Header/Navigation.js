import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'

export default function Navigation() {
    return (
        <div>
            <Navbar dark color='success'>
                <div className='container'>
                    <NavbarBrand href='/'>
                        Restaurant
                    </NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}
