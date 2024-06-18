import React, { createContext, useState } from 'react';

const FilterContext = createContext({
  filters: {
    categories: null,
    size: null,
    price: null,
    color: null,
    gender: null,
    brand: null,
  },
  setFilter: (filter, value) => {},
  resetFilters: () => {},
});

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    categories: null,
    size: null,
    price: null,
    color: null,
    gender: null,
    brand: null,
  });

  const setFilter = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  const resetFilters = () => {
    setFilters({
      categories: null,
      size: null,
      price: null,
      color: null,
      gender: null,
      brand: null,
    });
  };

  return (
    <FilterContext.Provider value={{ filters, setFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
