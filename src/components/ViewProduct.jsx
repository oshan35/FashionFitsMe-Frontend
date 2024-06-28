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
import { Mens,Womens } from "../assets/images";
import { message } from 'antd';


export default function ViewProduct({productId}) {
  const [matchingSizeError, setMatchingSizeError] = useState(null);

  const initialSizes = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];
  const [sizeAvailability, setSizeAvailability] = useState({}); 
  const [customerId, setCustomerId] = useState(null); // TODO - CHANGE TO NULL ON PROD
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showColorSizePrompt, setShowColorSizePrompt] = useState(false);
  const [showColorSizePromptBuy, setShowColorSizePromptBuy] = useState(false);
  const [showTimeoutPrompt, setShowTimeoutPrompt] = useState(false);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [recommendedSize, setRecommendedSize] = useState(null);
  const [matchRate, setMatchRate] = useState(null);
  const navigate = useNavigate();
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const [fetchError,setFetchError]=useState(false);

  const handleOpenSizeGuide = () => {
    setShowSizeGuide(true);
  };

  const handleCloseSizeGuide = () => {
    setShowSizeGuide(false);
  };

 
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    if (recommendedSize && matchRate) {
        console.log(`New recommended size: ${recommendedSize} with a match rate of ${matchRate}%`);
        // You can also perform other side effects here, such as analytics logging or updating other parts of your UI
    }
}, [recommendedSize, matchRate]);

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
      const apiEndpoint = `${process.env.REACT_APP_API_BASE_URL}/product_shopping_cart/addProducts`;

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
  navigate("/login"); 
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
    category:'',
    gender:''
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
      Black:    { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-black' },
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
  const [fetchedMatched, setfetchedMatched] = useState("not_fetched");

  


  // TODO - Uncomment after development
  useEffect(() => {
    setIsLoading(true); 
    // setItemData(dummy_prod);
  
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/getProductInformation?productId=${productId}`)
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

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/getMatchingSize?customerId=${customerId}&productId=${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch matching size: ${errorText}`);
      }

      const data = await response.json();

      setMatchingSize(data.matching_size);
      console.log(`Matching sizes: ${data.matching_size}`);

      // Round the matchPercentage to two decimal places
      const roundedPercentage = parseFloat(data.matching_percentage).toFixed(2);
      setMatchPercentage(roundedPercentage);
      console.log(`Matching percentage before: ${data.matching_percentage}`);
      console.log(`Matching percentage after: ${roundedPercentage}`);
      setFetchError(false); // Reset error state if successful
    } catch (error) {
      console.error('Error fetching matching size:', error);
      setMatchingSize(null); // Set matching size to null if there's an error
      setMatchPercentage(null); // Set match percentage to null if there's an error
      setFetchError(true); // Set error state if there's an error
    }
  };

  const handleOpenDrawer = () => {
    if (customerId == null) {
      setShowSignupPrompt(true);
    } else {
      setIsDrawerOpen(true);
      setFetchError(false); // Reset error state when opening the drawer
      fetchData(); // Fetch data when opening the drawer
    }
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    if (fetchError) {
      message.error('Sorry, we have not entered measurements for this product yet.');
    }
  };



  const handleColorClick = (color) => {
    console.log("selected colour",color)
    const newImage = `data:image/jpeg;base64,${image_colors[color]}`;
    setItemData({ ...itemData, image: newImage });
    setSelectedColor(color)
};


useEffect(() => {
  async function fetchCustomerId() {
    try {
      const sessionId = localStorage.getItem('sessionData');
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/customer/getCustomerId`, {
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
      <div className="bg-white">
      <section className="">
        <NavBarNew />
      </section>

        <div className="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
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
                    <button
                    type="button"
                    onClick={handleOpenSizeGuide}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </button>
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
                {customerId && (
 <Card className="mt-6 p-4 bg-blue-10 border border-blue-200 rounded-lg shadow-sm">
 {matchingSize && matchPercentage ? (
   <p className="text-lg font-medium text-gray-900">
     We think size <strong className="text-blue-700">{matchingSize}</strong> is the best match for you in this product. 
     Matching Rate <strong className="text-blue-700">{matchPercentage}%</strong>
   </p>
 ) : (
   <p className="text-lg font-medium text-gray-900">
     Click below & Try our <span className="text-blue-700">size recommendation algorithm</span> to find the best match.
   </p>
 )}
</Card>
)}

          <div>
          <button  type="button"
            onClick={handleOpenDrawer}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Find My Fit
          </button>  

          <CustomDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
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
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-5">
                <p className="font-bold text-xl text-black-600">Please Sign up before using size recommendation</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleOk()}
                    className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
                  >
                    OK
                  </button>
                  <button
                    onClick={() => setShowSignupPrompt(false)}
                    className="px-10 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

          )}

{/* Size Guide Modal */}

<Modal
  title="Size Guide"
  visible={showSizeGuide}
  onCancel={handleCloseSizeGuide}
  footer={[
    <Button key="close" onClick={handleCloseSizeGuide}>
      Close
    </Button>
  ]}
>
{itemData && itemData.gender && itemData.gender.toLowerCase() === 'men' ? (
  <Card>
    <img src={Mens} alt="Men's Size Guide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </Card>
) : (
  <Card>
    <img src={Womens} alt="Women's Size Guide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </Card>
)}


</Modal>




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
 
        </div>

</div>

  );
}
