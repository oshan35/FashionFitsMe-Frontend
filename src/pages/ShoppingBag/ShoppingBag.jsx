import {Flex} from 'antd';
import React, { useState, useEffect } from 'react';
import './ShoppingBag.css';
import { Card } from 'antd';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import ClothCard from '../../components/clothCard/ClothCard';
import PriceCard from '../../components/pricecard/pricecard'
import OrderSummary from '../../components/orderSummary/OrderSummary';
import { useLocation } from 'react-router-dom';

const ShoppingBag = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartId = searchParams.get('cartId');
    const [clothCards, setClothCards] = useState([]);
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [orderInformation,setOrderInformation]=useState([]);
    const [productInfo,setProductInfo]=useState([]);
    const [productColors,setProductColors]=useState([]);
    const [priceCardsData, setPriceCardsData] = useState([]);
    const [orderInfo, setOrderInfo] = useState({ subTotal: '', shipping: '' });

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

        //fetchClothCardData(cartId);       

    }, []);
    useEffect(() => {
         
      console.log('productColors:',productInfo);

  }, [productInfo]);


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch (`${process.env.REACT_APP_API_BASE_URL}/products`);
           
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
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/product-images/getImage/${productId}`);
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

        const fetchClothCardData = async (cartId) => {
          try {
            console.log('cartId:',cartId);
             
              const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/product_shopping_cart/${cartId}/product-color-sizes`);
              
              const data = await response.json();
              console.log('data:',data);
              setProductInfo(data);
              
              
              setClothCards(data);
          } catch (error) {
              console.error('Error fetching cloth card data:', error);
          }
      };

        function fetchTotals(cartId) {
          fetch(`${process.env.REACT_APP_API_BASE_URL}/product_shopping_cart/totals/${cartId}`)
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
        fetchClothCardData(cartId);
        
      }, []);  
    return (

        
    <>
        <Flex vertical="vertical" className="bag-container">
            <Flex  className="bag-nav-container{">

                <Navbar className="nav-item"/>
            </Flex>
            <Flex horizontal="horizontal" className="bag-item">
                 <h1>SHOPPING BAG </h1>
                 <p className="paragraph">({productInfo.length} items)</p>
            </Flex>

            {productInfo.length === 0 ? (
    <Flex vertical="vertical"  justify content ="center" className="empty-cart-message">
      <h1>Your shopping bag is empty</h1>
    </Flex>
  ) : (           
            <Flex horizontal="horizontal" className="bill-item">
                <Flex vertical="vertical" className="shopping-card">
                  {productInfo.map((product) => (
                    <ClothCard
                          itemDescription={{
                              picture: `data:image/jpeg;base64, ${productImages[product.product.productId]}`,
                              itemName: product.product.productName,
                              itemColour:product.id.color,
                              itemSize:product.id.size,
                              inStock:product.quantity,
                              
                              
                          }}/>
                    ))}                
                </Flex>
                <div className='bill'>

                    <OrderSummary orderInformation={{subTotal: orderInformation.totalAmount,
                                                    discount:orderInformation.discountAmount,
                                                    estimatedTotal:orderInformation.estimatedTotal}} />                   
                <button className="checkout-btn">GO TO CHECKOUT</button>
                </div>
            </Flex>


)}
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