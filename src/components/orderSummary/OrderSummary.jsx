import {Flex} from 'antd';
import React from 'react';
import './OrderSummary.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import ClothCard from '../clothCard/ClothCard';
import PriceCard from '../../components/pricecard/pricecard'
import testimg from '../../asserts/76J4405_IYI_FNT________________________________.jpeg'

const OrderSummary = ({orderInformation}) => {
    
   
    return (

        
    <>
        <Flex vertical="vertical" className="summary-container">
            <Flex><h2>ORDER SUMMARY</h2></Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Subtotal</p>
                <p>{orderInformation.subTotal}</p>
            </Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Discount</p>
                <p>{orderInformation.discount}</p>
            </Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Tax</p>
                <p>Calculated in Checkout</p>
            </Flex>
            <Flex className="horizontal-line" > <hr /></Flex>
            
            <Flex horizontal="horizontal" className="summary-item">
                 <p>Estimated Total</p>
                 <p>{orderInformation.estimatedTotal}</p>
            </Flex>
           






        </Flex>
        </>
    );
   
};
export default OrderSummary