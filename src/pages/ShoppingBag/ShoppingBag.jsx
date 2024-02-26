import {Flex} from 'antd';
import React, { useState, useEffect } from 'react';
import './ShoppingBag.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import ClothCard from '../../components/clothCard/ClothCard';
import PriceCard from '../../components/pricecard/pricecard'
import OrderSummary from '../../components/orderSummary/OrderSummary';
const ShoppingBag = (cartId) => {
    const [clothCards, setClothCards] = useState([]);
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [orderInformation,setOrderInformation]=useState([]);

    // Function to fetch cloth card data from the API
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

    const [priceCardsData, setPriceCardsData] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetch('YOUR_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            setPriceCardsData(data); // Assuming data is an array of objects with picture, itemName, and itemPrice properties
        })
        .catch(error => {
            console.error('Error fetching price card data:', error);
        });
    }, []);


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
          fetch(`/api/shopping-cart/totals?cartId=${cartId}`)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Unable to fetch totals');
                  }
                  return response.json();
              })
              .then(data => {
                  // Handle the response data here
                  console.log(data);
                  setOrderInformation(data);
              })
              .catch(error => {
                  // Handle error
                  console.error('Error fetching totals:', error);
              });
      }
        
        
        fetchProducts();
        fetchTotals(cartId);
        
      }, []); 





    const [orderInfo, setOrderInfo] = useState({ subTotal: '', shipping: '' });

    useEffect(() => {
        // Fetch data from API
        fetch('YOUR_ORDER_API_ENDPOINT')
        .then(response => response.json())
        .then(data => {
            setOrderInfo(data); // Assuming data is an object with subTotal and shipping properties
        })
        .catch(error => {
            console.error('Error fetching order info:', error);
        });
    }, []);


    useEffect(() => {
        // Fetch cloth card data when component mounts
        fetchClothCardData();
    }, []); // Empty dependency array ensures this effect runs only once
    return (

        
    <>
        <Flex vertical="vertical" className="bag-container">
            <Flex  className="bag-nav-container{">

                <Navbar className="nav-item"/>
            </Flex>
            <Flex horizontal="horizontal" className="bag-item">
                 <h1>SHOPPING BAG </h1>
                 <p className="paragraph">(2 items)</p>

            </Flex>
            
            <Flex horizontal="horizontal" className="bill-item">
                <Flex vertical="vertical" className="shopping-card">
                {products.map((product) => (
                   <ClothCard
                        itemDescription={{
                            picture: `data:image/jpeg;base64, ${productImages[product.productId]}`,
                            itemName: product.productName,
                            
                        }}/>
                    ))}

                
                </Flex>
                <div className='bill'>
                    {/* Havent passed data for ESTIMATED TOTAL */}
                    <OrderSummary orderInformation={{subTotal: orderInformation.total_amount,
                                                    shipping :orderInformation.discount_amount}} />                   
                <button className="checkout-btn">GO TO CHECKOUT</button>
                </div>
            </Flex>
            <h1 className='header'> YOU MAY ALSO LIKE</h1>
            <Flex horizontal="horizontal" className="card-item">
                {products.map((product) => (
                   <PriceCard
                   itemData={{
                     picture: `data:image/jpeg;base64, ${productImages[product.productId]}`,
                     itemName: product.productName,
                     itemPrice: product.price
                 }}
                   />
                ))}

            </Flex>
           
            
            <Footer/>
        </Flex>
        </>
    );
   
};
export default ShoppingBag