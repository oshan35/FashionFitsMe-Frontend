import React from 'react';
import {Flex, Button} from 'antd';
import './navbar.css';
import cartIcon from '../../asserts/cart-icon.png';

const Navbar = () => {

    return (
        <>
        <Flex horizontal='horizontal' className='nav-container'>
            <div className='nav-items' id='icon'>
            </div>
            <div className='nav-items' id='nav-buttons'>
                <Flex justify='center'>
                    <Button type='text' className='nav-item'>Home</Button>
                    <Button type='text' className='nav-item'>Women's</Button>
                    <Button type='text' className='nav-item'>Men's</Button>
                    <Button type='text' className='nav-item'>Kid's</Button>
                    <Button type='text' className='nav-item' icon={<img src={cartIcon} id='cart-icon'/>}></Button>
                </Flex>
            </div>
            <div className='nav-items' id='signin'>
                <Flex justify='center'>
                    <Button type='text' className='nav-item'> Sign Up </Button>
                    <Button type='text' className='nav-item'> Log In </Button>
                </Flex>
            </div>
        </Flex>
        </>
    );
};

export default Navbar