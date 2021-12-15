import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';

function App() {
  return (
    // acts as html div tag
    <React.Fragment>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='*' element={<Default/>} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
