import React, { createContext, useState } from 'react';

const FilterContext = createContext({
  filters: {
    categories: null,
    size: null,
    price:null,
    color: null,
    gender: null,
    brand: null,
  },
  setFilter: (filter, value) => {},
});

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
      categories: null,
      size: null,
      price:null,
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



  return (
    <FilterContext.Provider value={{ filters, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
