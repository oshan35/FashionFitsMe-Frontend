import { Flex, Button, InputNumber } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './DescriptionPage.css';
import React, {useEffect, useState} from "react";
import TestImage from '../../asserts/TestImage-Price-card.jpeg'


const DescriptionPage = () => {
    
    const [itemData, setItemData] = useState({
        image: TestImage,
        name:'Example Item Name',
        price:'100',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Blue', 'Red']
    });

    const {image, name, price, sizes, colors} = itemData;

    useEffect(() => {
        fetch('your-backend-endpoint')
          .then(response => response.json())
          .then(data => setItemData({
            ...itemData, 
            image: TestImage, 
            name: 'Example Item Name',
            price: '100',
            sizes: ['S', 'M', 'L'],
            colors: ['Green', 'Blue', 'Red']
          })); 
    }, []);

    return (
        <>  

            <Navbar/>
            <Flex vertical="vertical" className="main-container">
                <Flex horizontal="horizontal" justify="space-around" className="description-container">
                    <Flex horizontal="horizontal" className="image-container" justify="center" align="center">
                        <Flex className="main-image">
                            <img src={image} className="content-image"/>
                        </Flex>
                        <Flex className="options">
                            

                        </Flex>
                        
                    </Flex>
                    <Flex vertical="vertical" className="details-container" align="left">
                        
                        <h1 className="cloth-name">{name}</h1>
                        <p className="price-tag"> Rs {price}</p>
                        <p className="size-tag">size</p>
                        <Flex wrap="wrap" gap="small" className="size-bar">
                        {sizes && sizes.map((size, index) => (
                                <Button key={index}>{size}</Button>
                            ))}
                        </Flex>
                        <p>Colors</p>
                        <Flex wrap="wrap" gap="small" className="color-container">
                            
                        {colors && colors.map((color, index) => (
                                <Button key={index} style={{backgroundColor: color, color:'white', borderBlockColor:color}} className="color-palet"></Button>
                            ))}

                        </Flex>
                        <Flex horizontal='vertical' justify="left" className="quantity-container">
                            <p> Quantity</p>
                            <InputNumber min={1} max={10} defaultValue={3} className="input-filed" />

                        </Flex>

                        <Flex vertical="vertical" className="buy-options" justify="space-around" align="center">
                            <Button type="primary" className="option-btn">Add To Cart</Button>
                            <Button type="primary" className="option-btn">Check Out</Button>
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