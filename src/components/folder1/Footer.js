import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (



   
    <AntFooter className="footer">
      <div className="content">
      <div className="column">
          <h3>Account</h3>
          <ul>
            <li><a href="/page1">My Account</a></li>
            <li><a href="/page2">My Order</a></li>
            <li><a href="/page2">Size Guide</a></li>
            <li><a href="/page2">Virtual Fit On</a></li>
           
          </ul>
        </div>
      <div className="column">
          <h3>Menu</h3>
          <ul>
            <li><a href="/page1">Home</a></li>
            <li><a href="/page2">Men's</a></li>
            <li><a href="/page2">Women's</a></li>
            <li><a href="/page2">Shop Latest</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="column">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="/page1">Contact Us</a></li>
            <li><a href="/page2">Service Payment</a></li>
            <li><a href="/page2">FAQ</a></li>
            <li><a href="/page1">Return</a></li>
            
          </ul>
        </div>

        <div className="column">
          <h3>Brands</h3>
          <ul>
            <li><a href="/page1">Aldo</a></li>
            <li><a href="/page2">Abercombie and Fitch</a></li>
            <li><a href="/page2">Calvin Klein</a></li>
            <li><a href="/page1">Gucci</a></li>
            
          </ul>
        </div>


        <div className="column">
          <h3>Brands</h3>
          <ul>
            <li><a href="/page1">Levis</a></li>
            <li><a href="/page2">Polo</a></li>
            <li><a href="/page2">Adidas</a></li>
            <li><a href="/page2">Under Armour</a></li>
            
          </ul>
        </div>
       
      </div>
    </AntFooter>
  );
};

export default Footer;
