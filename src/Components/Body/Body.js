import React from 'react'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Home from './Home'
import Menu from './Menu'
import {Route, Routes} from 'react-router-dom'

export default function Body() {
    return (
        <div>
            
          <Routes>
            <Route path='/' element={<Home />} />
           
            <Route path='/menu'  element ={<Menu />} />
            
            <Route path='/about'  element={<Aboutus />} />
           
            <Route path='/contact'  element={<Contactus />} />

            

            </Routes>
            
           
            
        </div>
    )
}
