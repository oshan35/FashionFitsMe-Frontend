
import {Flex, Button} from 'antd';
import './navbar.css';
import cartIcon from '../../asserts/cart-icon.png';
import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../../Contexts/FilterContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const { filters, setFilter,resetFilters } = useContext(FilterContext);
    const handleGenderButtonClick = (gender) => {
        console.log('clicked gender button on navbar');
        setFilter('brand',gender);
        setFilter('gender', gender);
        navigate('/catalogue');
      };

      const handleLoginButtonClick = () => {
        console.log('clicked login on navbar');
        resetFilters();
        navigate('/login');
      };

      const handleSignUpButtonClick = () => {
        console.log('clicked signup on navbar');
        resetFilters();
        navigate('/sign-up');
      };

      const handleHomeButtonClick = () => {
        console.log('clicked home on navbar');
        resetFilters();
        navigate('/');
      };

    useEffect(()=>{
        console.log('filter values after clicking on navbar button',filters);
    },[filters])

   
  const handleResetFilters = () => {
    resetFilters();
  };


    
    return (
        <>
        <Flex horizontal='horizontal' justify='center' className='nav-container'>
            <div className='nav-items' id='icon'>
            </div>
            <div className='nav-items' justify='center' id='nav-buttons'>
                <Flex justify='center'>
                    <Button type='text' className='nav-item' onClick={() => handleHomeButtonClick('Women')}>Home </Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Women')}>Women's</Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Men')}>Men's</Button>
                    <Button type='text' className='nav-item' onClick={() => handleGenderButtonClick('Kids')}>Kid's</Button>
                    <Button type='text' className='nav-item' icon={<img src={cartIcon} id='cart-icon'/>}></Button>
                </Flex>
            </div>
            <Flex horizontal='horizontal' className='login-items' id='signin'>
                <Flex justify='right' className='login-items1'> 
                    <Button type='text' className='nav-item' onClick={() => handleSignUpButtonClick()}> Sign Up </Button>
                    <Button type='text' className='nav-item' onClick={() => handleLoginButtonClick()}> Log In </Button>
                </Flex>
            </Flex>
        </Flex>
        </>
    );
};

export default Navbar