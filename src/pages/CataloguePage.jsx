import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { filterValues } from '../constants';
import PriceCardNew from '../components/PriceCardNew'
import { NavBarNew } from '../components'

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
// const filters = [
//   {
//     id: 'color',
//     name: 'Color',
//     options: [
//       { value: 'white', label: 'White', checked: false },
//       { value: 'beige', label: 'Beige', checked: false },
//       { value: 'blue', label: 'Blue', checked: true },
//       { value: 'brown', label: 'Brown', checked: false },
//       { value: 'green', label: 'Green', checked: false },
//       { value: 'purple', label: 'Purple', checked: false },
//     ],
//   },
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: true },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
//     ],
//   },
//   {
//     id: 'size',
//     name: 'Size',
//     options: [
//       { value: '2l', label: '2L', checked: false },
//       { value: '6l', label: '6L', checked: false },
//       { value: '12l', label: '12L', checked: false },
//       { value: '18l', label: '18L', checked: false },
//       { value: '20l', label: '20L', checked: false },
//       { value: '40l', label: '40L', checked: true },
//     ],
//   },
// ]
// const products = [
//   {
//     id: 1,
//     name: 'Nomad Pouch',
//     href: '#',
//     price: '$50',
//     availability: 'White and Black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
//     imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
//   },
//   {
//     id: 2,
//     name: 'Zip Tote Basket',
//     href: '#',
//     price: '$140',
//     availability: 'Washed Black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
//     imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
//   },
//   // More products...
// ]


const footerNavigation = {
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Saved Items', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Redeem Gift card', href: '#' },
  ],
  service: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
    { name: 'Get in touch', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  connect: [
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
}

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




// useEffect(() => {
//     // Set filters based on location state when component mounts
//     if (location.state && location.state.topic && location.state.label) {
//         // Here you can set your filters based on the topic and label from the state
//         // For demonstration purposes, let's assume setting filters for color and category
       

//         setFilters(prevFilters =>
//             prevFilters.map(section => {

//                 if (section.id === 'Color' && location.state.topic === 'Color') {
                    
//                     return {
//                         ...section,
//                         options: section.options.map(option =>
//                             option.value === location.state.label ? { ...option, checked: true } : { ...option, checked: false }
//                         )
//                     };
//                 } else if (section.id === 'Category' && location.state.topic === 'Category') {
//                     return {
//                         ...section,
//                         options: section.options.map(option =>
//                             option.value === location.state.label ? { ...option, checked: true } : { ...option, checked: false }
//                         )
//                     };
//                 } else {
//                     return section;
//                 }
//             })
//         );
//        handleDefaultValues(location.state.topic,location.state.label,true);

//     }
// }, [location.state]);


// const handleDefaultValues=(sectionId, optionValue, isChecked)=>{
//     setSelectedFilters(prevFilters => {
//         let newFilters = [...prevFilters];
//         if (isChecked) {
//           // If the checkbox is checked, add the selected filter
//           newFilters.push({ title: sectionId, category: optionValue });
//         } else {
//           // If the checkbox is unchecked, remove the selected filter
//           newFilters = newFilters.filter(filter => !(filter.title === sectionId && filter.category === optionValue));
//         }
//         return newFilters;
//       });
// }

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
      <div>
        {/* Mobile menu */}
       

      <NavBarNew/>
      </div>

      <div>
        {/* Mobile filter dialog */}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
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

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex">
              {/* Filters */}
              <form className="hidden lg:block w-1/3 pr-10 pl-0">
                <h3 className="sr-only">Categories</h3>
                {/* <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

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
                  // <a key={product.product.id} href={product.href} className="group text-sm">
                  //     <div className="w-58 h-72 rounded-lg overflow-hidden group-hover:opacity-75">
                  //     <img
                  //       src={`data:image/jpeg;base64, ${product.productImages[0].imageData}`}
                  //       alt={product.product.id}
                  //       className="w-full h-full object-center object-cover"
                  //     />
                  //   </div>
                  //   <h3 className="mt-4 font-medium text-gray-900">{product.product.productName}</h3>
                  //   {/* <p className="text-gray-500 italic">{product.availability}</p> */}
                  //   <p className="mt-2 font-medium text-gray-900">{product.product.price}</p>
                  // </a>
                  <PriceCardNew product={product}/>
                ))}
              </div>
            </div>
            {/* </div> */}
          </section>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-white">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 py-20 grid grid-cols-2 gap-8 sm:gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
              <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.service.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <p>Shipping to Canada ($CAD)</p>
                <p className="ml-3 border-l border-gray-200 pl-3">English</p>
              </div>
              <p className="mt-6 text-sm text-gray-500 text-center sm:mt-0">&copy; 2021 Clothing Company, Ltd.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
