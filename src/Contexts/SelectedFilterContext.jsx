import React, { createContext, useState, useContext } from 'react';

const SelectedFiltersContext = createContext();

export const useSelectedFilters = () => useContext(SelectedFiltersContext);

// Provider component to wrap the app and provide selected filters context
export const SelectedFiltersProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(30000);

  // Function to update selected filters
  const updateSelectedFilters = (title, category) => {
    setSelectedFilters([...selectedFilters, { title, category }]);
  };

  // Function to remove a selected filter
  const removeSelectedFilter = (title, category) => {
    setSelectedFilters(selectedFilters.filter(filter => !(filter.title === title && filter.category === category)));
  };

  // Function to reset all selected filters
  const resetSelectedFilters = () => {
    setSelectedFilters([]);
    setMinPrice(500);
    setMaxPrice(30000);
  };

  return (
    <SelectedFiltersContext.Provider
      value={{
        selectedFilters,
        minPrice,
        maxPrice,
        updateSelectedFilters,
        removeSelectedFilter,
        resetSelectedFilters,
        setMinPrice,
        setMaxPrice
      }}
    >
      {children}
    </SelectedFiltersContext.Provider>
  );
};
