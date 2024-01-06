import React from 'react';
import {Flex, Button} from 'antd';
import './clothCard.css'
import { Select } from 'antd';
const ClothCard = ({ picture, itemDescription }) => {

    const { Option } = Select;
    
    return (
        <>
            <Flex horizontal='horizontal' className='main-container'>
                <Flex className='picture' >
                    {picture && <img src={picture} alt="Price Card"/>}
                </Flex>
                <Flex vertical='vertical' justify='center' className='no-picture'>
                    <Flex vertical='vertical' justify='center' className='top-part'>
                        
                            <Flex vertical='vertical' justify='center' className='container'>
                                <Flex horizontal='horizontal' className='description'>
                                    <p className='product-name'>
                                            {itemDescription.itemName}
                                    </p>
                                    <Select
                                        defaultValue="Qty"
                                        className='select'
                                        bordered
                                        style={{ width: 80, borderRadius: 4 , height:30 }}
                                        dropdownStyle={{ borderRadius: 4 }}
                                    >
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>
                                        <Option value="6">6</Option>
                                    </Select>
                                </Flex>
                                <Flex vertical='vertical' justify='center' className='container-vertical'>
                                    <p className='additional-details'>
                                        {itemDescription.itemColour} | {itemDescription.itemSize}
                                    </p>
                                    <p className='availability'>
                                        {itemDescription.inStock > 0 ? `Only ${itemDescription.inStock} left in stock` : 'Out of stock'} | Ships in 1-2 business days
                                    </p>
                                    <p className='shipping-info'></p>
                                </Flex>
                               
                                
                            </Flex>
                            
                        
                    </Flex>
                        <Flex horizontal='horizontal' className='bottom-part'>
                            <p className='underline-on-hover' >
                                Edit
                            </p>
                            <p className='underline-on-hover' >
                                Remove
                            </p>
                        </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default ClothCard