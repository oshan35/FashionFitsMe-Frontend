import React from "react";
import "./SignupPage.css";
import { LockOutlined, UserOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';


const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };


  return (
    <Form classname="loginform" >

<Navbar/>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
  <hi className="heading">CREATE ACCOUNT</hi>
    
      <Form.Item
        name="Firstname"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your First Name!",
          },
        ]}
      >
        <Input placeholder="First Name"/>
      </Form.Item>


      <Form.Item
        name="Lastname"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your Last Name!",
          },
        ]}
      >
        <Input  placeholder="Last Name" />
      </Form.Item>


      <Form.Item
        name="username"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Userame"
          type="email"
        />
      </Form.Item>


      <Form.Item
        name="password"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign in
        </Button>
      </Form.Item>

    </Form>
    <Footer/>
    </Form>
  );
};
export default App;