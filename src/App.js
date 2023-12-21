import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import PriceCard from './components/pricecard/pricecard';

import TestImage from './asserts/test-image.jpeg'

function App() {
  return (
    <>
    <PriceCard
      picture={TestImage}
      itemName={"Test"}
      itemPrice={2000}
    />
    </>
  );
}

export default App;
