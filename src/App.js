
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Catalogue from './pages/ClothingCataloguePage/Catalogue';
import PriceCard from './components/pricecard/pricecard';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import PriceCard from './components/pricecard/pricecard';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';

import TestImage from './asserts/TestImage-Price-card.jpeg'

function App() {
  const itemData = {
    image: TestImage, 
    name: 'Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name',
    price: '100',
  
  };
  return (
    <>
    <DescriptionPage
      
    />
    </>
  );

}

export default App;
