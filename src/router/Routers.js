import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom' 

import Home from '../pages/Home';
import Login from '../pages/Login';
import Offer from '../pages/Offer'; 
import OfferDetails from '../pages/OfferDetails';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Offer' element={<Offer />} />
        <Route path='/Offer/:id' element={<OfferDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/offer/search' element={<SearchResultList />} />
    </Routes>
  )
}

export default Routers