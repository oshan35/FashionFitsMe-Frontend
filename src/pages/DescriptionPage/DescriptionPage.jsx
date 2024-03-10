import { Flex, Button, InputNumber } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './DescriptionPage.css';
import React, {useEffect, useState} from "react";
import TestImage from '../../asserts/TestImage-Price-card.jpeg'
import TestImage2 from '../../asserts/test-image.jpeg'
import TestImage3 from '../../asserts/test-image.jpeg'


const DescriptionPage = () => {
    
    const [itemData, setItemData] = useState({
        image: TestImage,
        name:'Example Item NameExample Item Name Example Item Name Example Item Name Example Item Name Example Item Name',
        price:'100',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Blue', 'Red'],
        image_colors: {'Green':TestImage, 'Blue':TestImage2, 'Red': TestImage3}
    });

    const {image, name, price, sizes, colors, image_colors} = itemData;
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonClick = (option) => {
        setSelectedOption(option); 
    };

    useEffect(() => {
        fetch('/product-description')
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

    const handleColorClick = (color) => {
        const newImage = image_colors[color];
        setItemData({ ...itemData, image: newImage });
    };

    return (
        <>  

            <Navbar/>
            <Flex vertical="vertical" className="main-container">
                <Flex wrap="wrap" gap="small" className="description-container">
                    <Flex horizontal="horizontal" className="image-container" justify="center" align="center">
                        <Flex className="main-image">
                            <img src={image} className="content-image"/>
                        </Flex>
                        <Flex  vertical="vertical"  className="options">
                            {colors.map((color, index) => (
                                    <Flex key={index} className="color-option" onClick={() => handleColorClick(color)}>
                                        <Button
                                            className="color-preview"
                                            style={{
                                                backgroundImage: `url(${image_colors[color]})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />
                                    </Flex>
                                ))}
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
                                <Button key={index} style={{backgroundColor: color, color:'white', borderBlockColor:color}} className="color-palet" ></Button>
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

            </Flex>              
        </>
    );
}

export default DescriptionPage;