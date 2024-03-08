
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Catalogue from './pages/ClothingCataloguePage/Catalogue';
import PriceCard from './components/pricecard/pricecard';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import PriceCard from './components/pricecard/pricecard';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';

<<<<<<< HEAD
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';


=======
import TestImage from './asserts/TestImage-Price-card.jpeg'
>>>>>>> c4c49ef2b822ce7ad9d81a3a52104fe55d5acf91

function App() {
  const itemData = {
    image: TestImage, 
    name: 'Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name Example Item Name',
    price: '100',
  
  };
  return (
    <>
<<<<<<< HEAD
   <CheckoutPage/>
=======
    <DescriptionPage
      
    />
>>>>>>> c4c49ef2b822ce7ad9d81a3a52104fe55d5acf91
    </>
  );

}

export default App;
