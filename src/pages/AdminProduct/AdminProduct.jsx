import React from "react";
import { Flex, Button, Checkbox, Form, Input  } from 'antd';
import "./AdminProduct.css";



const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };


  return (
    <>
    <Form classname="loginform" >
    <Flex horizontal="horizontal">
    <Flex vertical="vertical" >
    <Flex vertical="vertical" className="grid-cell19">
      <div className="text1">Shop Profile</div>
      <div className="text2"> Lorem ipsum dolor sit amet,<br />
                              consectetur adipiscing elit. </div>     
    </Flex>
    <Flex vertical="vertical" className="grid-cell19">
      <div className="text1">Add Products</div>
      <div className="text2"> Lorem ipsum dolor sit amet,<br />
                              consectetur adipiscing elit. </div>
    </Flex>
    <Flex vertical="vertical" className="grid-cell19">
      <div className="text1">Payment</div>
      <div className="text2"> Lorem ipsum dolor sit amet,<br />
                              consectetur adipiscing elit. </div>
    </Flex>
    <Flex vertical="vertical" className="grid-cell19">
      <div className="text1">Security</div>
      <div className="text2"> Lorem ipsum dolor sit amet,<br />
                              consectetur adipiscing elit. </div>
    </Flex>
    </Flex>
    <Flex vertical="vertical" className="grid-cell10">
      <div className="text3">Shop Profile</div>
      <div className="text4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>


      <Flex horizontal="horizontal"> 
      <Form.Item    
        name="Shopname"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your shop name!",
          },
        ]}
      >
        <div className="text5">Shop Name</div>
        <Input placeholder="Shop Name"/>
      </Form.Item>

      <Form.Item    
        name="Phone"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your Mobile Number!",
          },
        ]}
      >
        <div className="text5">Phone</div>
        <Input placeholder="Mobile Number"/>
      </Form.Item>
      </Flex>  

      <Flex horizontal="horizontal"> 
      <Form.Item    
        name="Owner"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input Owner's name!",
          },
        ]}
      >
        <div className="text5">Owner</div>
        <Input placeholder="Owner's Name"/>
      </Form.Item>

      <Form.Item    
        name="ShopId"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input unique ID!",
          },
        ]}
      >
        <div className="text5">Shop ID</div>
        <Input placeholder="Shop ID"/>
      </Form.Item>      
    </Flex> 

    
    </Flex>
    </Flex>
    </Form>
    </>
  );
};
export default App;