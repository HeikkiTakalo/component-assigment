import React, { useState } from 'react';
import Header from './header';
import Product from './product'
import './App.css';

function App() {

  return (
    <div className="app-container">
      <Header title="Welcome to product page!" />
      <Product />
    </div>
  );
};


export default App;