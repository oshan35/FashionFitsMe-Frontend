import React from 'react';
import {Flex, Button} from 'antd';
import './pricecard.css'

const PriceCard = ({itemData}) => {
    const {  } = itemData;
    console.log();
    return (
        <>
            <Flex vertical='vertical' className='price-container'>
                <Flex className='pictuer' justify='center'>
                    
                </Flex>
                <Flex vertical='vertical' justify='center' className='price-name'>
                    
                </Flex>
            </Flex>
        </>
    )
}

export default PriceCard