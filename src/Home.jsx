import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import Login from './Pages/Login';
import Edit from './Pages/Edit';


function home() {
  return (
    <div>
        <Routes>
        
          <Route path='/products' element={<ProductList/>} />
          <Route path='/p/:id' element={<ProductPage/>} />
          <Route path='/'  element={<Login/>} />
          <Route path='/edit/:id' element={<Edit/>} />

        </Routes>
        
    </div>
  );
}

export default home