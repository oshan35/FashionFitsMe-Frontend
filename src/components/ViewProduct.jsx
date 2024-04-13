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
import Nav from "./Nav";




export default function ViewProduct({productId}) {

  const initialSizes = ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];
  const [sizeAvailability, setSizeAvailability] = useState({}); // State to hold size availability
const [customerId, setCustomerId] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();
  // const [payload, setPayload] = useState({
  //   productId: productId,
  //   customerId: null,
  // });
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleBuyNow = () => {
    navigate('/checkout');
  };
  
  // const handleAddToCart = (productId,customerId) => {
  //   setShowPrompt(true);

  // };

//   const handleAddToCart = async (productId, customerId) => {
//     try {
//         const apiEndpoint = 'http://localhost:5000/product_shopping_cart/addProducts';
//         const [payload, setPayload] = useState({
//           productId: productId,
//           customerId: null,
//         });
//         console.log("payload",payload)
//         const response = await fetch(apiEndpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         if (response.ok) {
//             console.log('Item added to cart successfully');
//             setShowPrompt(true);
//         } else {
//             console.error('Failed to add item to cart');
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// };

const handleAddToCart = async () => {
  try {
      const apiEndpoint = 'http://localhost:5000/product_shopping_cart/addProducts';

      // Create the payload object with productId and customerId
      const payload = {
          productId,
          customerId
      };

      // Send the POST request with the payload as JSON
      const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      });

      // Check the content type of the response
      const contentType = response.headers.get('Content-Type');

      // Handle the response based on the content type
      if (response.ok) {
          // If the response is successful, parse it as JSON and log a success message
          if (contentType.includes('application/json')) {
              const data = await response.json();
              console.log('Item added to cart successfully:', data);
          } else {
              // Handle non-JSON responses
              const text = await response.text();
              console.log('Item added to cart successfully:', text);
          }
          setShowPrompt(true); // Show the prompt for user actions
      } else {
          // Handle non-successful responses
          if (contentType.includes('application/json')) {
              const errorData = await response.json();
              console.error(`Failed to add item to cart: ${errorData.message}`);
          } else {
              // Handle non-JSON error messages
              const errorText = await response.text();
              console.error(`Failed to add item to cart: ${errorText}`);
          }
      }
  } catch (error) {
      console.error(`An error occurred: ${error.message}`);
  }
};


  const handleViewCart = () => {
    navigate("/cart");
    setShowPrompt(false);
  };
  
  const handleContinueShopping = () => {
    setShowPrompt(false);
    // Handle continue shopping logic if needed
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
        sizeAvailability[size] = count>0 ; // Set availability based on count
      });
     // setSizeAvailability(initialAvailability);
      console.log("size availability ",sizeAvailability)

    }
  }, [itemData.sizes]);
  const product = {
    name: "Basic Tee",
    price: "LKR 3500.00",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
    colors: [
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
      {
        name: "Heather Grey",
        bgColor: "bg-gray-400",
        selectedColor: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      "Only the best materials",
      "Ethically and locally made",
      "Pre-washed and pre-shrunk",
      "Machine wash cold with similar colors",
    ],
  };
  
  const {image, productName, price, sizes, colors, image_colors,category} = itemData;
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
  
    fetch(`http://localhost:5000/products/getProductInformation?productId=${productId}`)
        .then(response => response.json())
        .then(data => {
          console.log("sizes",sizes);
            // Update the itemData state with the fetched data
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

  const handleColorClick = (color) => {
    const newImage = `data:image/jpeg;base64,${image_colors[color]}`;
    setItemData({ ...itemData, image: newImage });
};
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
 

//   async function getCustomerId() {
//     try {
//         const sessionId = localStorage.getItem('sessionData');
        
//         const response = await fetch("http://localhost:5000/customer/getCustomerId", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${sessionId}`, 
//             },
//         });

//         if (response.ok) {
//             const cusId = await response.json();
//             setCustomerId(cusId);
//             // console.log('Customer ID:', customerId);
//         } else {
//             console.error('Failed to get customer ID:', response.status);
//         }
//     } catch (error) {
//         console.error('An error occurred while fetching the customer ID:', error);
//     }
// }


//getCustomerId();
useEffect(() => {
  // Fetch customerId and set it in payload
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
        setCustomerId(cusId)      } else {
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
                      {colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
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

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  onClick={handleBuyNow}
                >
                  Buy now
                </button>
                {/* <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  onClick={handleAddToCart}
              >
                  Add to Cart    
              </button> */}

        <div>
          <button
            type="button"
            onClick={() => handleAddToCart(productId, customerId)}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Add to Cart
          </button>

          {showPrompt && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg">
                <p className="mb-4 font-bold">What would you like to do?</p>
                <button
                  className="mr-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                  onClick={handleViewCart}
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
        </div>
              </form>

              {/* Product details */}
              <div className="mt-8">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                dangerouslySetInnerHTML={{ __html: product.description }}
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