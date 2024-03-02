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
import Button from '../../components/ShiningButton/ShiningButton'
const HomePage = () => {
    return (

    <>
        <Flex vertical="vertical" className="grid-container">
            <Flex  className="nav-container">
                <Navbar className="nav-item"/>
            </Flex>
            <Flex horizontal="horizontal" className="grid-item1">
                <Flex  className="image1"> </Flex>
                <Flex justify='center' align='center' className="image2"> 
                   <Button>Try Our Virtual Fit On With FashionFits Me  </Button>
                </Flex>
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
                    <Flex  className="brand-icon" id="brand10">
                        <img src={image10} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand8">
                        <img src={image8} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand7">
                        <img src={image7} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand2"> 
                        <img src={image2} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand3">
                        <img src={image3} className="brand-image"/>
                    </Flex>
                </Flex>
                <Flex horizontal="horizontal" className="brands-bottom">
                    <Flex  className="brand-icon" id="brand4">
                        <img src={image4} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand5">
                        <img src={image5} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand9">
                        <img src={image9} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand1">
                        <img src={image1} className="brand-image"/>
                    </Flex>
                    <Flex  className="brand-icon" id="brand6">
                        <img src={image6} className="brand-image"/>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="grid-item"></Flex>
            <Footer/>
        </Flex>
        </>
    );
   
};
export default HomePage