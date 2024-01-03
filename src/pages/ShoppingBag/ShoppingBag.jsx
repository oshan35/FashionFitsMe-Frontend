import {Flex} from 'antd';
import React from 'react';
import './ShoppingBag.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import ClothCard from '../../components/clothCard/clothCard';
import PriceCard from '../../components/pricecard/pricecard'
import testimg1 from '../../asserts/76J4405_IYI_FNT________________________________.jpeg'
import testimg2 from '../../asserts/TOMMY hIGLFIGER1.jpeg'
import testimg3 from '../../asserts/TOMMY HIGLFIGER2.jpeg'
import testimg4 from '../../asserts/TOMMY HIGLFIGER3.jpeg'
import OrderSummary from '../../components/orderSummary/OrderSummary';
const ShoppingBag = () => {
    const item = {
        itemName: 'FAVORITE STRIPE T-SHIRT',
        itemColour: 'Classic Pink Multi ',
        itemSize: 'xxs',
        inStock:'2'
    };
    const orderInfo = {
        
        subTotal: 'Rs.3500',
        shipping: 'Rs.200',
        
    };
    return (

        
    <>
        <Flex vertical="vertical" className="bag-container">
            <Flex  className="bag-nav-container{">

                <Navbar className="nav-item"/>
            </Flex>
            <Flex horizontal="horizontal" className="bag-item">
                 <h1>SHOPPING BAG </h1>
                 <p className="paragraph">(2 items)</p>

            </Flex>
            
            <Flex horizontal="horizontal" className="bill-item">
                <Flex vertical="vertical" className="shopping-card">
                    <ClothCard picture={testimg1} itemDescription={item}/>
                    <ClothCard picture={testimg1} itemDescription={item}/>
                
                </Flex>
                <Flex  className="bill"> </Flex>
            <OrderSummary subTotal={"5000"} orderInformation={orderInfo}/>
            </Flex>
            <h1 className='header'> YOU MAY ALSO LIKE</h1>
            <Flex horizontal="horizontal" className="card-item">
               <PriceCard picture={testimg1} itemName="" itemPrice=""/>
               <PriceCard picture={testimg2} itemName="" itemPrice=""/>
               <PriceCard picture={testimg3} itemName="" itemPrice=""/>
               <PriceCard picture={testimg4} itemName="" itemPrice=""/>

            </Flex>
           
            
            <Footer/>
        </Flex>
        </>
    );
   
};
export default ShoppingBag