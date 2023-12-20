import {Flex} from 'antd';
import React from 'react';
import './HomePage.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';

import image1 from '../../asserts/image 1.png'
import image2 from '../../asserts/image 2.png'
import image3 from '../../asserts/image 3.png'
import image4 from '../../asserts/image 4.png'
import image5 from '../../asserts/image 5.png'
import image6 from '../../asserts/image 6.png'
import image7 from '../../asserts/image7.png'
import image8 from '../../asserts/image8.png'
import image9 from '../../asserts/image9.png'
import image10 from '../../asserts/image10.png'

const HomePage = () => {
    return (

    <>
    <>
        <Flex vertical="vertical" className="grid-container">
            <Flex  className="nav-container">
            <Flex  className="nav-container">

                <Navbar className="nav-item"/>
                </Flex>
                <Flex horizontal="horizontal" className="grid-item1">
                <Navbar className="nav-item"/>
                </Flex>
                <Flex horizontal="horizontal" className="grid-item1">
            <Flex  className="image1"> </Flex>
            <Flex  className="image2"> </Flex>
         
         
            </Flex>
            <Flex horizontal="horizontal" className="grid-item2">
            <Flex horizontal="horizontal" className="grid-item">
            <Flex  className="image3"> </Flex>
            
            </Flex>
            <Flex horizontal="horizontal" className="grid-item">
            <Flex  className="image4"> </Flex>
            <Flex  className="image5"> </Flex>
            </Flex>
            <Flex vertical="vertical " className="grid-item-brands">
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