
import {Flex, Button} from 'antd';
import './navbar.css';
import cartIcon from '../../asserts/cart-icon.png';
import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../../Contexts/FilterContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const { filters, setFilter } = useContext(FilterContext);
    const handleGenderButtonClick = (gender) => {
        console.log('clicked button on navbar');
        setFilter('gender', gender);
        navigate('/catalogue');
      };

      const handleSignUpButtonClick = () => {
        console.log('clicked signup on navbar');
        navigate('/sign-up');
      };

    useEffect(()=>{
        console.log('filter values after clicking on navbar button',filters);
    },[filters])
    
    return (
        <>
        <Flex horizontal='horizontal' className='nav-container'>
            <div className='nav-items' id='icon'>
            </div>
            <div className='nav-items' id='nav-buttons'>
                <Flex justify='center'>
                    <Button type='text' className='nav-item'>Home</Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Women')}>Women's</Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Men')}>Men's</Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Kids')}>Kid's</Button>
                    <Button type='text' className='nav-item' icon={<img src={cartIcon} id='cart-icon'/>}></Button>
                </Flex>
            </div>
            <div className='nav-items' id='signin'>
                <Flex justify='center'>
                    <Button type='text' className='nav-item' onClick={() => handleSignUpButtonClick()}> Sign Up </Button>
                    <Button type='text' className='nav-item'> Log In </Button>
                </Flex>
            </div>
        </Flex>
        </>
    );
};

export default Navbar