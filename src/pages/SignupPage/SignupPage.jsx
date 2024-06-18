import React, { useState } from "react";
import "./SignupPage.css";
import { LockOutlined, UserOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import {Flex} from 'antd';

const SignUpPage = () => {
 
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    });
  
    const onFinish = async () => {
      console.log("Uform data",formData);
      try {
        const response = await fetch('http://localhost:5000/customer/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log("User registered successfully");
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      setFormData({ ...formData, [name]: value });
    };
  
  return (
    <Flex vertical="vertical" className="sign-up-container">
      <Flex  className="nav-container">
        <Navbar className="nav-item" />
      </Flex>
      <Flex vertical="vertical" className="sign-up-item">
        <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
          <h1 className="heading">CREATE ACCOUNT</h1>
    
          <Form.Item name="firstName" className="textbox" rules={[{ required: true, message: "Please input your First Name!",},]}  >
            <Input placeholder="First Name" name="firstName" onChange={handleChange}style={{
                width: '400px',
                height: '50px',
                borderRadius: '0', 
                borderColor: 'rgb(194, 193, 193)', 
              }} /> 
          </Form.Item>

          <Form.Item name="lastName" className="textbox"  rules={[{ required: true, message: "Please input your Last Name!",},]}  >
            <Input placeholder="Last Name" name="lastName" onChange={handleChange} style={{
                width: '400px',
                height: '50px',
                borderRadius: '0', 
                borderColor: 'rgb(194, 193, 193)', 
              }} /> 
          </Form.Item>

          <Form.Item name="username" className="textbox" rules={[{ required: true, message: "Please input your Username!",},]}  >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Userame" name="username" onChange={handleChange} type="email" style={{
                width: '400px',
                height: '50px',
                borderRadius: '0', 
                borderColor: 'rgb(194, 193, 193)', 
              }}/> 
          </Form.Item>

          <Form.Item name="password" className="textbox" rules={[{ required: true, message: "Please input your Password!",},]}  >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" name="password"  onChange={handleChange}
            style={{
                width: '400px',
                height: '50px',
                borderRadius: '0', 
                borderColor: 'rgb(194, 193, 193)', 
              }} 
              />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">Sign Up</Button>
          </Form.Item>
        </Form>
      </Flex>
      <Flex className="grid-item"></Flex>
      <Footer/>
    </Flex>
  );
};

export default SignUpPage;
