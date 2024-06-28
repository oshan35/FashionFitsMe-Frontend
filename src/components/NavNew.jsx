import { Fragment, useState ,useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  ShoppingBagIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import { navigation,navigationSecond } from '../constants';
import { LogoutIcon } from '@heroicons/react/outline'; 

import "/node_modules/flag-icons/css/flag-icons.min.css";

import { Dialog, Tab } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']

export default function NavBarNew() {
  
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [popupMessage, setPopupMessage] = useState(""); // State for popup message
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false)

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
            setCustomerId(cusId);
            setIsLoggedIn(true); 
          } else {
            console.error('Failed to get customer ID:', response.status);
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('An error occurred while fetching the customer ID:', error);
          setIsLoggedIn(false);
        }
      }
  
      fetchCustomerId();
    }, []);
  

    const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
        console.log('clicked button on navbar');
        navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
      };

      const handleLoginButtonClick = () => {
        console.log('clicked button sign in on navbar');
        navigate("/login"); 
      };
      const handleSignButtonClick = () => {
        navigate("/signup"); 
      };
      const handleCartClick = () => {
        if (isLoggedIn) {
          console.log('Navigate to cart');
          navigate('/cart', { state: { customerId } });
        } else {
          console.log('Navigate to sign in');
          setPopupMessage('Please sign in to view your order history.');
          setTimeout(() => setPopupMessage(""), 3000);         }
        navigate("/login"); 

      };
    
      const handleOrderHistoryClick = () => {
        if (isLoggedIn) {
          console.log('Navigate to order history');
          navigate('/orderHistory', { state: { customerId } });
        } else {
          console.log('Navigate to sign in');
          setPopupMessage('Please sign in to view your order history.');
          setTimeout(() => setPopupMessage(""), 3000); 
          navigate("/login"); 
        }

      };

      const handleLogoutClick = () => {
        localStorage.removeItem('sessionData');
        setCustomerId(null);
        setIsLoggedIn(false);
        setPopupMessage('Logged out successfully.');
        setTimeout(() => setPopupMessage(""), 3000); 

        navigate('/');
      };

  return (
    <div className="bg-white">

{/* Message Display */}
{popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* Icon or indicator */}
                    <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{popupMessage}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500"
                      onClick={() => setPopupMessage("")}
                    >
                      {/* Close button icon */}
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.293 3.293a1 1 0 0 1 1.414 0L10 8.586l6.293-6.293a1 1 0 1 1 1.414 1.414L11.414 10l6.293 6.293a1 1 0 1 1-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L8.586 10 2.293 3.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}




    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
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
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
               
              </Tab.Group>
          <Tab.Group >

          </Tab.Group>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6" mr-0>
                <div className="flow-root">
                  <a  className="-m-2 p-2 block font-medium text-gray-900"
                  onClick={handleLoginButtonClick}>
                   
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a  className="-m-2 p-2 block font-medium text-gray-900"
                    onClick={handleSignButtonClick}>
                    Create account

                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                <span class="fi fi-lk"></span>

                  <span className="ml-3 block text-base font-medium text-gray-900">LKR</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

    
      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
         

          {/* Secondary navigation */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto  ">
              <div className="h-16 flex items-center ">
                {/* Logo (lg+) */}
                < div className=" lg:flex ">
                 
                <a href="/">
                  <img
                    className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Home"
                  />
  </a>
                 
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Mega menus */}
                  <Popover.Group className="ml-8">
                    <div className="h-full flex justify-center space-x-8">
                      {navigation.categories.map((category, categoryIdx) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                              <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Categories
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.categories[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.categories[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Brands
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.brands[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.brands[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                         </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

{navigation.pages.map((category, categoryIdx) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                              <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Women
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.Women[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.Women[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Men
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.Men[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.Men[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                         </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

{navigation.featured.map((category, categoryIdx) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                              <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Women
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.Women[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.Women[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                                      <div>
                                        <p id="clothing-heading" className="font-medium text-gray-900">
                                          Men
                                        </p>
                                        <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                          <ul
                                            role="list"
                                            aria-labelledby="clothing-heading"
                                            className="space-y-6 sm:space-y-4"
                                          >
                                            {category.Men[0].map((item, idx) => (
                                              <li key={idx} className="flex">
                                                 <a 
                                                 onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                          <ul
                                            role="list"
                                            aria-label="More clothing"
                                            className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                          >
                                            {category.Men[1].map((item,idx) => (
                                              <li key={idx} className="flex">
                                                <a onClick={() => handleNavbarrButtonClick(item.name1,item.name2, item.topic1,item.topic2)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name1}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                         </Transition>
                            </>
                          )}
                        </Popover>
                      ))}
                    </div>
                  </Popover.Group>
                  
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-2 lg:items-center lg:justify-end lg:space-x-6">
                    <a 
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      onClick={handleLoginButtonClick}>

                      Sign in
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      onClick={handleSignButtonClick}>
                      Create account

                    </a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a  className="text-gray-700 hover:text-gray-800 flex items-center">
                    <span class="fi fi-lk"></span>

                      <span className="ml-3 block text-sm font-medium">LKR</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
                   {/* Order History */}

                  <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="hidden lg:flex">
                      {/* <a  
                      onClick={handleOrderHistoryClick}
                      className="text-gray-700 hover:text-gray-800"
                      >
                        Order History
                      </a> */}
                    </div>
                  </div>
                 </div>
                 <div className="ml-4 flow-root lg:ml-6">
                <a
                  className="group -m-2 p-2 flex items-center"
                  onClick={handleLogoutClick}
                >
                  <LogoutIcon className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">Logout</span>
                </a>
              </div>
                  {/* Search */}
                  <div className="flex lg:ml-6">
                  <a  className="group -m-2 p-2 flex items-center"    
                      onClick={handleCartClick}
                      >
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
                      <span className="">Shopping cart</span>
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
