import React, { useState, useEffect } from 'react';
import { Modal, Button, Select } from 'antd';

import './PopUpPage.css'; // Import any necessary CSS

const { Option } = Select;

const FilterModal = ({ visible, onCancel,updateSelectedFilters, applyFilters,selectedFilters }) => {

  const [selectedFiltersInternal, setSelectedFiltersInternal] = useState(selectedFilters);
  const [selectedFiltersPrice, setSelectedFiltersPrice] = useState(selectedFilters);

  // Update selected filters when the prop changes
   useEffect(() => {
    setSelectedFiltersInternal((prevFilters) => ({
      ...prevFilters,
      ...selectedFilters,
    }));
  }, [updateSelectedFilters]);

  const handleDropdownChange = (value, dropdownName) => {
    // Update price based on dropdown value
    let priceRange = null;
    if (value === '0- 1000') {
      priceRange = { min: 0, max: 1000 };
    } else if (value === '1000-5000') {
      priceRange = { min: 1000, max: 5000 };
    } else if (value === '5000-10000') {
      priceRange = { min: 5000, max: 10000 };
    } else if (value === '10000-15000') {
      priceRange = { min: 10000, max: 15000 };
    } else if (value === ' 15000') {
      priceRange = { min: 15000, max: Infinity }; // Handle 'more than 15000'
    }else{
      
    }
    if (dropdownName === 'price'){
      setSelectedFiltersInternal((prevFilters) => ({
        ...prevFilters,
        price: priceRange, // Update price with the extracted object
        
      }));
      setSelectedFiltersPrice((prevFilters) => ({
        ...prevFilters,
        [dropdownName]: value, // Update price with the extracted object
        
      }));
    }
    else{
      setSelectedFiltersInternal((prevFilters) => ({
        ...prevFilters,
        [dropdownName]: value,
    }));
    }
  };

  const handleApplyFilters = () => {
    // Apply filters with updated price range
    applyFilters(selectedFiltersInternal);
    onCancel();
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
      {/* Categories dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="categories"
          value={selectedFiltersInternal.categories}
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
          value={selectedFiltersInternal.size}
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

      {/* Price dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Price"
          bordered={false}
          value={selectedFiltersPrice.price}
          onChange={(value) => handleDropdownChange(value, 'price')}
          
        >
          <Option value="0- 1000">less than 1000</Option>
          <Option value="1000-5000">1000-5000</Option>
          <Option value="5000-10000">5000-10000</Option>
          <Option value="10000-15000">10000-15000</Option>
          <Option value=" 15000">more than 15000</Option>
        </Select>
      </div>

      {/* Colour dropdown */}
      <div className="filter-modal-div">
        <Select
          className="filter-modal-select"
          placeholder="Color"
          bordered={false}
          value={selectedFiltersInternal.color}
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
          value={selectedFiltersInternal.gender}
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
          value={selectedFiltersInternal.brand}
          onChange={(value) => handleDropdownChange(value, 'brand')}
          
        >
          <Option value="Nike">Nike</Option>
          <Option value="Adidas">Adidas</Option>
          <Option value="Puma">Puma</Option>
          <Option value="Carnage">Carnage</Option>
          <Option value="Odel">Odel</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default FilterModal;
