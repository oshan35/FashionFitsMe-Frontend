import {Flex} from 'antd';
import React, { useState, useEffect } from 'react';
import './ShoppingBag.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import ClothCard from '../../components/clothCard/clothCard';
import PriceCard from '../../components/pricecard/pricecard'
import OrderSummary from '../../components/orderSummary/OrderSummary';
const ShoppingBag = () => {
    const [clothCards, setClothCards] = useState([]);
    

    // Function to fetch cloth card data from the API
    const fetchClothCardData = async () => {
        try {
            // Perform API request to fetch cloth card data
            // Replace 'apiEndpoint' with your actual API endpoint
            const response = await fetch('apiEndpoint');
            const data = await response.json();
            
            // Update cloth card state with fetched data
            setClothCards(data);
        } catch (error) {
            console.error('Error fetching cloth card data:', error);
        }
    };

    const [priceCardsData, setPriceCardsData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('YOUR_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            setPriceCardsData(data); // Assuming data is an array of objects with picture, itemName, and itemPrice properties
        })
        .catch(error => {
            console.error('Error fetching price card data:', error);
        });
    }, []);

    const [orderInfo, setOrderInfo] = useState({ subTotal: '', shipping: '' });

    useEffect(() => {
        // Fetch data from API
        fetch('YOUR_ORDER_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            setOrderInfo(data); // Assuming data is an object with subTotal and shipping properties
        })
        .catch(error => {
            console.error('Error fetching order info:', error);
        });
    }, []);


    useEffect(() => {
        // Fetch cloth card data when component mounts
        fetchClothCardData();
    }, []); // Empty dependency array ensures this effect runs only once
    return (

        
    <>
        <Flex vertical="vertical" className="bag-container">
            <Flex  className="bag-nav-container{">

                <Navbar className="nav-item"/>
            </Flex>
            <Flex horizontal="horizontal" className="bag-item">
                 <h1>SHOPPING BAG </h1>
                 <p className="paragraph">(2 items)</p>

            </Flex>
            
            <Flex horizontal="horizontal" className="bill-item">
                <Flex vertical="vertical" className="shopping-card">
                    {clothCards.map((item, index) => (
                            <ClothCard key={index} picture={item.picture} itemDescription={item} />
                    ))}

                
                </Flex>
                <div className='bill'>
                    {/* Havent passed data for ESTIMATED TOTAL */}
                    <OrderSummary subTotal={orderInfo.subTotal} shipping={orderInfo.shipping} />                     <button className="checkout-btn">GO TO CHECKOUT</button>
                </div>
            </Flex>
            <h1 className='header'> YOU MAY ALSO LIKE</h1>
            <Flex horizontal="horizontal" className="card-item">
                {priceCardsData.map((item, index) => (
                    <PriceCard
                        key={index}
                        picture={item.picture}
                        itemName={item.itemName}
                        itemPrice={item.itemPrice}
                    />
                ))}

            </Flex>
           
            
            <Footer/>
        </Flex>
        </>
    );
   
};
export default ShoppingBag