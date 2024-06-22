import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { filterValues } from '../constants';
import PriceCardNew from '../components/PriceCardNew'
import { NavBarNew } from '../components'
import { Footer } from '../sections'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(true)
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headertext,setHeadertext]=useState(location.state.label1)
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





useEffect(() => {
  if (location.state) {
      const { label1, label2, topic1, topic2 } = location.state;
      handleDefaultValues(topic1, label1, true);
      handleDefaultValues(topic2, label2, true);
  }
}, [location.state]);

const handleDefaultValues = (sectionId, optionValue, isChecked) => {

  console.log("option val",optionValue);
  setFilters(prevFilters =>
      prevFilters.map(section => {
          if (section.id === sectionId) {
            console.log("section id matched",sectionId);
              return {
                  ...section,
                   options: section.options.map(option =>
                    // console.log("option val matched",option.value === optionValue)

                    option.value === optionValue ? { ...option, checked: true } : { ...option, checked: false }
                   
                    
              )
              };
          } else {
              return section;
          }
      })
  );
  setSelectedFilters(prevFilters => {
      let newFilters = [...prevFilters];
      if (isChecked) {
          newFilters.push({ title: sectionId, category: optionValue });
      } else {
          newFilters = newFilters.filter(filter => !(filter.title === sectionId && filter.category === optionValue));
      }
      return newFilters;
  });
};
 
const handleCheckboxChange = (sectionId, optionValue, isChecked) => {
  console.log("checkbox changed",sectionId);
  console.log("checkbox changed",optionValue);


  if((sectionId==="Category" ||  sectionId==="Gender" || sectionId==="Brand") && isChecked){
    setHeadertext(optionValue);
  }



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
  
    setSelectedFilters(prevFilters => {
      let newFilters = [...prevFilters];
      if (isChecked) {
        newFilters.push({ title: sectionId, category: optionValue });
      } else {
        newFilters = newFilters.filter(filter => !(filter.title === sectionId && filter.category === optionValue));
      }
      return newFilters;
    });
  
};

useEffect(() => {
    console.log(selectedFilters);
    // Send the data to the backend using fetch or any other method
    if (selectedFilters.length > 0) {
      fetch('http://34.222.253.72:5000/products/filter-products', {
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

  }, [minPrice, maxPrice, selectedFilters]); 
  
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
     
     <section className=" ">
              <NavBarNew />    
          </section>
     
        <main className="max-w-auto mx-auto ml-10 p-10">
         

          <section>
              <div className=" flex items-baseline justify-between   border-b border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{headertext}</h1>

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
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <a
                                  href={option.href}
                                  className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  {option.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
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
          </section>
            <section aria-labelledby="products-heading" className="pt-6 ">
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="flex">
                  {/* Filters */}
                  <form className="hidden lg:block w-1/3 pr-10 pl-0">
                    <h3 className="sr-only">Categories</h3>
                  

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
                  {/* <div className="grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8"> */}
                  <div className=" -mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 ">   

                    {products.map((product) => (
                    
                      <PriceCardNew product={product}/>
                    ))}
                  </div>
                </div>
              {/* </div> */}
            </section>

            
          </main>
          <section className=" bg-black  pt-10">
              <Footer />
            </section>

      </div>
     
    
  )
}
