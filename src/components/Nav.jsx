import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  ShoppingBagIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { navigation,navigationSecond } from '../constants';
import { Dialog, Tab } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']

export default function Nav() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
        console.log('clicked button on navbar');
        navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
      };
     

      const handleLoginButtonClick = () => {
        console.log('clicked button sign in on navbar');
        navigate("/checkout"); 
      };

  return (
    <div className="bg-white">

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
             
              <div className="border-t border-gray-200 py-6 px-4 space-y-6" mr-0>
                <div className="">
                  <a  className="-m-2 p-2 block font-medium text-gray-900" 
                    onClick={() => handleNavbarrButtonClick('Women','Women','Gender','Gender')} >
                                      
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a  className="-m-2 p-2 block font-medium text-gray-900">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>

                <div className="">
                  {/* Mega menus */}
                  <Popover.Group className="ml-8">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10">
                    <a  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={() => handleNavbarrButtonClick('Women','Women','Gender','Gender')} >
                     New Arrivals         
                     </a>

                    <a  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={() => handleNavbarrButtonClick('Women','Women','Gender','Gender')} >
                    Shop Now             
                    </a>
                  </div>
                  </Popover.Group>
                  
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a href="#" className="hover:text-gray-800 cursor-pointer">
                    Create account
                    </a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <span class="fi fi-lk"></span>

                      <span className="ml-3 block text-sm font-medium">LKR</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
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
