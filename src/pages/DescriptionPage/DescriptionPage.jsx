import React from "react";
import { Flex, Button, InputNumber } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './DescriptionPage.css';

const DescriptionPage = ({image, name,price}) => {
    return (
        <>  

            <Navbar/>
            <Flex vertical="vertical" className="main-container">
                <Flex horizontal="horizontal" justify="center" className="description-container">
                    <Flex className="image-container" justify="center" align="center">
                        <img src={image} className="content-image"/>
                    </Flex>
                    <Flex vertical="vertical" className="details-container" align="left">
                        <h1 className="cloth-name">{name}</h1>
                        <p className="price-tag"> {price}</p>
                        <p className="size-tag">size</p>
                        <Flex horizontal="vertical" align="center" justify="space-around" className="size-bar">
                            <Button >Primary</Button>
                            <Button >Primary</Button>
                            <Button >Primary</Button>
                            <Button >Primary</Button>
                        </Flex>
                        <p> Quantity</p>
                        <InputNumber min={1} max={10} defaultValue={3} />

                        <Flex vertical="vertical" className="buy-options" justify="space-around" align="center">
                            <Button type="primary" className="option-btn">Primary</Button>
                            <Button type="primary" className="option-btn">Primary</Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    Test
                </Flex>
            </Flex>              
  
        </>
    );
}

export default DescriptionPage;