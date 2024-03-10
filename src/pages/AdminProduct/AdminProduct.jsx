import React from "react";
import { Flex, Form, Input, Upload,Select, Space, Col, Row , Button} from 'antd';
import { PlusOutlined ,  SaveOutlined} from '@ant-design/icons';
import "./AdminProduct.css";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  


  return (
    <>
    <Form classname="loginform"
    initialValues={{
        remember: true,
      }}
      onFinish={onFinish} >
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

      <Row>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Row>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
      className="upload-logo"
      name="logo"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          message: "Please upload a logo!",
        },
      ]}
    >
      <div className="text6">Shop Logo</div>
      <Upload
        action="/upload.do"
        listType="picture-card"
        maxCount={1} // Allow only one file to be uploaded
      >
        <button
          style={{
            border: 0,
            background: "none",
          }}
          type="button"
        >
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
      </Upload>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
      className="brand-names"
      rules={[
        {
          required: true,
          message: "Please input brand names!",
        },
      ]}
    >
      <div className="text5">Brands</div>
      <Space className="brands-textbox"
      style={{
        width: '100%',
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        options={options}
      />
    </Space>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
        <Form.Item    
        name="Location"
        className="location-textbox"
        rules={[
          {
            required: true,
            message: "Please input your location!",
          },
        ]}
      >
        <div className="text5">Location</div>
        <Input className="location-input" placeholder="Select your location"/>
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item    
        name="Address"
        className="address-textbox"
        rules={[
          {
            required: true,
            message: "Please input your Address!",
          },
        ]}
      >
        <div className="text5">Address</div>
        <Input className="address-input" placeholder="Enter your address"/>
      </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
        <Form.Item    
        name="Email"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <div className="text5">Email</div>
        <Input placeholder="Email Address"/>
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item    
        name="Facebook"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input your Facebook URL!",
          },
        ]}
      >
        <div className="text5">Facebook URL</div>
        <Input  placeholder="Enter your Facebook URL"/>
      </Form.Item>
        </Col>
      </Row>
      
      <Button className="save-button" type="primary" icon={<SaveOutlined />}>
        Save
      </Button>
      <hr className="line" />  

      <Flex vertical="vertical" >
      <div className="text3">Add Products</div>
      <div className="text4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>

      <Row>
        <Col span={12}>
        <Form.Item    
        name="Itemname"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input Item name",
          },
        ]}
      >
        <div className="text5">Item Name</div>
        <Input placeholder="Eg: Premium Linen Short Sleeve Shirt"/>
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item    
        name="Item Category"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input item category!",
          },
        ]}
      >
        <div className="text5">Item Category</div>
        <Input placeholder="Eg: Men’s Wear"/>
      </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
        <Form.Item    
        name="Itemtype"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input item type!",
          },
        ]}
      >
        <div className="text5">Item Type</div>
        <Input placeholder="Eg: T-Shirt"/>
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item    
        name="Brand"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please Select Brand!",
          },
        ]}
      >
        <div className="text5">Item Brand</div>
        <Input placeholder="Eg: Odel"/>
      </Form.Item>   
        </Col>
      </Row>

      <Row>
        <Col span={12}>
        <Form.Item    
        name="Color"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please input color of the item!",
          },
        ]}
      >
        <div className="text5">Color</div>
        <Input placeholder="Eg: Light Green"/>
      </Form.Item>
        </Col>
        <Col >
        <Form.Item    
        name="Material"
        className="textbox"
        rules={[
          {
            required: true,
            message: "Please enter the material!",
          },
        ]}
      >
        <div className="text5">Material</div>
        <Input placeholder="Eg: Baby Crocadile"/>
      </Form.Item>   
        </Col>
      </Row>

      <Row>
        <Col >
        <Form.Item    
        name="No. of Items"
        className="textbox1"
        rules={[
          {
            required: true,
            message: "Please input number of items!",
          },
        ]}
      >
        <div className="text5">No. of Items</div>
        <Input placeholder="Eg: 20"/>
      </Form.Item>
        </Col>
        <Col>
        <Form.Item    
        name="Size"
        className="textbox1"
        rules={[
          {
            required: true,
            message: "Please select the Size!",
          },
        ]}
      >
        <div className="text5">Size</div>
        <Input placeholder="Eg: Extra Small"/>
      </Form.Item>   
        </Col>

        <Col>
        <Form.Item    
        name="Price"
        className="textbox1"
        rules={[
          {
            required: true,
            message: "Please enter the price!",
          },
        ]}
      >
        <div className="text5">Unit Price</div>
        <Input placeholder="Eg: Rs.7,990.00"/>
      </Form.Item>   
        </Col>
      </Row>

      <Row>
        <Form.Item
        className="upload-images"
        name="logo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
        {
          required: true,
          message: "Please upload a logo!",
        },
      ]}
    >
      <div className="text6">Images</div>
      <Upload
        action="/upload.do"
        listType="picture-card"
        maxCount={5}
      >
        <button
          style={{
            border: 0,
            background: "none",
          }}
          type="button"
        >
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
      </Upload>
          </Form.Item>
      </Row>
      
      <Button className="save-button" type="primary" icon={<SaveOutlined />}>
        Save
      </Button>
      <hr className="line" />  
    </Flex>
    <Flex vertical="vertical">
      <div className="text3">Payment Details</div>
      <div className="dummy-text1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>

      <hr className="line" />  
    </Flex>

    <Flex vertical="vertical" >
      <div className="text3">Security</div>
      <div className="dummy-text1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>

      <hr className="line" />  
    </Flex>

    </Flex>
    </Flex>
    </Form>
    </>
  );
};
export default App;