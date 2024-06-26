import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const valuetext = (value) => {
  return `LKR ${value}`;
};


export default function QuickProductView({ open, setOpen, productId }) {

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

  const [itemData, setItemData] = useState({
    image: '',
    productName:'',
    price:'',
    sizes: [],
    colors: [],
    image_colors: {},
    category:''
  });
  
  
  const initialSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const frontendColors = mapBackendToFrontendColors(itemData.colors);

  const {image, productName, price, sizes, colors, image_colors,category} = itemData;
  const [isLoading, setIsLoading] = useState(true);
  const [sizeAvailability, setSizeAvailability] = useState({}); // State to hold size availability

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
  
  
  useEffect(() => {
    setIsLoading(true);
  
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/getProductInformation?productId=${productId}`)
        .then(response => response.json())
        .then(data => {
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

  useEffect(() => {
   console.log("set availability ",sizeAvailability)
  }, []); 


  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const navigate = useNavigate();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={image}
                        alt={productName}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {productName}
                      </h2>
                      <p className="text-2xl text-gray-900">
                        {productId}
                      </p>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {price}
                        </p>

                       
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              Color
                            </h4>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4"
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

                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">
                                Size
                              </h4>
                              <a
                                href="#"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Size guide
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
                              <div className="grid grid-cols-4 gap-2">
                                {initialSizes.map(size => (
                                  
                                  <RadioGroup.Option
                                    key={size}
                                    value={size}
                                    disabled={!sizeAvailability[size]} // Disable the button if size is not available
                                    className={({ active }) =>
                                      classNames(
                                        sizeAvailability[size] ? "cursor-pointer bg-white text-gray-900 shadow-sm" : "cursor-not-allowed bg-gray-50 text-gray-200",
                                        active ? "ring-2 ring-indigo-500" : "",
                                        "group relative flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">
                                          {size}
                                        </RadioGroup.Label>
                                        {sizeAvailability[size] ? (
                                          <span
                                            className={classNames(
                                              active ? "border" : "border-2",
                                              checked
                                                ? "border-indigo-500"
                                                : "border-transparent",
                                              "pointer-events-none absolute -inset-px rounded-md"
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line
                                                x1={0}
                                                y1={100}
                                                x2={100}
                                                y2={0}
                                                vectorEffect="non-scaling-stroke"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                            onClick={() => navigate(`/product/${productId}`)}
                          >
                            View More
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
