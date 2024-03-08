import {Flex} from 'antd';
import React from 'react';
import './OrderSummary.css';



const OrderSummary = ({orderInformation}) => {
    
   
    return (

        
    <>
        <Flex vertical="vertical" className="summary-container">
            <Flex><h2>ORDER SUMMARY</h2></Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Subtotal</p>
                
            </Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Discount</p>
                
            </Flex>
            <Flex horizontal="horizontal" className="summary-item">
                <p>Tax</p>
                <p>Calculated in Checkout</p>
            </Flex>
            <Flex className="horizontal-line" > <hr /></Flex>
            
            <Flex horizontal="horizontal" className="summary-item">
                 <p>Estimated Total</p>
                 
            </Flex>
           






        </Flex>
        </>
    );
   
};
export default OrderSummary