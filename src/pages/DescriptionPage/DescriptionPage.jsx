import { Flex, Button, InputNumber } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './DescriptionPage.css';
import React, {useEffect, useState} from "react";
import TestImage from '../../asserts/TestImage-Price-card.jpeg'
import TestImage2 from '../../asserts/test-image.jpeg'
import TestImage3 from '../../asserts/test-image.jpeg'
import { useLocation } from 'react-router-dom';
const DescriptionPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('productId');
    console.log('productId on description page', productId);
    const [itemData, setItemData] = useState({
        image: '',
        productName:'',
        price:'',
        sizes: [],
        colors: [],
        image_colors: {}
    });

    const {image, productName, price, sizes, colors, image_colors} = itemData;
    

    useEffect(() => {
        // Fetch product information using productId
        fetch(`http://localhost:5000/products/getProductInformation?productId=${productId}`)
            .then(response => response.json())
            .then(data => {
                // Update the itemData state with the fetched data
                setItemData({
                    ...data,
                    image: `data:image/jpeg;base64,${data.image}` // Update the image property
                });
            })
            .catch(error => console.error('Error fetching product information:', error));
    }, [productId]); // Include productId in the dependency array to refetch data when it changes
    

    const handleColorClick = (color) => {
        const newImage = `data:image/jpeg;base64,${image_colors[color]}`;
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
                                                backgroundImage: `url(data:image/jpeg;base64,${image_colors[color]})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                            
                                        />
                                    </Flex>
                                ))}
                        </Flex>
                        
                    </Flex>
                    <Flex vertical="vertical" className="details-container" align="left">
                        
                        <h1 className="cloth-name">{productName}</h1>
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
                                <Button key={index} style={{backgroundColor: color, color:'white', borderBlockColor:color}}  onClick={() => handleColorClick(color)} className="color-palet"></Button>
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