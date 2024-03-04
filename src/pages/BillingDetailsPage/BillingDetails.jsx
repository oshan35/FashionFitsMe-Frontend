import {Flex} from 'antd';
import Navbar from '../../components/navbar/navbar';
import React, { useState, useEffect } from 'react';
import ClothCard from '../../components/clothCard/ClothCard';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import { Button, Form, Input, InputNumber, Radio ,Checkbox} from 'antd';
import TesImage from '../../asserts/TOMMY HIGLFIGER3.jpeg'
import './BillingDetails.css'

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const onFinish = (values) => {
  console.log(values);
};

const ShippingMethod = () => (
  <>
    <Radio.Group defaultValue="Home">
      <Radio.Button value="Home">Home</Radio.Button>
      <Radio.Button value="Second Day">$24.95 Second Day</Radio.Button>
      <Radio.Button value="Overnight">$35.00 Overnight</Radio.Button>
      <Radio.Button value="Standard">$9.95 Standard</Radio.Button>
    </Radio.Group>
  </>
);

const Gender = () => (
  <>
    <Radio.Group defaultValue="Women's">
      <Radio.Button value="Men's">Men's</Radio.Button>
      <Radio.Button value="Women's">Women's</Radio.Button>
      <Radio.Button value="Kids">Kids</Radio.Button>
    </Radio.Group>
  </>
);



const BillingDetails = ({cartId}) => {

    const [clothCards, setClothCards] = useState([]);
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [orderInformation,setOrderInformation]=useState([]);
    const [productInfo,setProductInfo]=useState([]);
    const [priceCardsData, setPriceCardsData] = useState([]);
    const [orderInfo, setOrderInfo] = useState({ subTotal: '', shipping: '' });

    const fetchClothCardData = async () => {
        try {
            // Perform API request to fetch cloth card data
            // Replace 'apiEndpoint' with your actual API endpoint
            const response = await fetch('apiEndpoint');
            const data = await response.json();
            
            // Update cloth card state with fetched data
            setClothCards(data);
        } catch (error) {
            console.error('Error fetching cloth card data:', error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:5000/product_shopping_cart/Cart001');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const cartProducts = await response.json();
            console.log('Cart products:', cartProducts);
            setProducts(cartProducts); 
      
            const productImagePromises = cartProducts.map(product => fetchProductImages(product.productId));
            const productImages = await Promise.all(productImagePromises);
            console.log('Product images:', productImages);
      
            const imageMap = {};
            productImages.forEach(({ productId, data }) => {
              if (data.length > 0) {
                imageMap[productId] = data[0]; // Set the first image only
              }
            });
      
            console.log('Product image map:', imageMap);
            if (Object.keys(imageMap).length > 0) {
              setProductImages(imageMap);
            } else {
              console.error('No product images found.');
            }
  
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        
        const fetchProductImages = async (productId) => {
          try {
            const response = await fetch(`http://localhost:5000/product-images/getImage/${productId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch image data for product ${productId}`);
            }
            const data = await response.json();
            console.log('Product image data for', productId, ':', data);
            
            return { productId, data}; // Return an object with productId and imageData
          } catch (error) {
            console.error('Error fetching product image:', error);
            return { productId, data: null }; 
          }
        };

        function fetchTotals(cartId) {
          fetch(`http://localhost:5000/product_shopping_cart/totals/${cartId}`)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Unable to fetch totals');
                  }
                  return response.json();
              })
              .then(data => {
                  console.log('orserSummary data',data);
                  setOrderInformation(data);
              })
              .catch(error => {
                  console.error('Error fetching totals:', error);
              });
      }
        
        
        fetchProducts();
        fetchTotals(cartId);
        
      }, []);




    useEffect(() => {
        // Fetch cloth card data when component mounts
        fetchClothCardData();
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        // Fetch data from API
        fetch('YOUR_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            setPriceCardsData(data); 
        })
        .catch(error => {
            console.error('Error fetching price card data:', error);
        });
    }, []);


    return (
        <>
            <Flex vertical='vertical' className='BillingDetails-main-container'>
                <Navbar/>
                <Flex horizontal="horizontal" justify="center" align="center" className='two-row-details'>
                    <Flex vertical='vertical' justify="center" className='billing-form-data-container'>
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                              width:'100%',
                              maxWidth: 600,
                              margin:'auto',
                            }}
                            validateMessages={validateMessages}
                        
                        >
                            <Flex horizontal="horizontal" justify="center" className="name-inputs-container">


                                <Form.Item
                                name={['user', 'firstName']}
                            
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                className='col-input'
                                style={{width:'100%'}}
                                >
                                <Input placeholder='First Name' styles={{width:'100%'}} className='test'/>
                                </Form.Item>
                                <Form.Item
                                name={['user', 'secondName']}
                              
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                className='col-input'
                                >
                                <Input placeholder='Second Name' styles={{width:'100%'}}/>
                                </Form.Item>
                            </Flex>
                            <Form.Item
                                name={['user', 'address']}
                                
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                
                                >
                                <Input placeholder='Address' styles={{width:'100%'}}/>
                            </Form.Item>

                            <Form.Item name={['user', 'apartment']}>
                                <Input placeholder='Apartment, Suit,Etc (Optional)' styles={{width:'100%'}}/>
                            </Form.Item>

                            <Form.Item
                                name={['user', 'city']}
                    
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input placeholder='City' styles={{width:'100%'}}/>
                            </Form.Item>

                            <Flex horizontal="horizontal" justify="center" className="name-inputs-container">
                                <Form.Item
                                    name={['user', 'state']}
                                  
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    className='col-input'
                                    >
                                    <Input placeholder='State' styles={{width:'100%'}}/>
                                </Form.Item>
                                <Form.Item
                                    name={['user', 'state']}
                                  
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    className='col-input'
                                    >
                                    <Input placeholder='Zip Code'/>
                                </Form.Item>
                            </Flex>
                            <Flex>
                              <h1>CONTACT INFROMATION</h1>
                            </Flex>
                            <Form.Item
                                name={['user', 'email']}
                       
                                rules={[
                                    {
                                    type: 'email',
                                    },
                                ]}
                                >
                                <Input placeholder='Email'/>
                            </Form.Item>
                            <Form.Item
                            name={['user', 'phoneNumber']}
                           
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                            >
                                <Input placeholder='Phone Number'/>
                            </Form.Item>
                            <p>
                              Phone number helps to ensure package delivery
                            </p>
                            <Form.Item
                            name='agree'
                            valuePropName="checked" // Ensures the checked state is managed by Form.Item
                            rules={[
                              {
                                validator: (_, value) =>
                                  value ? Promise.resolve() : Promise.reject(new Error('You must agree to proceed')),
                              },
                            ]}

                            >
                                <Checkbox>
                                  When this box is checked, I agree to the Terms and Conditions and to recive updates on the latest products via email or other channels. See privacy policy which includes our Notice of Financial Incentive, for more information.
                                </Checkbox>
                            </Form.Item>
                            <Flex className='gap'/>
                            <h3>SHIPPING METHOD</h3>
                            <Form.Item>
                              <Radio.Group>
                                <div className="radio-option">
                                  <Radio value={1}>$9.95 Standard <br/> Transit time 3-6 business days</Radio>
                                </div>
                                <div className="radio-separator" />
                                <div className="radio-option">
                                  <Radio value={2}>$24.95 Second Day</Radio>
                                </div>
                                <div className="radio-separator" />
                                <div className="radio-option">
                                  <Radio value={3}>$35 Overnight</Radio>
                                </div>
                                <div className="radio-separator" />
                              </Radio.Group>
                            </Form.Item>
                            <p> Orders placed by 1:00 PM ET Monday-Friday usually process the same day. Shipping price may update once the address is entered.</p>
                            <Button>
                              CONTINUE TO PAYMENT
                            </Button>
                        </Form>
                    </Flex>
                    <Flex vertical='vertical' className='billing-component-container'>
                        <ClothCard
                        itemDescription={{
                            picture: TesImage,
                            itemName: 'Test',
                            itemColour:'Red',
                            itemColour:'Red',
                            itemSize:'M',
                            inStock:29
                            
                        }}
                        />
                        <OrderSummary
                        orderInformation={{subTotal: 340,
                            discount:'2%',
                            estimatedTotal:400}}
                        
                        />
                    </Flex>
                </Flex>

            </Flex>

        </>
    );
}

export default BillingDetails;
