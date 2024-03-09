
import React, { useContext } from 'react';
import { Modal, Button, Select } from 'antd';
import './PopUpPage.css'; // Import any necessary CSS
import { FilterContext } from '../../Contexts/FilterContext' // Import FilterContext from your context provider
import { useEffect } from 'react';

const { Option } = Select;


const FilterModal = ({ visible, onCancel }) => {
  const { filters, setFilter } = useContext(FilterContext); // Access the context

  const handleDropdownChange = (value, dropdownName) => {
    // Update the filter based on dropdown value
    if (dropdownName === 'price') {
      const priceRange = getPriceRange(value);
      setFilter(dropdownName, priceRange);
    } else {
      setFilter(dropdownName, value);
    }
  };




  const resetFilters = () => {
    setFilter('categories', undefined);
    setFilter('size', undefined);
    setFilter('color', undefined);
    setFilter('gender', undefined);
    setFilter('brand', undefined);
    setFilter('price', undefined);
  };


  const getPriceRange = (value) => {
    switch (value) {
      case '0-1000':
        return { min: 0, max: 1000 };
      case '1000-5000':
        return { min: 1000, max: 5000 };
      case '5000-10000':
        return { min: 5000, max: 10000 };
      case '10000-15000':
        return { min: 10000, max: 15000 };
      case '15000':
        return { min: 15000, max: Infinity };
      default:
        return null;
    }
  };

  const handleApplyFilters = () => {
    // Apply filters logic here if needed
    onCancel();
    resetFilters();
  };

  return (
    <Modal
      title={<span style={{ fontSize: '35px', color: 'black'}} className='custom-modal-title-section'>Filter By</span>}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="apply" className='ApplyButton' onClick={handleApplyFilters}>
          Apply Filter
        </Button>,
      ]}
    >
      
      <div className="filter-modal-div">
         <Select
          className="filter-modal-select"
          placeholder="categories"
          value={filters.categories}
          onChange={(value) => handleDropdownChange(value, 'categories')}
          bordered={false}
        >
          <Option value="Jeans">Jeans</Option>
          <Option value="Pants">Pants</Option>
          <Option value="Polos">Polos</Option>
          <Option value="Shirts">Shirts</Option>
          <Option value="Shorts">Shorts</Option>
          <Option value="T-shirts">T-Shirts</Option>
        

        </Select>
      </div>

      {/* Size dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Size"
          bordered={false}
          value={filters.size}
          onChange={(value) => handleDropdownChange(value, 'size')}
        > 
          <Option value="XXS">XXS</Option>
          <Option value="XS">XS</Option>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
          <Option value="XXL">XXL</Option>
         
            </Select>
      </div>

    

      {/* Colour dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Color"
          bordered={false}
          value={filters.color}
          onChange={(value) => handleDropdownChange(value, 'color')}
         
        >
          <Option value="Red">Red</Option>
          <Option value="Blue">Blue</Option>
          <Option value="Green">Green</Option>
          <Option value="Black">Black</Option>
          <Option value="Grey">Grey</Option>
          <Option value="Navy">Navy</Option>
          <Option value="Brown">Brown</Option>
          <Option value="Orange">Orange</Option>
          <Option value="White">White</Option>
          <Option value="Yellow">Yellow</Option>
          <Option value="Purple">Purple</Option>


        </Select>
      </div>

      {/* Gender dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Gender"
          bordered={false}
          value={filters.gender}
          onChange={(value) => handleDropdownChange(value, 'gender')}
        >
          <Option value="Men">Men</Option>
          <Option value="Women">Women</Option>
          <Option value="Unisex">Unisex</Option>
          <Option value="Kids">Kids</Option>
        </Select>
      </div>

      {/* Brand dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Brand"
          bordered={false}
          value={filters.brand}
          onChange={(value) => handleDropdownChange(value, 'brand')}
          
        >
          <Option value="Nike">Nike</Option>
          <Option value="Adidas">Adidas</Option>
          <Option value="Puma">Puma</Option>
          <Option value="Carnage">Carnage</Option>
          <Option value="Odel">Odel</Option>
        </Select>
      </div>

      {/* Price dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Price"
          bordered={false}
          value={filters.price ? getPriceLabel(filters.price) : undefined}
          onChange={(value) => handleDropdownChange(value, 'price')}
        >
          <Option value="0-1000">less than 1000</Option>
          <Option value="1000-5000">1000-5000</Option>
          <Option value="5000-10000">5000-10000</Option>
          <Option value="10000-15000">10000-15000</Option>
          <Option value="15000">more than 15000</Option>
        </Select>
      </div>
    </Modal>
  );
};

const getPriceLabel = (priceRange) => {
  if (priceRange.min === 0 && priceRange.max === 1000) {
    return '0-1000';
  } else if (priceRange.min === 1000 && priceRange.max === 5000) {
    return '1000-5000';
  } else if (priceRange.min === 5000 && priceRange.max === 10000) {
    return '5000-10000';
  } else if (priceRange.min === 10000 && priceRange.max === 15000) {
    return '10000-15000';
  } else if (priceRange.min === 15000 && priceRange.max === Infinity) {
    return '15000';
  }
};

export default FilterModal;
