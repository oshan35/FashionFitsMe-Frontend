import { Flex,  InputNumber, Spin} from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import './DescriptionPage.css';
import { redirect, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {blue,red,green,brown,orange,grey,yellow,pink,purple}  from '@mui/material/colors';

import React, {useEffect, useState} from "react";
import TestImage from '../../asserts/TestImage-Price-card.jpeg'
import TestImage2 from '../../asserts/test-image.jpeg'
import TestImage3 from '../../asserts/test-image.jpeg'
import { useLocation } from 'react-router-dom';
const DescriptionPage = () => {
const cartId='Cart001';
    const navigate = useNavigate(); 
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
        image_colors: {},
        category:''
    });

    const {image, productName, price, sizes, colors, image_colors,category} = itemData;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
      
        fetch(`${process.env.REACT_APP_API_BASE_URL}/products/getProductInformation?productId=${productId}`)
            .then(response => response.json())
            .then(data => {
                // Update the itemData state with the fetched data
                setItemData({
                    ...data,
                    image: `data:image/jpeg;base64,${data.image}`
                });
                setIsLoading(false); 
                

            })
            .catch(error => {
                console.error('Error fetching product information:', error);
                setIsLoading(false); 
            });
    }, [productId]); 

    useEffect(() => {
        console.log('colours',colors)
        console.log('category',category)
    }, [colors]); 


    // useEffect(() => {
    //     // Fetch product information using productId
    //     fetch(`http://localhost:5000/products/getProductInformation?productId=${productId}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Update the itemData state with the fetched data
    //             setItemData({
    //                 ...data,
    //                 image: `data:image/jpeg;base64,${data.image}` // Update the image property
    //             });
    //         })
    //         .catch(error => console.error('Error fetching product information:', error));
    // }, [productId]); // Include productId in the dependency array to refetch data when it changes
    
    
    
  
  
  const theme = createTheme({
    palette: {
      primary:
      {main: '#FFFFFF',
      dark: '#FFFFFF'
      },
      
      Red: {
        light: red[300],
        main: red[500],
        dark: red[700],
        darker: red[900],
      },
      Green: {
        main: green[500],
        dark: green[900],
      },
      Blue: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        darker: blue[900],
      },
      Brown: {
        main: brown[500],
        dark: brown[900],
      },
      Black: {
        main: '#000000',
        dark: '#000000',
      },
      Orange: {
        main: orange[500],
        dark: orange[900],
      },
      Grey: {
        main: grey[500],
        dark: grey[900], 
      },     
      White: {
        main: '#FFFFFF',
        dark: '#FFFFFF',
      },
      Navy: {
        main: blue[700],
        dark: blue[900],
      },
      Yellow: {
        main: yellow[500],
        dark: yellow[700],
      },
      Pink: {
        main: pink[500],
        dark: pink[900],
      },
      Purple: {
        main: purple[500],
        dark: purple[900],
      },
      Cream: {
        main: '#FFFDD0',
        dark: '#FFFDD0',
      }
    },
    darkMode: false,
}
  );
    const handleColorClick = (color) => {
        const newImage = `data:image/jpeg;base64,${image_colors[color]}`;
        setItemData({ ...itemData, image: newImage });
    };
    const handleAddtoCartClick = () => {
        console.log('product Id on',productId);
        navigate(`/shopping-bag?cartId=${cartId}`); 
    }

    return (
        <>  
<ThemeProvider theme={theme}>
            <Navbar/>
            {isLoading ? ( 
                <Flex className="loading-container" justify="center" align="center">
                    <Spin size="large" />
                </Flex>
            ) : (
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
                        
                        <Flex className="cloth-name">{productName}</Flex>
                        <Flex className="cloth-id"> {productId}</Flex>
                        <Flex className="colour-title"> LKR {price}</Flex>
                        
                        <p className="colour-title">Size</p>
                        <Flex wrap="wrap"  className="size-bar">
                        {category.toLowerCase() === 'pant' || category.toLowerCase() === 'pants'
? (
                            ['24', '26', '28', '30', '32', '34', '36', '38'].map((size, index) => (

                            <Button key={index}>{size}</Button>
                            ))
                        ) : (
                            ['XS','S', 'M', 'L', 'XL','XXL','XXL'].map((size, index) => (
                            <Button key={index}   className={`size-button ${!(sizes.includes(size)) ? 'not-in-list' : ''}`}>{size}</Button>
                            ))
                        )}
                        </Flex>

                        <Flex className="colour-title">Colors</Flex>
                        <Flex horizontal=" horizontal" className="options-colours">
              {colors.map((colour, index) => (
                <Flex  key={index} className="color-option" onClick={() => handleColorClick(colour)}>
                  <Button variant="contained" color={colour}
                    className="color-preview-button" 
                    // style={{
                    //   backgroundColor: theme.palette[colour], // Use theme colors for button background
                    //    color: colour,
                    //   borderBlockColor: theme.palette[colour], // Use theme colors for button border
                    // }}
                  />
                </Flex>
              ))}
            </Flex>
         
                        <Flex horizontal='vertical' justify="left" className="quantity-container">
                            <Flex className="colour-title"> Quantity</Flex>
                            <InputNumber min={1} max={10} defaultValue={3} className="input-filed" />

                        </Flex>

                        <Flex vertical="vertical" className="buy-options" justify="space-around" align="center">
                            <Button type="primary" className="option-btn" onClick={() => handleAddtoCartClick()}>Add To Cart</Button>
                            <Button type="primary" className="option-btn">Check Out</Button>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            )}  
            </ThemeProvider>           
        </>
    );
}

export default DescriptionPage;