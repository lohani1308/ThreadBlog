import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddBlog from '../pages/AddBlog';
import Contact from '../pages/Contact';

const AppRoute=()=>(
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addblog' element={< AddBlog />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
)

export default AppRoute