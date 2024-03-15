import './CategoryFilter.css'; 
import React from 'react';
import PropTypes from 'prop-types';
import { useSelectedFilters } from '../../Contexts/SelectedFilterContext'; 
import { Flex } from 'antd';

  function CategoryFilter({ title, categories }) {
    const { selectedFilters, updateSelectedFilters, removeSelectedFilter } = useSelectedFilters();
  
    const handleFilterChange = (categoryId) => {
      // Check if selectedFilters exists and has a length
      if (selectedFilters && selectedFilters.length > 0) {
        const isSelected = selectedFilters.some(filter => filter.title === title && filter.category === categoryId);
        if (isSelected) {
          removeSelectedFilter(title, categoryId);
        } else {
          updateSelectedFilters(title, categoryId);
        }
      } else {
        // If selectedFilters is undefined or empty, always update the filters
        updateSelectedFilters(title, categoryId);
      }
    };
    
  
    // Group selected filters by title
    const selectedFiltersByTitle = selectedFilters.reduce((acc, filter) => {
      if (!acc[filter.title]) {
        acc[filter.title] = { title: filter.title, categories: [] };
      }
      acc[filter.title].categories.push(filter.category);
      return acc;
    }, {});
  
    console.log("Selected Filters:", Object.values(selectedFiltersByTitle));


    return (
      <div className="category-filter mt-2">
        <Flex vertical='vertical' className="filter-item-title">
          <div className="font-medium">{title}</div>
          <hr className="separator" />
        </Flex>
        <ul className="filter-option-list">
          {categories.map((c) => {
            const isChecked = selectedFilters.some(filter => filter.title === title && filter.category === c.categoryId);
  
            return (
              <li key={c.uuid} className="filter-option-item">
                <a
                  href="#"
                  className="flex-justify-start-items-center"
                  onClick={() => handleFilterChange(c.categoryId)}
                >
                {isChecked ? (
                  <svg
                    className="filter-option-icon-checked"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#212121"
                      d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="filter-option-icon-unchecked"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#212121"
                      d="M5.75,3 L18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 Z M5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 L5.75,4.5 Z"
                    />
                  </svg>
                )}
                <span className="filter-option-text">{c.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CategoryFilter.propTypes = {
  currentFilters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.string,
      name: PropTypes.string,
      uuid: PropTypes.string
    })
  ).isRequired,
  updateFilter: PropTypes.func.isRequired
};

export default CategoryFilter;
