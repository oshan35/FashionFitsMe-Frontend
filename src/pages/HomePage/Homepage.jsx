import {Flex} from 'antd';
import React from 'react';
import './HomePage.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import img1 from '../../asserts/imag1.png'
import img3 from '../../asserts/img3.png'
import img4 from '../../asserts/img4.png'
import img5 from '../../asserts/img5.png'
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
        <Flex vertical="vertical" className="grid-container">

            <Navbar/>
            <Flex horizontal="horizontal" className="grid-item">
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
            <Flex vertical="vertical ">

            <Flex horizontal="horizontal" className="brands">
            <img src={image1}  className='brand-item'/> 
            <img src={image2}  className='brand-item'/> 
            <img src={image3}  className='brand-item'/> 
            <img src={image4}  className='brand-item'/> 
            <img src={image5}  className='brand-item'/> 
            </Flex>
            <Flex horizontal="horizontal" className="brands">
            <img src={image6}  className='brand-item'/> 
            <img src={image7}  className='brand-item'/> 
            <img src={image8}  className='brand-item'/> 
            <img src={image9}  className='brand-item'/> 
            <img src={image10}  className='brand-item'/> 
            </Flex>
            </Flex>
            <Flex className="grid-item"></Flex>
            <Footer/>
        </Flex>
        </>
    );
   
};
export default HomePage