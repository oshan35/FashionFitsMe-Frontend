import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  ShoppingBagIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import { navigation,navigationSecond } from '../constants';

import { Dialog, Tab } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'

// const navigation = {
//   categories: [
//     {
//       name: 'Women',
//       featured: [
//         { name: 'Sleep', href: '#' },
//         { name: 'Swimwear', href: '#' },
//         { name: 'Underwear', href: '#' },
//       ],
//       collection: [
//         { name: 'Everything', href: '#' },
//         { name: 'Core', href: '#' },
//         { name: 'New Arrivals', href: '#' },
//         { name: 'Sale', href: '#' },
//       ],
//       categories: [
//         { name: 'Basic Tees', href: '#' },
//         { name: 'Artwork Tees', href: '#' },
//         { name: 'Bottoms', href: '#' },
//         { name: 'Underwear', href: '#' },
//         { name: 'Accessories', href: '#' },
//       ],
//       brands: [
//         { name: 'Full Nelson', href: '#' },
//         { name: 'My Way', href: '#' },
//         { name: 'Re-Arranged', href: '#' },
//         { name: 'Counterfeit', href: '#' },
//         { name: 'Significant Other', href: '#' },
//       ],
//     },
//     {
//       name: 'Men',
//       featured: [
//         { name: 'Casual', href: '#' },
//         { name: 'Boxers', href: '#' },
//         { name: 'Outdoor', href: '#' },
//       ],
//       collection: [
//         { name: 'Everything', href: '#' },
//         { name: 'Core', href: '#' },
//         { name: 'New Arrivals', href: '#' },
//         { name: 'Sale', href: '#' },
//       ],
//       categories: [
//         { name: 'Artwork Tees', href: '#' },
//         { name: 'Pants', href: '#' },
//         { name: 'Accessories', href: '#' },
//         { name: 'Boxers', href: '#' },
//         { name: 'Basic Tees', href: '#' },
//       ],
//       brands: [
//         { name: 'Significant Other', href: '#' },
//         { name: 'My Way', href: '#' },
//         { name: 'Counterfeit', href: '#' },
//         { name: 'Re-Arranged', href: '#' },
//         { name: 'Full Nelson', href: '#' },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// }
// const products = [
//   {
//     id: 1,
//     name: 'Nomad Tumbler',
//     description:
//       'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
//     href: '#',
//     price: '35.00',
//     status: 'Preparing to ship',
//     step: 1,
//     date: 'March 24, 2021',
//     datetime: '2021-03-24',
//     address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
//     email: 'f•••@example.com',
//     phone: '1•••••••••40',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg',
//     imageAlt: 'Insulated bottle with white base and black snap lid.',
//   },
//   {
//     id: 2,
//     name: 'Minimalist Wristwatch',
//     description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
//     href: '#',
//     price: '149.00',
//     status: 'Shipped',
//     step: 0,
//     date: 'March 23, 2021',
//     datetime: '2021-03-23',
//     address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
//     email: 'f•••@example.com',
//     phone: '1•••••••••40',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-02.jpg',
//     imageAlt:
//       'Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.',
//   },
//   // More products...
// ]
// const footerNavigation = {
//   account: [
//     { name: 'Manage Account', href: '#' },
//     { name: 'Saved Items', href: '#' },
//     { name: 'Orders', href: '#' },
//     { name: 'Redeem Gift card', href: '#' },
//   ],
//   service: [
//     { name: 'Shipping & Returns', href: '#' },
//     { name: 'Warranty', href: '#' },
//     { name: 'FAQ', href: '#' },
//     { name: 'Find a store', href: '#' },
//     { name: 'Get in touch', href: '#' },
//   ],
//   company: [
//     { name: 'Who we are', href: '#' },
//     { name: 'Press', href: '#' },
//     { name: 'Careers', href: '#' },
//     { name: 'Terms & Conditions', href: '#' },
//     { name: 'Privacy', href: '#' },
//   ],
//   connect: [
//     { name: 'Instagram', href: '#' },
//     { name: 'Pinterest', href: '#' },
//     { name: 'Twitter', href: '#' },
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']

export default function NavBarNew() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
        console.log('clicked button on navbar');
        navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
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
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create account
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
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

                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Account</span>
                          <UserIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div className="flow-root">
                      <a href="#" className="group -m-2 p-2 flex items-center">
                        <ShoppingCartIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
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
