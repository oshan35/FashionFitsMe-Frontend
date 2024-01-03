import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';

import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import PriceCard from './components/pricecard/pricecard';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';

import TestImage from './asserts/test-image.jpeg'

function App() {
  return (
    <>
    <DescriptionPage
      image={TestImage}
      name ={"HERO SEAMLESS CROP TOP - NAVY"}
      price={"LKR 3141.00"}
    />
    
    </>
  );
}

export default App;
