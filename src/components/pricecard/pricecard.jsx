import React from 'react';
import {Flex, Button} from 'antd';
import './pricecard.css'
import { useNavigate } from 'react-router-dom';

const PriceCard = ({itemData}) => {
    const { productId,picture, itemName, itemPrice } = itemData;
    

    const navigate = useNavigate(); 

    const handleClick = () => {
        console.log('product Id on',productId);
        navigate(`/description?productId=${productId}`); 
    }
    return (
        <>
            <Flex vertical='vertical' className='price-container' onClick={handleClick}>
                <Flex className='pictuer' justify='center'>
                    {picture && <img src={picture} alt="Price Card"/>}
                </Flex>
                <Flex vertical='vertical' justify='center' className='price-name'>
                    <p className='product-name-container' >{itemName}</p>
                    <p className='product-price-container'>   LKR {itemPrice}</p>
                </Flex>
            </Flex>
        </>
    )
}


export default PriceCard