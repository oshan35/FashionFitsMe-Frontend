
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag'
import SignUpPage from './pages/SignupPage/SignupPage';
import Catalogue from './pages/ClothingCataloguePage/Catalogue';
import BillingDetails from './pages/BillingDetailsPage/BillingDetails';
import { FilterProvider } from './Contexts/FilterContext';

function App() {

  return (
    <>
    <FilterProvider>
    <Router>
     
     <div>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/catalogue" element={<Catalogue />} />
         <Route path="/description" element={<DescriptionPage />} />
         <Route path="/shopping-bag" element={<ShoppingBag />} />
         <Route path="/sign-up" element={<SignUpPage />} />
         <Route path="/billing-details" element={<BillingDetails />} />
       </Routes> 
     </div>    
     </Router>   
    </FilterProvider>
   
     
  
    </>
  );

};

export default App;
