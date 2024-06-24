import React, {useEffect, useState} from "react";
import { RadioGroup, Transition } from "@headlessui/react";
import { linksArray } from "../constants";
import { StarIcon } from "@heroicons/react/solid";
import { GlobeIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { txtimg } from "../assets/images";
import { useLocation } from 'react-router-dom';
import { redirect, useNavigate } from 'react-router-dom';
import ProductImageCarousel from "./ProductImageCarosel";
import NavBarNew from "./NavNew";
import CustomDrawer from "./bodymodelRender/Drawer";
import Nav from "./Nav";
import { Modal, Button, Card } from 'antd';


// const dummy_prod = {
//   "price": 120.00,
//   "sizes": [
//       [
//           "M",
//           50
//       ]
//   ],
//   "colors": [
//       "Black"
//   ],
//   "reviews": [
//       {
//           "reviewId": "RV001",
//           "customer": {
//               "customerId": 1,
//               "firstName": "John",
//               "lastName": "Doe",
//               "country": "USA",
//               "username": "johndoe",
//               "password": "password123",
//               "cart": {
//                   "cartId": 1,
//                   "totalAmount": 200.00,
//                   "purchaseStatus": true,
//                   "discountAmount": 10.00
//               }
//           },
//           "product": {
//               "productId": "PR001",
//               "brand": {
//                   "brandId": "BR001",
//                   "brandName": "Nike"
//               },
//               "productName": "Running Shoes",
//               "price": 120.00,
//               "productCategory": "Footwear",
//               "gender": "Unisex",
//               "description": null
//           },
//           "rating": 4.5,
//           "description": "Great product, would recommend!"
//       }
//   ],
//   "image": "",
//   "category": "Footwear",
//   "image_colors": {
//       "Black": ""
//   },
//   "description": null,
//   "productId": "PR001",
//   "productName": "Running Shoes"
// }


export default function ViewProduct({productId}) {

  const initialSizes = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];
  const [sizeAvailability, setSizeAvailability] = useState({}); 
  const [customerId, setCustomerId] = useState(null); 
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showColorSizePrompt, setShowColorSizePrompt] = useState(false);
  const [showColorSizePromptBuy, setShowColorSizePromptBuy] = useState(false);
  const [showTimeoutPrompt, setShowTimeoutPrompt] = useState(false);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [recommendedSize, setRecommendedSize] = useState("Medium");
  const [matchRate, setMatchRate] = useState(80.2);
  const navigate = useNavigate();
 
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleBuyNow = async (customerId) => {
    if (!selectedColor || !selectedSize) {
      setShowColorSizePromptBuy(true);
    }else {
      handleAddToCart();
      navigate('/checkout', { state: { customerId } });
    }
  };
  

const handleAddToCart = async () => {
  if (!selectedColor || !selectedSize) {
    setShowColorSizePrompt(true);
  }else {

  try {
      const apiEndpoint = 'http://localhost:5000/product_shopping_cart/addProducts';

      const payload = {
          productId,
          customerId,
          selectedColor,
          selectedSize
      };


      const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      });

      const contentType = response.headers.get('Content-Type');

      if (response.ok) {
          if (contentType.includes('application/json')) {
              const data = await response.json();
              handleViewCart(customerId);
              console.log('Item added to cart successfully:', data);
          } else {
              const text = await response.text();
              console.log('Item added to cart successfully:', text);
          }
          setShowPrompt(true); 
      } else {
          if (contentType.includes('application/json')) {
              const errorData = await response.json();
              console.error(`Failed to add item to cart: ${errorData.message}`);
          } else {
              const errorText = await response.text();
              console.error(`Failed to add item to cart: ${errorText}`);
          }
      }
  } catch (error) {
      console.error(`An error occurred: ${error.message}`);
  }
}
};

const handleOk = () => {
  navigate("/logout"); 
};




const handleViewCart = (customerId) => {
  console.log("customer id when clicked view cart:",customerId)
  navigate("/cart", { state: { customerId } });
    setShowPrompt(false);
  };
  

  const handleContinueShopping = () => {
    setShowPrompt(false);
  };
  const [itemData, setItemData] = useState({
    image: '',
    productName:'',
    price:'',
    sizes: [],
    colors: [],
    image_colors: {},
    category:''
  });
  useEffect(() => {
    if (itemData.sizes.length > 0) {
      const initialAvailability = {};
      itemData.sizes.forEach(sizeData => {
        const [size, count] = sizeData;
        console.log("count", size,count)
        sizeAvailability[size] = count>0 ; 
      });
    //  setSizeAvailability(initialAvailability);
      console.log("size availability ",sizeAvailability)

    }
  }, [itemData.sizes]);

  const mapBackendToFrontendColors = (backendColors) => {
    const colorMappings = {
      Red: { name: 'Red', bgColor: 'bg-red-700', selectedColor: 'ring-red-500' },
      Green: { name: 'Green', bgColor: 'bg-green-700', selectedColor: 'ring-green-500' },
      Blue: { name: 'Blue', bgColor: 'bg-blue-700', selectedColor: 'ring-blue-500' },
      Brown:   { name: 'Brown', bgColor: 'bg-brown-700', selectedColor: 'ring-brown-500' },
      Black:    { name: 'Black', bgColor: 'bg-black-700', selectedColor: 'ring-black-500' },
      Orange:    { name: 'Orange', bgColor: 'bg-orange-700', selectedColor: 'ring-orange-500' },
      Grey:    { name: 'Grey', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-500' },
      White:    { name: 'White', bgColor: 'bg-white-700', selectedColor: 'ring-white-500' },
      Navy:    { name: 'Navy', bgColor: 'bg-navy-700', selectedColor: 'ring-navy-500' },
      Yellow: { name: 'Yellow', bgColor: 'bg-yellow-700', selectedColor: 'ring-yellow-500' },
      Pink:    { name: 'Pink', bgColor: 'bg-pink-700', selectedColor: 'ring-pink-500' },
      Purple:    { name: 'Purple', bgColor: 'bg-purple-700', selectedColor: 'ring-purple-500' },
      Cream:    { name: 'Cream', bgColor: 'bg-cream-700', selectedColor: 'ring-cream-500' },
      Multicolour:    { name: 'Multicolour', bgColor: 'bg-multicolour-700', selectedColor: 'ring-multicolour-500' }


    };
  
    return backendColors.map((backendColor) => {
      console.log("backend colour:",backendColor)
      const frontendColor = colorMappings[backendColor];
      console.log("frontendColor:",frontendColor)

      return frontendColor ? frontendColor : null;
    }).filter(Boolean);
  };
  


  

  
  const {image, productName, price, sizes, colors, image_colors,category,description} = itemData;
  const [isLoading, setIsLoading] = useState(true);
  const frontendColors = mapBackendToFrontendColors(itemData.colors);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [matchingSize, setMatchingSize] = useState(null);
  const [matchPercentage, setMatchPercentage] = useState(null);

  const handleOpenDrawer = () => {
    if (customerId == null) {
      setShowSignupPrompt(true);
    } else {
      setIsDrawerOpen(true);
    }
  };

  // TODO - Uncomment after development
  useEffect(() => {
    setIsLoading(true); 
    // setItemData(dummy_prod);
  
    fetch(`http://localhost:5000/products/getProductInformation?productId=${productId}`)
        .then(response => response.json())
        .then(data => {
          console.log("sizes",sizes);
            setItemData({
                ...data,
                image: `data:image/jpeg;base64,${data.image}`
            });
            console.log('loaded data at view product',data);
            setIsLoading(false); 
            
  
        })
        .catch(error => {
            console.error('Error fetching product information:', error);
            setIsLoading(false); 
        });
  }, [productId]); 

  const fetchMatchingSize = async () => {

    try {
      const response = await fetch(`http://localhost:5000/customer/getMatchingSize/${customerId}/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch matching size');
      }

      const data = await response.json();
      setMatchingSize(data.size);
      setMatchPercentage(data.percentage);
    } catch (error) {
      console.error('Error fetching matching size:', error);
    }
  };



  const handleColorClick = (color) => {
    console.log("selected colourrrrr",color)
    const newImage = `data:image/jpeg;base64,${image_colors[color]}`;
    setItemData({ ...itemData, image: newImage });
    setSelectedColor(color)
};


useEffect(() => {
  async function fetchCustomerId() {
    try {
      const sessionId = localStorage.getItem('sessionData');
      const response = await fetch("http://localhost:5000/customer/getCustomerId", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionId}`,
        },
      });

      if (response.ok) {
        const cusId = await response.json();
        setCustomerId(cusId)      
      } else {
          console.error('Failed to get customer ID:', response.status);

      }
    } catch (error) {
      console.error('An error occurred while fetching the customer ID:', error);
    }
  }

  fetchCustomerId();
}, []);
  
  useEffect(() => {
    console.log("customer id",customerId)
  }, [customerId]);
  return (
    
        <div className="bg-gray-50">
        <Nav/>

        <main className="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                  <div className=" justify-between">
                  <h1 className="text-2xl lg:text-5xl font-medium text-gray-900">
                      {productName}
                    </h1>
                    <p className="text-xl lg:text-xl font-medium text-gray-900 mt-5">LKR  {price}</p>
                  </div>
                </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:w-full">
              <h2 className="sr-only">Images</h2>



              <ProductImageCarousel
                image_colors={image_colors}
                handleColorClick={handleColorClick}
                image={image}
                colors={colors}/>

            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <RadioGroup
                    value={selectedColor}
                    onChange={(color) => handleColorClick(color)}
                    className="mt-2"
                   >

                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {frontendColors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color.name}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See sizing chart
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                    >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {initialSizes.map(size => (
                        <RadioGroup.Option
                        key={size}
                        value={size}
                        disabled={!sizeAvailability[size]}
                          className={({ active, checked }) =>
                            classNames(
                              sizeAvailability[size]
                                ? "cursor-pointer focus:outline-none"
                                : "cursor-not-allowed opacity-25",
                              active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
                              checked
                                ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                                : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                              "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                            )
                          }
                        >
                          <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
          {customerId && recommendedSize && matchRate && (
                <Card className="mt-6">
                  <p>We think size <strong>{recommendedSize}</strong> is the best match for you in this product. Matching Rate <strong>{matchRate}%</strong></p>
                </Card>
              )}
          <div>
          <button  type="button"
            onClick={handleOpenDrawer}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            FitOn
          </button>  

          <CustomDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            {/* Add content for the drawer here */}
            <p>Drawer Content</p>
          </CustomDrawer>
              
          <button  type="button"
            onClick={() => handleBuyNow(customerId)}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Buy Now
          </button>
              {showColorSizePromptBuy && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-35">
                  <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                    <p className="font-medium text-xl">        Please select a color and size before proceeding.
                    </p>
                    <button
                      onClick={() => setShowColorSizePromptBuy(false)}
                      className=" mt-10 px-14 py-2 bg-secondary text-white rounded-md hover:bg-primary-dark focus:outline-none"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
        </div>


        <div>
          <button
            type="button"
            onClick={() => handleAddToCart(productId, customerId)}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Add to Cart
          </button>
              {showColorSizePrompt && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-35">
                  <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                    <p className="font-medium text-xl">Please choose color & size to add the product to cart.</p>
                    <button
                      onClick={() => setShowColorSizePrompt(false)}
                      className=" mt-10 px-14 py-2 bg-secondary text-white rounded-md hover:bg-primary-dark focus:outline-none"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}

            {showPrompt && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                <div className="bg-white p-6 rounded-lg">
                  <p className="mb-4 font-bold">What would you like to do?</p>
                  <button
                    className="mr-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                    onClick={handleViewCart(customerId)}
                  >
                    View Cart
                  </button>
                  <button
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark"
                    onClick={handleContinueShopping}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}

          {showSignupPrompt && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-35">
              <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <p className="font-medium text-xl">Please Sign up before using size recommendation!</p>
                <button
                  onClick={() => handleOk()}
                  className=" mt-10 px-14 py-2 bg-secondary text-white rounded-md hover:bg-primary-dark focus:outline-none"
                >
                  OK
                </button>
                <button
                  onClick={() => setShowSignupPrompt(false)}
                  className=" mt-10 px-14 py-2 bg-secondary text-white rounded-md hover:bg-primary-dark focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}



        </div>
              </form>

              {/* Product details */}
              <div className="mt-8">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                dangerouslySetInnerHTML={{ __html: description }}
                  productDescription
                />
              </div>

            
            </div>
            </div>
  </div>
</div>
 
        </main>

</div>


  );
}