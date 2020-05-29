import React from 'react';
import './App.css';
import Listing from './Listing/Listing'


const items = require('./etsy.json');

function App() {
  return (
    <Listing items={items}/>
  );
}

export default App;
