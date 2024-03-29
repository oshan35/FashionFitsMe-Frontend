/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";


const navigation = {
  categories: [
    {
      name:'Women',
      categories: [
        [
            { name1:'Tops' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },
            { name1:'Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            {name1:'Denims' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }  , 
            { name1:'Work Wear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Casuals' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Pants' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },
            { name1:'Linen' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'   },

        ],
        [
            { name1:'Premium Dresses' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  },  
            { name1:' Activewear' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:' Shorts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:' T-Shirts' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 
            { name1:' Browse All' , topic1: 'Category' ,name2:'Women' , topic2: 'Gender'  }, 


         //   { name: 'Activewear', topic: 'Category'  },
        //   { name: 'Shorts', topic: 'Category'  },
        //   { name: 'Casuals', topic: 'Category'  },
        //   { name: 'Linen', topic: 'Category'  },
        //   { name: 'Browse All', topic: 'Category'  },
        ],
      
      ],
    //   brands: [
    //     { name: 'Shoes', topic: 'Brand' },
    //     { name: 'Jewelry', topic: 'Brand' },
    //     { name: 'Handbags', topic: 'Brand' },
    //     { name: 'Socks', topic: 'Brand' },
    //     { name: 'Hats', topic: 'Brand' },
    //     { name: 'Browse All', topic: 'Brand' },
    //   ],
    //   categories: [
    //     { name: 'New Arrivals', href: '#' },
    //     { name: 'Sale', href: '#' },
    //     { name: 'Basic Tees', href: '#' },
    //     { name: 'Artwork Tees', href: '#' },
    //   ],
    },
    {
      name: 'Men',
      categories: [
        [
          { name: 'Dress Shirts', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Jackets', href: '#' },
          { name: 'T-Shirts', href: '#' },
          { name: 'Jeans', href: '#' },
          { name: 'Hoodies', href: '#' },
        ],
        [
          { name: 'Vests', href: '#' },
          { name: 'Kilts', href: '#' },
          { name: 'Outdoors', href: '#' },
          { name: 'Capes', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
    //   accessories: [
    //     { name: 'Watches', href: '#' },
    //     { name: 'Boots', href: '#' },
    //     { name: 'Fanny Packs', href: '#' },
    //     { name: 'Sunglasses', href: '#' },
    //     { name: 'Browse All', href: '#' },
    //   ],
    //   categories: [
    //     { name: 'Just Added', href: '#' },
    //     { name: 'Clearance', href: '#' },
    //     { name: 'Graphic Tees', href: '#' },
    //   ],
    },
  ],
  other: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBarNew() {
    const navigate = useNavigate();

    const handleNavbarrButtonClick = (label1,label2, topic1,topic2) => {
        console.log('clicked button on navbar');
        navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
      };



  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <div className="flex-1 flex">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>


              {/* Flyout menus */}
              <Popover.Group className="absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0 sm:justify-center sm:overflow-visible sm:pb-0">
                  {navigation.categories.map((category, categoryIdx) => (
                    <Popover key={categoryIdx} className="flex">
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
                                          Clothing
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
                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8">
                                      <div>
                                        <p id="accessories-heading" className="font-medium text-gray-900">
                                          Accessories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="accessories-heading"
                                          className="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"
                                        >
                                          {/* {category.accessories.map((item,idx) => (
                                            <li key={idx} className="flex">
                                               <a onClick={() => handleNavbarrButtonClick(item.name, item.topic, item.path)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name}
                                                </a>
                                            </li>
                                          ))} */}
                                        </ul>
                                      </div>
                                      <div>
                                        <p id="categories-heading" className="font-medium text-gray-900">
                                          Categories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="categories-heading"
                                          className="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"
                                        >
                                          {/* {category.categories.map((item,idx) => (
                                            <li key={idx} className="flex">
                                               <a onClick={() => handleNavbarrButtonClick(item.name, item.topic, item.path)} className="hover:text-gray-800 cursor-pointer">
                                                  {item.name}
                                                </a>
                                            </li>
                                          ))} */}
                                        </ul>
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

                  {/* {navigation.other.map((item,idx) => (
                     <a
                     key={idx}
                     onClick={() => navigate(item.href)}
                     className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                   >
                     {item.name}
                   </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className="flex-1 flex items-center justify-end">
                {/* Search */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
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
        </nav>
      </header>
    </div>
  )
}
