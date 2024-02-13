import {Flex} from 'antd';
import React from 'react';
import './HomePage.css';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';



const HomePage = () => {
    return (

    <>
        <Flex vertical="vertical" className="grid-container">
            <Flex  className="nav-container">

                <Navbar className="nav-item"/>
                </Flex>
                <Flex horizontal="horizontal" className="grid-item1">
            <Flex  className="image1"> </Flex>
            <Flex  className="image2"> </Flex>
         
            </Flex>
            <Flex horizontal="horizontal" className="grid-item">
            <Flex  className="image3"> </Flex>
            
            </Flex>
            <Flex horizontal="horizontal" className="grid-item">
            <Flex  className="image4"> </Flex>
            <Flex  className="image5"> </Flex>
            </Flex>
            <Flex vertical="vertical " className="grid-item-brands">

                <Flex horizontal="horizontal" className="brands-top">
                <Flex  className="brand10"> </Flex>
                   
                    <Flex  className="brand8"> </Flex>
                    <Flex  className="brand7"> </Flex>
                    <Flex  className="brand2"> </Flex>
                    <Flex  className="brand3"> </Flex>
                    
            
                </Flex>
                <Flex horizontal="horizontal" className="brands-bottom">
                    <Flex  className="brand4"> </Flex>
                    <Flex  className="brand5"> </Flex>
                    <Flex  className="brand9"> </Flex>
                    <Flex  className="brand1"> </Flex>
                    <Flex  className="brand6"> </Flex>
                   
                   
                 
                   
            

                </Flex>
            </Flex>
            <Flex className="grid-item"></Flex>
            <Footer/>
        </Flex>
        </>
    );
   
};
export default HomePage