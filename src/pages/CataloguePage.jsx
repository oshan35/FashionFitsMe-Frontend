import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid';
import { useLocation } from 'react-router-dom';
import { filterValues } from '../constants';
import PriceCardNew from '../components/PriceCardNew';
import { NavBarNew } from '../components';
import { Footer } from '../sections';

const CataloguePage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(true);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headertext, setHeadertext] = useState(location.state.label1);
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
  const totalPages = Math.ceil(products.length / (cardsPerPage * rowsPerPage));

  useEffect(() => {
    if (location.state) {
      const { label1, label2, topic1, topic2 } = location.state;
      handleDefaultValues(topic1, label1, true);
      handleDefaultValues(topic2, label2, true);
    }
  }, [location.state]);

  const handleDefaultValues = (sectionId, optionValue, isChecked) => {
    setFilters(prevFilters =>
      prevFilters.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            options: section.options.map(option =>
              option.value === optionValue ? { ...option, checked: true } : { ...option, checked: false }
            ),
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
    if ((sectionId === "Category" || sectionId === "Gender" || sectionId === "Brand") && isChecked) {
      setHeadertext(optionValue);
    }

    setFilters(prevFilters =>
      prevFilters.map(section =>
        section.id === sectionId
          ? {
              ...section,
              options: section.options.map(option =>
                option.value === optionValue ? { ...option, checked: isChecked } : option
              ),
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
    if (selectedFilters.length > 0) {
      fetch('http://54.191.229.94:5000/products/filter-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ minPrice, maxPrice, selectedFilters }),
      })
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          console.error('Error sending data to backend:', error);
        });
    }
  }, [minPrice, maxPrice, selectedFilters]);

  const handleChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  const valuetext = value => {
    return `LKR ${value}`;
  };

  return (
    <div className="bg-white">
      <section className="">
        <NavBarNew />
      </section>
      <main className="max-w-auto mx-auto ml-10 p-10">
        <section>
          <div className="flex items-baseline justify-between border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{headertext}</h1>
          </div>
        </section>
        <section aria-labelledby="products-heading" className="pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="flex">
            <form className="hidden lg:block w-1/3 pr-10 pl-0">
              <h3 className="sr-only">Categories</h3>
              {filters.map(section => (
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
                                onChange={e => handleCheckboxChange(section.id, option.value, e.target.checked)}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
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
            <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
              {currentProducts.map(product => (
                <PriceCardNew key={product.productId} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="bg-black pt-10">
        <Footer />
      </section>
    </div>
  );
};

export default CataloguePage;
