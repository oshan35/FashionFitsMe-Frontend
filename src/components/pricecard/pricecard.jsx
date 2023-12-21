import React from 'react';
import {Flex, Button} from 'antd';
import './pricecard.css'

const PriceCard = () => {
    return (
        <>
            <Flex vertical='vertical' className='price-container'>
                <Flex className='pictuer'>
                    <p>Hello</p>
                </Flex>
                <Flex className='price-name'>
                    <p>
                        "Test"
                    </p>
                </Flex>
            </Flex>
        </>
    )
}

export default PriceCard