import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import PriceCard from './components/pricecard/pricecard';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import ClothCard from './components/clothCard';
import testimg from './asserts/76J4405_IYI_FNT________________________________.jpeg'
function App() {

  const item = {
    itemName: 'FAVORITE STRIPE T-SHIRT',
    itemColour: 'Classic Pink Multi ',
    itemSize: 'xxs',
    inStock:'2'
};

  return (
    <div className="App">
    <ClothCard picture={testimg} itemDescription={item}/>
    </div>
  );
}

export default App;
