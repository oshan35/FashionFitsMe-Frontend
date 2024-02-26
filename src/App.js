import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Catalogue from './pages/ClothingCataloguePage/Catalogue';
import PriceCard from './components/pricecard/pricecard';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import ClothCard from './components/clothCard/ClothCard';
import testimg from './asserts/76J4405_IYI_FNT________________________________.jpeg'
import ShoppingBag from './pages/ShoppingBag/ShoppingBag';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';
function App() {

  

  return (
    <div className="App">
    {/* <HomePage/> */}
    {/* <Catalogue/> */}
   < ShoppingBag/>
   {/* <DescriptionPage/> */}
    </div>
  );

}

export default App;
