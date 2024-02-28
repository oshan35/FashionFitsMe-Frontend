import React from 'react';
import {Flex, Button} from 'antd';
import './pricecard.css'

const PriceCard = ({itemData}) => {
    const { picture, itemName, itemPrice } = itemData;
    console.log(itemName);
    return (
        <>
            <Flex vertical='vertical' className='price-container'>
                <Flex className='pictuer' justify='center'>
                    {picture && <img src={picture} alt="Price Card"/>}
                </Flex>
                <Flex vertical='vertical' justify='center' className='price-name'>
                    <p className='product-name'>{itemName}</p>
                    <p>Rs{itemPrice}</p>
                </Flex>
            </Flex>
        </>
    )
}

export default PriceCard