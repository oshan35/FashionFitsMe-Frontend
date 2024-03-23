
import { Fragment, useState,useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useLocation } from 'react-router-dom';
import { filterValues } from '../constants';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Flex } from 'antd';
import { PriceCardNew } from '../components';
const CataloguePage=()=> {

    const location = useLocation();
   
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const [selectedFilters, setSelectedFilters] = useState([]);
      const [filters, setFilters] = useState(filterValues);
      const [products, setProducts] = useState([]);
    
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30000);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;
    const rowsPerPage = 4;
    const [isLoading, setIsLoading] = useState(true);
    const indexOfLastProduct = currentPage * cardsPerPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - cardsPerPage * rowsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / (cardsPerPage * rowsPerPage));
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };


 
    
    // Function to send data to the backend
   
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    useEffect(() => {
        // Set filters based on location state when component mounts
        if (location.state && location.state.topic && location.state.label) {
            // Here you can set your filters based on the topic and label from the state
            // For demonstration purposes, let's assume setting filters for color and category
           

            setFilters(prevFilters =>
                prevFilters.map(section => {

                    if (section.id === 'Color' && location.state.topic === 'Color') {
                        
                        return {
                            ...section,
                            options: section.options.map(option =>
                                option.value === location.state.label ? { ...option, checked: true } : { ...option, checked: false }
                            )
                        };
                    } else if (section.id === 'category' && location.state.topic === 'category') {
                        return {
                            ...section,
                            options: section.options.map(option =>
                                option.value === location.state.label ? { ...option, checked: true } : { ...option, checked: false }
                            )
                        };
                    } else {
                        return section;
                    }
                })
            );
           handleDefaultValues(location.state.topic,location.state.label,true);

        }
    }, [location.state]);

 
    const handleDefaultValues=(sectionId, optionValue, isChecked)=>{
        setSelectedFilters(prevFilters => {
            let newFilters = [...prevFilters];
            if (isChecked) {
              // If the checkbox is checked, add the selected filter
              newFilters.push({ title: sectionId, category: optionValue });
            } else {
              // If the checkbox is unchecked, remove the selected filter
              newFilters = newFilters.filter(filter => !(filter.title === sectionId && filter.category === optionValue));
            }
            return newFilters;
          });
    }
    
      
     
    const handleCheckboxChange = (sectionId, optionValue, isChecked) => {
        // Update the checked status of the option in the filters array
        setFilters(prevFilters =>
          prevFilters.map(section =>
            section.id === sectionId
              ? {
                  ...section,
                  options: section.options.map(option =>
                    option.value === optionValue ? { ...option, checked: isChecked } : option
                  )
                }
              : section
          )
        );
      
        // Asynchronously update or remove selected items based on checkbox status
        setSelectedFilters(prevFilters => {
          let newFilters = [...prevFilters];
          if (isChecked) {
            // If the checkbox is checked, add the selected filter
            newFilters.push({ title: sectionId, category: optionValue });
          } else {
            // If the checkbox is unchecked, remove the selected filter
            newFilters = newFilters.filter(filter => !(filter.title === sectionId && filter.category === optionValue));
          }
          return newFilters;
        });
      
        // Since setSelectedFilters is asynchronous, move the send to backend logic inside useEffect or use async/await pattern
    };

    useEffect(() => {
        console.log(selectedFilters);
        // Send the data to the backend using fetch or any other method
        if (selectedFilters.length > 0) {
          fetch('http://localhost:5000/products/filter-products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ minPrice, maxPrice, selectedFilters })
          })
          .then(response => response.json())
          .then(data => {
            setProducts(data);
            console.log('Response from backend:', data);
          })
          .catch(error => {
            // Handle error if any
            console.error('Error sending data to backend:', error);
          });
        }

      }, [minPrice, maxPrice, selectedFilters]); // Only re-run the effect if selectedFilters changes
      
      const handleChange = (event, newValue) => {
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
        console.log("Selected Price Range:", newValue);
      };
    
      const valuetext = (value) => {
        return `LKR ${value}`;
      };
   

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="">Categories</h3>
                  
                  

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    // defaultChecked={option.checked}

                                    checked={option.checked}
                                    onChange={(e) => handleCheckboxChange(section.id, option.value, e.target.checked)}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                   
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid xl:grid-cols-[250px_minmax(1000px,_1fr)_100px] sm:grid-cols-[200px_minmax(400px,_1fr)_100px]" >
              {/* Filters */}
              <form className="hidden lg:block mr-5">
                <h3 className="sr-only">Categories</h3>
                {/* <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}
 <div className="py-1">
                      
                        
                      <Flex vertical='vertical' className="px-2 py-3 h-auto w-full mr-5">
                    <div className="font-medium">Price  (LKR)</div>
                    
                    <Box >
                      <Slider
                        size="small"
                        sx={{                          
                          color: 'black',
                          '& .MuiSlider-thumb': {
                            borderRadius: '0.3px',
                          },
                        }}
                        getAriaLabel={() => 'Temperature range'}
                        value={[minPrice, maxPrice]}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={500} 
                        max={30000} 
                      />
                    </Box>
                  </Flex>
                      </div>
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={option.checked}
                                  onChange={(e) => handleCheckboxChange(section.id, option.value, e.target.checked)}                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
                {/* Replace with your content */}
                <div className=" ">           
                    
                <PriceCardNew products={products}/>

              </div>
                </div>
                
          </section>
        </main>
      </div>
    </div>
  )
}

export default CataloguePage;